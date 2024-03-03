document.addEventListener("DOMContentLoaded", function () {
  const playlist = document.getElementById("playlist");
  const popup = document.getElementById("popup");
  const card = document.getElementById("card");
  const popupAlbumCover = document.getElementById("popupAlbumCover");
  const popupSongTitle = document.getElementById("popupSongTitle");
  const audio = document.getElementById("audio");
  const closeBtn = document.getElementById("closeBtn");

  popup.style.display = "none";

  playlist.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      const songSrc = e.target.getAttribute("data-src");
      const albumImg = e.target.getAttribute("data-img");
      const songTitle = e.target.textContent;

      popupAlbumCover.src = albumImg;
      popupSongTitle.textContent = songTitle;
      audio.src = songSrc;

      popup.style.display = "block";

      audio.autoplay = true;
    }
  });

  closeBtn.addEventListener("click", function () {
    popup.style.display = "none";
    audio.pause();
  });
});
