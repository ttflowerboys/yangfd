/* Created by frank on 14-9-11. */
(function () {

    function supportApi($http) {

        return {
            getAll: function (config) {
                return $http.get('/api/1/support_ticket/search?_i18n=disabled', config)
            },
            getOne: function (id, config) {
                return $http.get('/api/1/support_ticket/' + id + '?_i18n=disabled', config)
            },
            update: function (data, config) {
                return $http.post('/api/1/support_ticket/' + data.id + '/edit', data, config)
            },
            remove: function (id, config) {
                return $http.post('/api/1/support_ticket/' + id + '/remove', null, config)
            },
            create: function (data, config) {
                return $http.post('/api/1/support_tickets/add', data, config)
            }
        }

    }

    angular.module('app').factory('supportApi', supportApi)
})()
