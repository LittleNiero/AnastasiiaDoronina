window.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".yt-video__button");
  var video = document.querySelector(".yt-video__wrapper");

  button.addEventListener("click", function () {
    if (button.classList.contains("click")) {
      return;
    }

    button.classList.add("click");

    video.insertAdjacentHTML(
      "beforeend",
      `<iframe class="yt-video" src="https://www.youtube.com/embed/vnbN9V_2Guk?autoplay=1" title="YouTube video player" 
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
    );

    button.style.opacity = "0";
    video.style.background = "none";
  });
});
