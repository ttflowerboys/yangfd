# -*- coding: utf-8 -*-
from __future__ import unicode_literals, absolute_import
from datetime import datetime
from libfelix.f_common import f_app
from libfelix.f_interface import f_api, abort
from bson.objectid import ObjectId

import logging
logger = logging.getLogger(__name__)


plot_params = dict(
    name=("i18n", None, str),
    property_id=ObjectId,
    investment_type=(list, None, 'enum:investment_type'),
    status=str,
    floor=str,
    bedroom_count=int,
    living_room_count=int,
    bathroom_count=int,
    kitchen_count=int,
    space=("i18n:area", None, "meter ** 2, foot ** 2"),
    total_price="i18n:currency",
    description=str,
)


@f_api('/plot/add', params=plot_params)
@f_app.user.login.check(role=['admin', 'jr_admin', 'sales', 'jr_sales'])
def plot_add(params):
    return f_app.plot.add(params)


@f_api('/plot/<plot_id>')
def plot_get(plot_id):
    return f_app.plot.output([plot_id])[0]


@f_api('/plot/<plot_id>/search', params=dict(
    property_id=ObjectId,
    status=(list, None, str),
    per_page=int,
    time=datetime,
))
@f_app.user.login.check(role=['admin', 'jr_admin', 'sales', 'jr_sales'])
def plot_search(plot_id, params):
    per_page = params.pop("per_page", 0)
    return f_app.plot.output(f_app.plot.search(params, per_page=per_page))


@f_api('/plot/<plot_id>/edit', params=plot_params)
@f_app.user.login.check(role=['admin', 'jr_admin', 'sales', 'jr_sales'])
def plot_edit(plot_id, params):
    return f_app.plot.update_set(plot_id, params)


@f_api('/plot/<plot_id>/remove')
@f_app.user.login.check(role=['admin', 'jr_admin', 'sales', 'jr_sales'])
def plot_remove(plot_id):
    return f_app.plot.remove(plot_id)
