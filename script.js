document.addEventListener("DOMContentLoaded", () => {
  const backgroundAudio = document.getElementById("background-halloween-audio");
  const videos = document.querySelectorAll("video");


  // Helper: check if any video is currently playing
  function isAnyVideoPlaying() {
    return Array.from(videos).some(video => !video.paused && !video.ended);
  }

  videos.forEach(video => {
    // When a video starts playing → mute background audio
    video.addEventListener("play", () => {
      if (backgroundAudio) {
        backgroundAudio.muted = true;  // use pause() if you want it to stop completely
      }

      // Optional: pause other videos so only one plays at a time
      videos.forEach(v => {
        if (v !== video) v.pause();
      });
    });

    // When a video is paused or ends → unmute only if no other video is playing
    ["pause", "ended"].forEach(evt => {
      video.addEventListener(evt, () => {
        if (backgroundAudio && !isAnyVideoPlaying()) {
          backgroundAudio.muted = false;  // or backgroundAudio.play();
        }
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const backgroundAudio = document.getElementById("background-christmas-audio");
  const videos = document.querySelectorAll("video");


  // Helper: check if any video is currently playing
  function isAnyVideoPlaying() {
    return Array.from(videos).some(video => !video.paused && !video.ended);
  }

  videos.forEach(video => {
    // When a video starts playing → mute background audio
    video.addEventListener("play", () => {
      if (backgroundAudio) {
        backgroundAudio.muted = true;  // use pause() if you want it to stop completely
      }

      // Optional: pause other videos so only one plays at a time
      videos.forEach(v => {
        if (v !== video) v.pause();
      });
    });

    // When a video is paused or ends → unmute only if no other video is playing
    ["pause", "ended"].forEach(evt => {
      video.addEventListener(evt, () => {
        if (backgroundAudio && !isAnyVideoPlaying()) {
          backgroundAudio.muted = false;  // or backgroundAudio.play();
        }
      });
    });
  });
});