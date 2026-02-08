/* console.log("Tests passed"); */

(async () => {
  const res = await fetch("http://localhost:5080/movies");
  const html = await res.text();

  if (!html.includes("<h1>Filmer</h1>")) {
    throw new Error("Filmsidan innehåller inte rätt titel");
  }

  console.log("Integrationstest OK: filmsidan har rätt titel");
})();
