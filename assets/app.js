// Register Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker.register("./service-worker.js").then(
      function (registration) {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      },
      function (err) {
        console.log("Service Worker registration failed:", err);
      }
    );
  });
}

function playMusic(song, songId) {
  const audioPlayer = document.getElementById("audio-player");
  const audioSource = document.getElementById("audio-source");
  const playingItem = document.getElementById(songId);

  // Remove the playing-item class from any currently playing item
  const currentPlayingItems = document.getElementsByClassName("playing-item");
  Array.from(currentPlayingItems).forEach((item) => {
    item.classList.remove("playing-item");
  });

  // Add the playing-item class to the selected song
  playingItem.classList.add("playing-item");

  // Set the new source and play the audio
  audioSource.src = song;
  audioPlayer.load();
  audioPlayer.play();
}
