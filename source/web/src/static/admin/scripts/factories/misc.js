/* Created by frank on 14-8-20. */

angular.module('app')
    .factory('misc', function () {
        /**
         * Delayer constructor, do a task in the future, and you can update the task
         * @param options {data:{},task:function(){},delay:200}
         * @constructor
         */
        function Delayer(options) {
            options = options || {}
            this.data = options.data
            this.task = options.task
            this.delay = options.delay || 200
            this.timer = setTimeout(function () {
                if (this.task) {
                    this.task(this.data)
                }
            }.bind(this), this.delay)
        }

        Delayer.prototype.update = function (options) {
            options = options || {}
            if (options.task !== undefined) {
                this.task = options.task
            }
            if (options.data !== undefined) {
                this.data = options.data
            }
            if (options.delay !== undefined) {
                this.delay = options.delay
            }

            if (this.timer) {
                window.clearTimeout(this.timer)
            }
            this.timer = setTimeout(function () {
                this.task(this.data)
            }.bind(this), this.delay)
        }

        Delayer.prototype.cancel = function () {
            window.clearTimeout(this.timer)
        }

        var self = {

            findBy: function (array, by, value) {
                var found
                angular.forEach(array, function (item, key) {
                    if (item[by] === value) {
                        found = item
                        return false
                    }
                })
                return found
            },

            findById: function (array, id) {
                var found
                angular.forEach(array, function (value, key) {
                    if (value.id === id) {
                        found = value
                        return false
                    }
                })
                return found
            },

            getChangedAttributes: function (newJson, oldJson) {
                var result = null
                var constructor = newJson.constructor
                var addToResult
                if (constructor === Array) {
                    result = []
                    addToResult = function (index, value) {
                        this.push(value)
                    }.bind(result)
                } else if (constructor === Object) {
                    result = {}
                    addToResult = function (key, value) {
                        this[key] = value
                    }.bind(result)
                }

                for (var key in newJson) {
                    if (oldJson[key] === undefined) {
                        addToResult(key, newJson[key])
                    } else if (newJson.hasOwnProperty(key) && newJson[key].toString() !== oldJson[key].toString()) {
                        addToResult(key, newJson[key])
                    } else if (angular.isObject(newJson[key])) {
                        var temp = self.getChangedAttributes(newJson[key], oldJson[key])
                        if (temp) {
                            addToResult(key, temp)
                        }
                    }
                }
                return _.isEmpty(result) ? null : result
            },

            resetArray: function (array, items) {
                if (array === undefined) { array = [] }
                array.splice.apply(array, [0, array.length].concat(items))
            },

            Delayer: Delayer,

            getIntersectionById: function (object, compare) {
                return _.filter(object, function (item) {
                    return _.findWhere(compare, {id: item.id})
                })
            }
        }

        return self
    })
