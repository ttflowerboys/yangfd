# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import
from libfelix.f_common import f_app
from libfelix.f_interface import f_api, abort
from bson.objectid import ObjectId
from datetime import datetime
import logging
logger = logging.getLogger(__name__)


@f_api('/order/add', params=dict(
    price=(float, True),
    payment_method_id=(str, "virtual"),
    async=(bool, 1),
    type=(str, True),
    item_id=(ObjectId, True),
))
@f_app.user.login.check(force=True)
def order_add(user, params):
    """
    ``type`` can be ``recharge``, ``withdrawal``, ``recovery``, ``earnings``, ``investment``
    """
    force_price = params.pop("price")
    if params["type"] not in ["recharge", "withdrawal", "recovery", "earnings", "investment"]:
        abort(40000, logger.warning("Invalid params: type", exc_info=False))
    return f_app.order.output([f_app.shop.item_buy(params["item_id"], params, force_price=force_price)])[0]


@f_api('/order/search', params=dict(
    item_id=ObjectId,
    per_page=int,
    time=datetime,
    starttime=datetime,
    endtime=datetime,
    user_id=ObjectId,
    shop_id=ObjectId,
    type=str,
))
@f_app.user.login.check(force=True)
def order_search(user, params):
    per_page = params.pop("per_page", 0)
    if "user_id" in params:
        params["user.id"] = str(params.pop("user_id"))
    if "shop_id" in params:
        params["shop.id"] = str(params.pop("shop_id"))

    time_start = params.pop("starttime", None)
    time_end = params.pop("endtime", None)

    if "type" in params and params["type"] not in ["recharge", "withdrawal", "recovery", "earnings", "investment"]:
        abort(40000, logger.warning("Invalid params: type", exc_info=False))

    if time_start or time_end:
        if time_start and time_end:
            if time_end < time_start:
                abort(40000, logger.warning("Invalid params: end time is earlier than start time.", exc_info=False))
        if time_start is not None:
            params["last_time"] = time_start
        if time_end is not None:
            params["time"] = time_end

    user_role = f_app.user.get_role(user["id"])
    if set(user_role) & set(["admin", "jr_admin"]):
        order_id_list = f_app.order.custom_search(params, per_page=per_page)
    else:
        params["user.id"] = user["id"]
        order_id_list = f_app.order.custom_search(params, per_page=per_page)
    return f_app.order.output(order_id_list)[0]


@f_api('/order/<order_id>')
@f_app.user.login.check(force=True)
def order_get(user, order_id):
    user = f_app.user.get(user["id"])
    if "admin" in user["role"]:
        return f_app.order.output([order_id], permission_check=False)[0]
    else:
        return f_app.order.output([order_id])[0]


@f_api('/order/item_snapshot')
@f_app.user.login.check(force=True)
def order_item_snapshot(user, order_id):
    params = {"user.id": user["id"], "type": "investment"}
    order_list = f_app.order.output(f_app.order.custom_search(params, per_page=0), permission_check=False)
    item_list = []
    item_id_set = set()
    for order in order_list:
        if isinstance(order.get('item'), dict):
            if order["item"]["id"] not in item_id_set:
                item_list.append(order["item"])
                item_id_set.add(order["item"]["id"])
        else:
            logger.warning("Invalid order found, this should be a BUG!", exc_info=False)

    return item_list
