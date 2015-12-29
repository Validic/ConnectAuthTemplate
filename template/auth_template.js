function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split('&');
  for (var i = 0; i < sURLVariables.length; i++)
  {
    var sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0] == sParam)
    {
      return sParameterName[1];
    }
  }
}

function SetConsumerName() {
  var encodedName = GetURLParameter("consumer_name");
  var consumerName = decodeURIComponent(encodedName);
  $(".form-signin-heading").prepend(consumerName);
}

function SetConsumerLogo() {
  var encodedLogoURL = GetURLParameter("logo_url");
  var consumerLogoURL =  decodeURIComponent(encodedLogoURL);
  $("#consumer-logo").html("<img src='" + consumerLogoURL + "' alt='Consumer Logo Alt Text'>")
}

$(document).ready(function() {
  SetConsumerName()
  SetConsumerLogo()
});
