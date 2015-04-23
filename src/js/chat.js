
    var userName = getUrlParameter("username");

    var wasgibt_demo = PUBNUB.init({
        publish_key: 'pub-c-d73bf87c-eb1f-4eae-8e85-2c68a40f4554',
        subscribe_key: 'sub-c-596f903c-e742-11e4-8224-0619f8945a4f'
    });

    wasgibt_demo.subscribe({
      channel: 'demo_chat',
      callback: function(msg){
        var liElement = '<li>';
        if (msg.search(userName)) {
          liElement = '<li style="background:#eee">';
        }
        console.log(msg);
        $('#messages').append($(liElement).text(msg));
      }
    });
    
    $('form').submit(function() {
      if (!$('#m').val()) {
        return false;
      }
      var msgString = userName + ": " + $('#m').val();
      wasgibt_demo.publish({
        channel: 'demo_chat',
        message: msgString
      });
        
      $('#m').val('');
      return false;
    });

    function getUrlParameter(sParam) {
      var sPageURL = window.location.search.substring(1);
      var sURLVariables = sPageURL.split('&');
      for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
          return sParameterName[1];
        }
      }
    }     