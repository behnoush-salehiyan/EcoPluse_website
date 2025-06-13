async function loadCats() {
  try {
    const response = await axios.get("https://api.thecatapi.com/v1/breeds");
    const cats = response.data.slice(0, 8);

    const container = document.getElementById("cat-container");
    container.innerHTML = "";

    for (const cat of cats) {
      const card = document.createElement("div");
      card.className = "cat-card";

      let imageUrl = "https://placekitten.com/300/200";
      if (cat.reference_image_id) {
        imageUrl = `https://cdn2.thecatapi.com/images/${cat.reference_image_id}.jpg`;
      }

      card.innerHTML = `
            <img src="${imageUrl}" alt="${cat.name}">
            <div class="cat-info">
              <h2>${cat.name}</h2>
              <p><strong>Origin:</strong> ${cat.origin}</p>
              <p><strong>Temperament:</strong> ${cat.temperament}</p>
              <p><strong>Life span:</strong> ${cat.life_span} years</p>
            </div>
          `;
      container.appendChild(card);
    }
  } catch (err) {
    document.getElementById("cat-container").innerHTML =
      "<p>Error loading cats.</p>";
    console.error(err);
  }
}

loadCats();
