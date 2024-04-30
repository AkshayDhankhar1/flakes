const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    const ratio = Math.floor(window.innerWidth / 270);
    clickCounter++;
    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });

  console.log(Math.floor(window.innerWidth / 270));
});

//TOGGLE

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.left-menu-icon,.toggle"
);

ball.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});


fetch(request.fetchHorror_Movies)
  .then((res) => res.json())

  .then((data) => {
    const headRow = document.getElementById("headrow");
    const row = document.createElement("div");

    row.className = "row";
    row.classList.add("netflixrow");

    headRow.appendChild(row);

    const title = document.createElement("h2");
    title.className = "row_title";
    title.innerText = "HORROR";
    row.appendChild(title);

    const row_posters = document.createElement("div");
    row_posters.className = "row_posters";
    row.appendChild(row_posters);

    data.results.forEach((movie) => {
      const poster = document.createElement("img");
      poster.className = "row_poster";

      var s2 = movie.id;
      poster.id = s2;
      poster.src = img_URL + movie.backdrop_path;
      row_posters.appendChild(poster);
    });
  });