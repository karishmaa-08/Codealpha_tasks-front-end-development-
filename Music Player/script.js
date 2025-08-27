const tracks = [
  { title: "New Frontier", artist: "John Mayer", src: "songs/newfrontier.mp3", cover: "covers/cover1.png" },
  { title: "Slow Life", artist: "Norah Jones", src: "songs/slowlife.mp3", cover: "covers/cover2.png" },
  { title: "Sunny", artist: "Bobby Hebb", src: "songs/sunny.mp3", cover: "covers/cover3.png" }
  ];

let currentTrack = 0;

const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function loadTrack(trackIndex) {
  const track = tracks[trackIndex];
  title.textContent = track.title;
  artist.textContent = track.artist;
  audio.src = track.src;
  cover.src = track.cover;

  cover.onerror = () => {
    cover.src = "covers/default.png";
    cover.onerror = null;
  };
}

function playTrack() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseTrack() {
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  if (audio.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
});

nextBtn.addEventListener("click", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  loadTrack(currentTrack);
  playTrack();
});

prevBtn.addEventListener("click", () => {
  currentTrack = (currentTrack - 1 + tracks.length) % tracks.length;
  loadTrack(currentTrack);
  playTrack();
});

audio.addEventListener("ended", () => {
  nextBtn.click();
});

// Load the first track on page load
loadTrack(currentTrack);
