async function getclimateInfo() {
  try {
    const { data } = await axios.get(
      "http://api.weatherapi.com/v1/current.json",
      {
        params: {
          key: "29a4a9b9852046e48bc135931250406",
          q: "Tehran",
          aqi: "yes",
        },
      }
    );
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
getclimateInfo();

async function creatCard() {
  try {
    const weatherInfo = await getclimateInfo();
    // console.log(weatherInfo);
    // first card_ tempreture info of Tehran
    const cardTempreture = document.createElement("div");
    cardTempreture.className = "card_style";

    const image_contain = document.createElement("div");
    image_contain.className = "imageContainer";

    const image = document.createElement("img");

    if (weatherInfo.current.condition.text === "Sunny") {
      image.src = "/img/gif/suuny.gif";
    } else if (weatherInfo.current.condition.text === "Cloudy") {
      image.src = "/img/gif/cludy.gif";
    } else if (weatherInfo.current.condition.text === "Rainy") {
      image.src = "/img/gif/rainy.gif";
    } else {
      image.src = "/img/gif/css-animated-weather-icons.gif";
    }

    const temper = document.createElement("h4");
    temper.textContent = "currnt tempereture";

    const tempreCil = document.createElement("h6");
    tempreCil.innerText = `tempreture: ${weatherInfo.current.temp_c}°C`;
    const leveluv = document.createElement("h6");
    leveluv.innerText = ` uv: ${weatherInfo.current.uv}`;

    const humidy = document.createElement("h6");
    humidy.innerText = `humidity: ${weatherInfo.current.humidity}`;

    const cardContainer = document.querySelector(".cards");
    cardContainer.append(cardTempreture);
    cardTempreture.append(image_contain, temper, tempreCil, leveluv, humidy);
    image_contain.appendChild(image);

    // second card_ airquality info of Tehran
    const airQuality = document.createElement("div");
    airQuality.className = "card_style";

    const aq_image_contain = document.createElement("div");
    aq_image_contain.className = "imageContainer";

    const aq_image = document.createElement("img");
    aq_image.src = "/img/8867922.png";

    const coLevel_tittle = document.createElement("h4");
    coLevel_tittle.textContent = "Air Quality";

    const coLevel = document.createElement("h6");
    coLevel.textContent = `co : ${weatherInfo.current.air_quality.co} µg/m³
`;
    const PM10 = document.createElement("h6");
    PM10.textContent = `PM10 : ${weatherInfo.current.air_quality.PM10} µg/m³`;

    const pm2_5 = document.createElement("h6");
    pm2_5.textContent = ` pm2_5 : ${weatherInfo.current.air_quality.pm2_5} µg/m³`;

    cardContainer.append(airQuality);
    airQuality.append(aq_image_contain, coLevel_tittle, coLevel, PM10, pm2_5);
    aq_image_contain.appendChild(aq_image);

    // third card_ location info of Tehran

    const cardLocation = document.createElement("div");
    cardLocation.className = "card_style";

    const locImage_contain = document.createElement("div");
    locImage_contain.className = "imageContainer";

    const locImage = document.createElement("img");
    locImage.src = "/img/location_pin_on_map.png";

    const locTitle = document.createElement("h4");
    locTitle.textContent = "Location Info";

    const locName = document.createElement("h6");
    locName.textContent = `City: ${weatherInfo.location.name}`;

    const locTime = document.createElement("h6");
    locTime.textContent = `Local Time: ${weatherInfo.location.localtime}`;

    cardContainer.append(cardLocation);

    cardLocation.append(locImage_contain, locTitle, locName, locTime);
    locImage_contain.appendChild(locImage);
  } catch (error) {
    console.log(error);
  }
}
creatCard();

const cardData = [
  {
    image: "/img/photo_pic/1.jpg",
    year: "2030",
    facts: [
      "🔥Global temperatures may rise by 1.5°C.",
      "🌊Up to 90% of coral reefs could be gone.",
      "🚱+700 million people may face water scarcity.",
      "🐝Massive insect loss threatens food chains.",
    ],
  },
  {
    image: "/img/photo_pic/2.jpg",
    year: "2050",
    facts: [
      "🌡️ Earth may be 2°C warmer.",
      "🌾Severe droughts could reduce food supply.",
      "🏙️ Major cities might face coastal flooding.",
      "🧍1+ billion climate refugees expected.",
    ],
  },
  {
    image: "/img/photo_pic/3.jpg",
    year: "2100",
    facts: [
      "🔥Global temps may exceed 3°C.",
      "🧊Arctic summers may have no ice.",
      "🐘50% of species could go extinct.",
      "🌍Amazon rainforest could collapse.",
    ],
  },
];
const card_fact_container = document.querySelector(".card_container");

cardData.forEach((item) => {
  const card_facts = document.createElement("div");
  card_facts.className = "facts";

  const div_image = document.createElement("div");

  const image = document.createElement("img");
  image.src = item.image;
  image.className = "img_fact";

  const title = document.createElement("h4");
  title.innerText = item.year;
  title.style.textAlign = "center";

  const list_fact = document.createElement("ul");
  item.facts.forEach((fact) => {
    const li = document.createElement("li");
    li.innerText = fact;
    list_fact.appendChild(li);
  });

  card_fact_container.append(card_facts);
  div_image.append(image);
  card_facts.append(div_image, title, list_fact);
});
const para_fact = document.querySelector("#sentence");
async function enviromentNews() {
  try {
    const { data } = await axios("https://api.api-ninjas.com/v1/facts", {
      headers: {
        "X-Api-Key": "EUS80d1xs2ivJWGYKaA01g==cqsCuWMyQB0SLMPH",
      },
    });

    console.log(data);
    para_fact.innerText = data[0].fact;
  } catch (error) {
    console.log(error);
  }
}
enviromentNews();

setInterval(enviromentNews, 60000);
