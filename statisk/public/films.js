fetch("/api/movies")
  .then(res => res.json())
  .then(data => {
    const movies = data.data;
    const container = document.getElementById("movies");

    container.innerHTML = "";

    movies.forEach(movie => {
      const { title, image } = movie.attributes;

      const card = document.createElement("div");
      card.classList.add("movieCard");

      card.innerHTML = `
        <h3>${title}</h3>
        <img src="${image.url}" alt="${title}" width="200">
        <p>
          <a href="film.html?id=${movie.id}">Läs mer</a>
        </p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => {
    console.error(err);
    document.getElementById("movies").innerText =
      "Kunde inte ladda filmer.";
  });
