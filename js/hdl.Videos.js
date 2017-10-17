var idleTime = 0;
$(document).ready(function(){
  var tag = document.createElement('script');
  tag.src = "http://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  onYouTubeIframeAPIReady = function () {
      player = new YT.Player('player', {
          videoId: 'AkyQgpqRyBY',  // youtube video id
          playerVars: {
              'autoplay': 1,
              'rel': 0,
              'showinfo': 0
          },
          events: {
            'onStateChange': onPlayerStateChange
          }
      });
  }
  var p = document.getElementById ("player");
  $(p).hide();
  var t = document.getElementById ("thumbnail");
  t.src = "./images/video-thumb.jpg";
  onPlayerStateChange = function (event) {
      if (event.data == 0) {
          $('#start_video').fadeIn('normal');
          $("#thumbnail_container").fadeIn('normal');
          $("#player").fadeOut();
      } else if (event.data == 1) {
          $('#start_video').fadeOut('normal');
          $("#player").fadeIn();
      } else if (event.data == 2) {
          $('#start_video').fadeIn('normal');
          $("#thumbnail_container").fadeIn('normal');
          $("#player").fadeOut();
      }
  }
  $(document).on('click', '#start_video', function () {
      $(this).fadeOut('normal');
      $("#player").fadeIn();
      $("#thumbnail_container").fadeOut();
      player.playVideo();
  });
  $(document).on('click', "#skip", function(){
      $("#video").fadeOut();
      player.stopVideo();
  });

  setInterval(function(){
  	if($(document).keypress() != true || $(document).mouseover() != true){
  		$("#video").fadeIn();
      player.playVideo();
  	}
  }, 60000 * 3)
  
});