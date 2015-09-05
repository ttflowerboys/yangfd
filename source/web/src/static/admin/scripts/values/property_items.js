/**
 * Created by Michael on 14/11/19.
 */
angular.module('app')
    .constant('propertyItems', [
        {name: i18n('名称'), value: 'name'},
        {name: i18n('房产类型'), value: 'property_type'},
        {name: i18n('国家'), value: 'country'},
        {name: i18n('城市'), value: 'city'},
        {name: i18n('街区'), value: 'street'},
        {name: i18n('邮编'), value: 'zipcode'},
        {name: i18n('地址详情'), value: 'address'},
        {name: i18n('真实地址'), value: 'real_address'},
        {name: i18n('亮点'), value: 'highlight'},
        {name: i18n('详情'), value: 'description'},
        {name: i18n('预计租金年化回报率'), value: 'annual_cash_return_estimated'},
        {name: i18n('预计年总回报率'), value: 'annual_return_estimated'},
        {name: i18n('开发商包租百分比'), value: 'rental_guarantee_rate'},
        {name: i18n('开发商包租年限'), value: 'rental_guarantee_term'},
        {name: i18n('投资标签'), value: 'intention'},
        {name: i18n('投资类型'), value: 'investment_type'},
        {name: i18n('产权类型'), value: 'equity_type'},
        {name: i18n('装修风格'), value: 'decorative_style'},
        {name: i18n('地理位置经度'), value: 'longitude'},
        {name: i18n('地理位置纬度'), value: 'latitude'},
        {name: i18n('实景图'), value: 'reality_images'},
        {name: i18n('生活配套设施图'), value: 'surroundings_images'},
        {name: i18n('房产价格类型'), value: 'property_price_type'},
        {name: i18n('同等房产描述'), value: 'equal_property_description'},
        {name: i18n('历史成交价格'), value: 'historical_price'},
        {name: i18n('月收支分析简要描述'), value: 'estimated_income_description'},
        {name: i18n('估计月租金收入'), value: 'estimated_monthly_rent'},
        {name: i18n('估计月平均支出'), value: 'estimated_monthly_cost'},
        {name: i18n('视频'), value: 'videos'},
        {name: i18n('推广资料'), value: 'brochure'},
        {name: i18n('总价格'), value: 'total_price'},
        {name: i18n('居室数'), value: 'bedroom_count'},
        {name: i18n('客厅数'), value: 'living_room_count'},
        {name: i18n('卫生间数'), value: 'bathroom_count'},
        {name: i18n('厨房数'), value: 'kitchen_count'},
        {name: i18n('朝向'), value: 'facing_direction'},
        {name: i18n('面积'), value: 'space'},
        {name: i18n('户型图'), value: 'floor_plan'},
        {name: i18n('审核备注'), value: 'comment'},
        {name: i18n('审核附件'), value: 'attachment'},
        {name: i18n('开发商'), value: 'developer'},
        {name: i18n('建筑类型'), value: 'building_type'},
        {name: i18n('单位面积参考价格'), value: 'unit_price'},
        {name: i18n('开盘时间'), value: 'opening_time'},
        {name: i18n('完工时间'), value: 'completion_time'},
        {name: i18n('建筑面积'), value: 'building_area'},
        {name: i18n('规划面积'), value: 'planning_area'},
        {name: i18n('容积率'), value: 'plot_ratio'},
        {name: i18n('绿化率'), value: 'greening_rate'},
        {name: i18n('规划户数'), value: 'planning_household_count'},
        {name: i18n('车位数'), value: 'parking_space_count'},
        {name: i18n('物业类型'), value: 'property_management_type'},
        {name: i18n('物业公司'), value: 'property_management_company'},
        {name: i18n('主要户型'), value: 'main_house_types'},
        {name: i18n('效果图'), value: 'effect_pictures'},
        {name: i18n('室内样板间图'), value: 'indoor_sample_room_picture'},
        {name: i18n('规划图'), value: 'planning_map'},
        {name: i18n('地图位置'), value: 'latitude_longitude'},
        {name: i18n('最低首付比例'), value: 'minimum_down_payment_rate'},
        {name: i18n('开发商包租'), value: 'rental_guarantee'}
    ])
    .constant('houseProperty', [
        'unit_price',
        'main_house_types',
        'opening_time',
        'completion_time',
        'building_type',
        'property_management_type',
        'building_area',
        'plot_ratio',
        'planning_area',
        'greening_rate',
        'parking_space_count',
        'planning_household_count',
        'developer',
        'property_management_company',
        'effect_pictures',
        'indoor_sample_room_picture',
        'planning_map',
        'sales_address'
    ])
    .constant('notHouseProperty', [
        'total_price',
        'bedroom_count',
        'living_room_count',
        'bathroom_count',
        'kitchen_count',
        'facing_direction',
        'space',
        'floor_plan',
        'house_name',
        'floor',
        'community'
    ])