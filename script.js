// Conteúdo dinâmico para as playlists (apenas exemplo)
const playlists = [
    { name: "Playlist 1", songs: ["Song 1", "Song 2", "Song 3"] },
    { name: "Playlist 2", songs: ["Song 4", "Song 5", "Song 6"] },
    { name: "Playlist 3", songs: ["Song 7", "Song 8", "Song 9"] }
  ];
  
  const playlistsElement = document.getElementById("playlists");
  playlists.forEach(playlist => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${playlist.name}</strong><ul>${playlist.songs.map(song => `<li>${song}</li>`).join('')}</ul>`;
    playlistsElement.appendChild(li);
  });
  
  // Player de música
  const audioPlayer = document.getElementById("audioPlayer");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const randomBtn = document.getElementById("randomBtn");
  
  let currentSongIndex = 0;
  
  function playPause() {
    if (audioPlayer.paused) {
      audioPlayer.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audioPlayer.pause();
      playPauseBtn.textContent = "Play";
    }
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + audioPlayer.querySelectorAll("source").length) % audioPlayer.querySelectorAll("source").length;
    changeSong();
  }
  
  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % audioPlayer.querySelectorAll("source").length;
    changeSong();
  }
  
  function changeSong() {
    const sources = audioPlayer.querySelectorAll("source");
    audioPlayer.src = sources[currentSongIndex].src;
    audioPlayer.load();
    audioPlayer.play();
  }
  
  function randomSong() {
    currentSongIndex = Math.floor(Math.random() * audioPlayer.querySelectorAll("source").length);
    changeSong();
  }
  
  playPauseBtn.addEventListener("click", playPause);
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  randomBtn.addEventListener("click", randomSong);
  
  // Abrir modais
  const quemSomosLink = document.getElementById("quemSomosLink");
  const pedirMusicaLink = document.getElementById("pedirMusicaLink");
  
  const quemSomosModal = new bootstrap.Modal(document.getElementById("quemSomosModal"));
  const pedirMusicaModal = new bootstrap.Modal(document.getElementById("pedirMusicaModal"));
  
  quemSomosLink.addEventListener("click", () => {
    quemSomosModal.show();
  });
  
  pedirMusicaLink.addEventListener("click", () => {
    pedirMusicaModal.show();
  });
  
  // Submissão do formulário para pedir música (apenas exemplo)
  const pedirMusicaForm = document.getElementById("pedirMusicaForm");
  
  pedirMusicaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const musica = document.getElementById("musica").value;
    // Aqui você pode enviar os dados do formulário para algum lugar, como uma API, por exemplo.
    console.log("Nome:", nome, "Email:", email, "Música:", musica);
    pedirMusicaModal.hide();
    pedirMusicaForm.reset();
  });
  