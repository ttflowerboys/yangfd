/*(function () {

 if (window.user) {
 $.betterPost('/api/1/message', {'status': 'new'})
 .done(function (data) {
 if (data.length > 0) {
 document.getElementById('icon-message').style.display = 'none'
 document.getElementById('icon-message-notif').style.display = 'inline'
 }
 })
 .fail(function (ret) {
 })
 .always(function () {

 })


 //GA
 $('.message').on('click', function() {
 ga('send', 'event', 'header', 'click', 'setting-entry');
 });

 $('.nickname').on('click', function() {
 ga('send', 'event', 'header', 'click', 'message-entry');
 });

 $('.logout').on('click', function() {
 ga('send', 'event', 'header', 'click', 'logout');
 });
 }

 })()*/

/*;(function poll() {
    if (window.user) {
        $.ajax({
            url: '/polling',
            data: {type: 'chat'},
            dataType: 'json',
            cache: false,
            success: function(data) {
                if (data.type !== 'keep-alive') {
                    window.console.log('ok! [From: polling.]')
                }else{
                    window.console.log('waiting...')
                }
            },
            error: function(ret){
                //window.dhtmlx.message({ type: 'error', text: window.getErrorMessageFromErrorCode(ret) })
            },                 
            complete: poll
        });
    }
})()*/

;(function () {
     var ws = new WebSocket('wss://' + location.host + '/websocket');
        ws.onopen = function() {
            ws.send('hello');  // Sends a message.
        };
        ws.onmessage = function(e) {
            window.console.log('e:'+e.data)
        };
        ws.onclose = function() {
            window.console.log('close')
        };
})()
