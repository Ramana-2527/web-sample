const moviesByGenre = [
  {
    genre: "Action",
    movies: [
      { id: 1, title: "The Dark Knight", rent: 150, buy: 300, img: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
      { id: 2, title: "Avengers", rent: 140, buy: 280, img: "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg" },
      { id: 3, title: "John Wick", rent: 130, buy: 260, img: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg" },
      { id: 4, title: "Mad Max: Fury Road", rent: 120, buy: 240, img: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg" },
      { id: 5, title: "Gladiator", rent: 135, buy: 270, img: "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg" }
    ]
  },
  {
    genre: "Sci-Fi",
    movies: [
      { id: 6, title: "Inception", rent: 120, buy: 250, img: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg" },
      { id: 7, title: "Interstellar", rent: 130, buy: 260, img: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
      { id: 8, title: "Avatar", rent: 140, buy: 280, img: "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg" },
      { id: 9, title: "The Matrix", rent: 125, buy: 255, img: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" },
      { id: 10, title: "Dune", rent: 135, buy: 275, img: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg" }
    ]
  },
  {
    genre: "Drama",
    movies: [
      { id: 11, title: "Titanic", rent: 100, buy: 200, img: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" },
      { id: 12, title: "Forrest Gump", rent: 110, buy: 220, img: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg" },
      { id: 13, title: "Joker", rent: 130, buy: 260, img: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg" },
      { id: 14, title: "Pursuit of Happyness", rent: 105, buy: 210, img: "https://image.tmdb.org/t/p/w500/f6l9rghSHORkWLurUGJhaKAiyjY.jpg" },
      { id: 15, title: "Fight Club", rent: 120, buy: 240, img: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg" }
    ]
  },
  {
    genre: "Comedy",
    movies: [
      { id: 16, title: "Deadpool", rent: 110, buy: 230, img: "https://image.tmdb.org/t/p/w500/3E53WEZJqP6aM84D8CckXx4pIHw.jpg" },
      { id: 17, title: "Home Alone", rent: 95, buy: 190, img: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg" },
      { id: 18, title: "The Hangover", rent: 100, buy: 200, img: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg" },
      { id: 19, title: "Jumanji", rent: 105, buy: 210, img: "https://image.tmdb.org/t/p/w500/pSgXKPU5h6U89ipF7HBYajvYt7j.jpg" },
      { id: 20, title: "Free Guy", rent: 115, buy: 235, img: "https://image.tmdb.org/t/p/w500/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg" }
    ]
  }
];

let cart = [];

const moviesDiv = document.getElementById("movies");
const cartItems = document.getElementById("cartItems");
const totalSpan = document.getElementById("total");

function displayMovies() {
  moviesDiv.innerHTML = "";
  moviesByGenre.forEach(section => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${section.genre}</h3><div class="movie-row"></div>`;
    const row = div.querySelector(".movie-row");

    section.movies.forEach(m => {
      row.innerHTML += `
        <div class="movie-card">
          <img src="${m.img}">
          <h4>${m.title}</h4>
          <p>Rent ₹${m.rent} | Buy ₹${m.buy}</p>
          <button onclick="addToCart(${m.id}, 'rent')">Rent</button>
          <button onclick="addToCart(${m.id}, 'buy')">Buy</button>
        </div>`;
    });

    moviesDiv.appendChild(div);
  });
}

function addToCart(id, type) {
  moviesByGenre.forEach(g => {
    const movie = g.movies.find(m => m.id === id);
    if (movie) {
      cart.push({
        title: `${movie.title} (${type})`,
        price: type === "rent" ? movie.rent : movie.buy
      });
    }
  });
  updateCart();
}

function updateCart() {
  let total = 0;
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerText = "No movies added";
    totalSpan.innerText = "0";
    return;
  }
  cart.forEach(item => {
    total += item.price;
    cartItems.innerHTML += `<p>${item.title} - ₹${item.price}</p>`;
  });
  totalSpan.innerText = total;
}

/* ===== CUSTOMER DETAILS DOWNLOAD ===== */
function downloadCustomerDetails() {
  if (cart.length === 0) {
    alert("Cart is empty");
    return;
  }

  const name = custName.value.trim();
  const phone = custPhone.value.trim();
  const email = custEmail.value.trim();

  const nameRegex = /^[A-Za-z ]{3,}$/;
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!nameRegex.test(name)) return alert("Invalid name");
  if (!phoneRegex.test(phone)) return alert("Invalid phone");
  if (!emailRegex.test(email)) return alert("Invalid email");

  let list = "";
  let total = 0;
  cart.forEach(i => {
    list += `- ${i.title} : ₹${i.price}\n`;
    total += i.price;
  });

  const text = `
CUSTOMER DETAILS
Name  : ${name}
Phone : ${phone}
Email : ${email}

MOVIES:
${list}

TOTAL: ₹${total}
Date: ${new Date().toLocaleString()}
`;

  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "customer_order.txt";
  a.click();

  cart = [];
  updateCart();
  custName.value = custPhone.value = custEmail.value = "";
}

/* ===== FEEDBACK DOWNLOAD ===== */
function downloadFeedback() {
  const name = feedbackName.value.trim();
  const phone = feedbackPhone.value.trim();
  const email = feedbackEmail.value.trim();
  const message = feedbackMessage.value.trim();

  if (!/^[A-Za-z ]{3,}$/.test(name)) return alert("Invalid name");
  if (!/^[6-9]\d{9}$/.test(phone)) return alert("Invalid phone");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return alert("Invalid email");
  if (message.length < 10) return alert("Message too short");

  const text = `
FEEDBACK
Name   : ${name}
Phone  : ${phone}
Email  : ${email}
Message: ${message}
Date   : ${new Date().toLocaleString()}
`;

  const blob = new Blob([text], { type: "text/plain" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "feedback.txt";
  a.click();

  feedbackName.value = feedbackPhone.value =
  feedbackEmail.value = feedbackMessage.value = "";
}

displayMovies();
