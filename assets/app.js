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
