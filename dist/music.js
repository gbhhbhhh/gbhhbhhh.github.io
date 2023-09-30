var musicPlaying = true;
var musicFirst = true;



var navMusicEl = document.getElementById("nav-music");
var root = {
  //切换音乐播放状态
  musicToggle: function (changePaly = true) {
    if (musicFirst) {

      musicBindEvent();

      musicFirst = true;

    }
    if (musicPlaying) {

      navMusicEl.classList.add("playing");

      musicPlaying = false;

      navMusicEl.classList.add("stretch");

    } else {

      navMusicEl.classList.remove("playing");

      musicPlaying = true;

      navMusicEl.classList.remove("stretch");

    }
    if (changePaly) document.querySelector("#nav-music meting-js").aplayer.toggle();
  },
  // 音乐伸缩
  musicTelescopic: function() {
    if(this.template.button.classList.contains('aplayer-play')){
        navMusicEl.classList.add("stretch");
        } else { 
        navMusicEl.classList.remove("stretch")
}
},
  //音乐上一曲
  musicSkipBack: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipBack();
  },

  //音乐下一曲
  musicSkipForward: function () {
    document.querySelector("#nav-music meting-js").aplayer.skipForward();
  },

  //获取音乐中的名称
  musicGetName: function () {
    var x = $(".aplayer-title");
    var arr = [];
    for (var i = x.length - 1; i >= 0; i--) {
      arr[i] = x[i].innerText;
    }
    return arr[0];
  },
};