const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "./images/aba_nigeria_temple.webp"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "./images/manti-utah-temple.webp"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "./images/payson-utah-temple.webp"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "./images/yigo-guam-temple.webp"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "./images/washington_dc_temple.webp"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "./images/lima-peru-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "./images/mexico-city-temple.webp"
  },
    {
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedicated: "2004, January, 11",
    area: 17500,
    imageUrl:
      "./images/accra_ghana_temple.webp"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
      "./images/johannesburg_south_africa_temple.webp"
  },
  {
    templeName: "Paris France",
    location: "Paris, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl:
      "./images/paris-france-temple.webp"
  },
];


const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");


function displayTemples(array) {
  gallery.innerHTML = ""; 

  array.forEach(temple => {
    const card = document.createElement("figure");
    card.innerHTML = `
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>Dedicated: ${new Date(temple.dedicated).toLocaleDateString()}</p>
        <p>Area: ${temple.area.toLocaleString()} sq ft</p>
      </figcaption>
    `;
    gallery.appendChild(card);
  });
}


displayTemples(temples);


navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const filter = link.textContent.toLowerCase();

    switch(filter) {
      case "home":
        displayTemples(temples);
        break;
      case "old":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() < 1900));
        break;
      case "new":
        displayTemples(temples.filter(t => new Date(t.dedicated).getFullYear() > 2000));
        break;
      case "large":
        displayTemples(temples.filter(t => t.area > 90000));
        break;
      case "small":
        displayTemples(temples.filter(t => t.area < 10000));
        break;
    }
  });
});


document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;