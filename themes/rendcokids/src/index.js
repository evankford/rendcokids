
import './js/navigation';
import './js/skip-link-focus-fix';
import 'lazysizes';
import AOS from 'aos';

AOS.init({
  once: true,
  offset: -100
});

import Tobi from 'rqrauhvmra__tobi';

import './sass/style.scss';
import 'rqrauhvmra__tobi/css/tobi.min.css';
import 'aos/dist/aos.css';

require('css.escape');

function offset(el) {
  var rect = el.getBoundingClientRect(),
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

let musicButton = document.querySelector('.music-button');
musicButton.addEventListener('click', function(event) {
  this.classList.toggle('active');
  setTimeout(() => {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': offset(musicButton).top
    });
  }, 400);
});



window.onload=function() {
  
    if (document.getElementById('iframe_api') === null) {
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    tag.id = 'iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    } 
    
    let videos = document.querySelectorAll('.video-player_wrap');
      if (videos.length) {
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    
      function onYouTubeIframeAPIReady() {
    
      
        videos.forEach(vid => {
          var theUrl = vid.getAttribute('data-video-url');
          let playerId = vid.getAttribute('data-player-id');
    
    
    
          function getId(url) {
            var regExp = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
            var match = url.match(regExp);
            return (match && match[1].length == 11) ? match[1] : false;
          }
          console.log(playerId);
    
    
          var player;
    
    
    
          player = new YT.Player(playerId, {
            width: '1080',
            height: '720',
            videoId: getId(theUrl),
            playerVars: { 'autoplay': 1, 'playsinline': 1, 'controls': 0, 'showinfo': 0, 'rel': 0, 'enablejsapi': 1, 'wmode': 'transparent' },
            events: {
              'onReady': pkOnPlayerReady,
              'onStateChange': pkOnPlayerStateChange
            }
          });
    
    
          
    
    
          function pkOnPlayerStateChange(e) {
            e.target.mute();
            player.mute();
            if (e.data === YT.PlayerState.ENDED) {
              
              player.playVideo();
              player.mute();
              e.target.playVideo();
              e.target.mute();
            }
            if (e.data === YT.PlayerState.BUFFERING) {
              e.target.setPlaybackQuality('hd720');
              e.target.mute();
            }
          }
    
          function pkOnPlayerReady(event) {
            event.target.setPlaybackQuality('hd720');
            event.target.mute();
            player.mute();
            console.log(player.isMuted())
            setTimeout(function () {
              if (YT.PlayerState.PLAYING) {
                vid.classList.add('loaded');
                event.target.mute();
                player.mute();
              }
            }, 800);
          }
        })
        var tobi = new Tobi({
          autoplayVideo: true,
          isYouTubeDependencieLoaded: true
        });
      }
    }
}

