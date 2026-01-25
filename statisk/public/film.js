const params = new URLSearchParams(window.location.search);
const id = params.get("id");

fetch(`/api/movies/${id}`)
  .then(res => res.json())
  .then(data => {
    const movie = data.data;
    const { title, intro, image } = movie.attributes;

    document.getElementById("title").textContent = title;
    document.getElementById("intro").textContent = intro;

    if (image?.url) {
      const img = document.getElementById("image");
      img.src = image.url;
      img.alt = title;
    }
  })
  .catch(err => {
    console.error(err);
    document.body.innerHTML = "<p>Kunde inte ladda filmen.</p>";
  });
