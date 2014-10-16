$(function () {
    // on page load

    function loadData(array) {
        $('#list').empty()
        _.each(array, function (news) {
            var newsResult = _.template($('#newsCard_template').html())({news: news})
            $('#list').append(newsResult)
        })
    }

    window.allData = JSON.parse($('.newsData').text())
    window.startPaging(window.allData, 6, $('#pager #pre'), $('#pager #next'), loadData)
})
