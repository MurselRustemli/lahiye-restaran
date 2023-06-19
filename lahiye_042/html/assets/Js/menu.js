const basket_container = document.getElementById("basket_container");
const h2 = document.querySelector("h2");
let basket_arr = [];
const nav_btn = document.querySelector(".hamburger");
nav_btn.addEventListener("click", function () {
  nav_btn.classList.toggle("is-active");
});

$(".nav_bg").slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
});
const nav_btns_bar = document.querySelector(".nav_btns_bar");
const nav_bar = document.querySelector(".nav_bar");
nav_btns_bar.addEventListener("click", function () {
  nav_bar.classList.toggle("nav_bar_active");
});
const nav_tablet_btn = document.querySelector(".hamburger--spin");
nav_tablet_btn.addEventListener("click", function () {
  nav_tablet_btn.classList.toggle("is-active");
});

const nav_tablet_open = document.querySelector(".nav_tablet_open");
const hamburger_spin = document.querySelector(".hamburger--spin");

hamburger_spin.addEventListener("click", function () {
  nav_tablet_open.classList.toggle("nav_tablet_isactive");
});

////////////////////////////////
////////////////////////////////
//
////////////////////////////////
////////////////////////////////
const userData = JSON.parse(localStorage.getItem("user"));
const userpassword = JSON.parse(localStorage.getItem("password"));
const nav_btns_log = document.querySelector(".nav_btns_log");
const profil = document.querySelector(".profil");

if (userData === null) {
  nav_btns_log.style.display = "flex";
  profil.style.display = "none";
} else {
  nav_btns_log.style.display = "none";
  profil.style.display = "flex";
}

const nav_btns_log_login = document.querySelector(".nav_btns_log_login");
const login = document.querySelector(".login");
nav_btns_log_login.addEventListener("click", function () {
  login.style.display = "flex";
});

const login_name = document.querySelector(".login_name");
const login_password = document.querySelector(".login_password");
const login_send = document.querySelector(".login_send");
const login_singin = document.querySelector(".login_singin");

login_send.addEventListener("click", function () {
  if (login_name.value === "") {
    alert("Istifadeci adini bos saxlamaq olmaz!");
  } else if (login_password.value === "") {
    alert("Istifadeci sidresini bos saxlamaq olmaz!");
  } else {
    const userArray = [login_name.value];
    const passwordArray = [login_password.value];

    localStorage.setItem("user", JSON.stringify(userArray));
    localStorage.setItem("password", JSON.stringify(passwordArray));
    // console.log(userData,userpassword);
    login.style.display = "none";
    window.location.href = "home.html";
  }

  login_name.value = "";
  login_password.value = "";
});

login_singin.addEventListener("click", function () {
  login.style.display = "none";
  singin.style.display = "flex";
});

const singin = document.querySelector(".singin");
const singin_name = document.querySelector(".singin_name");
const singin_password = document.querySelector(".singin_password");
const singin_send = document.querySelector(".singin_send");
const singin_login = document.querySelector(".singin_login");
const nav_btns_log_singin = document.querySelector(".nav_btns_log_singin");

nav_btns_log_singin.addEventListener("click", function () {
  singin.style.display = "flex";
});
singin_send.addEventListener("click", function () {
  if (singin_name.value === "") {
    alert("Istifadeci adini bos saxlamaq olmaz!");
  } else if (singin_password.value === "") {
    alert("Istifadeci sidresini bos saxlamaq olmaz!");
  } else {
    const userArray = [singin_name.value];
    const passwordArray = [singin_password.value];

    localStorage.setItem("user", JSON.stringify(userArray));
    localStorage.setItem("password", JSON.stringify(passwordArray));
    // localStorage.clear()
    // console.log(userData,userpassword);
    singin.style.display = "none";
    window.location.href = "home.html";
  }

  login_name.value = "";
  login_password.value = "";
});

singin_login.addEventListener("click", function () {
  singin.style.display = "none";
  login.style.display = "flex";
});

const h3 = document.createElement("h3");
h3.innerText = `${userData}`;
profil.append(h3);
const menu_foods_cost = document.querySelector(".menu_foods_cost");
fetch("http://localhost:3000/comments")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const btn = document.createElement("button");
      const i = document.createElement("i");

      div.className = "menu_foods_cost_element";
      i.className = "fa-solid fa-basket-shopping";
      h1.innerText = element.food_name;
      p.innerText = element.food_cost + "m";
      btn.className = "basket_btn";
      btn.innerText = "Sebete at";
      window.onload = function () {
        if (localStorage.getItem("basket") !== null) {
          basket_arr = JSON.parse(localStorage.getItem("basket"));
        }
      };
      btn.onclick = function () {
        //eger bu idli elemnent yoxdursa push et
        if (basket_arr.find((x) => x.id == element.id) === undefined) {
          basket_arr.push({ ...element, count: 1 });
        }
        localStorage.setItem("basket", JSON.stringify(basket_arr));
        // console.log(element.id)
      };

      btn.append(i);
      div.append(h1, p, btn);
      menu_foods_cost.append(div);
      // btn.addEventListener("click", function () {
      //   btn.style.display = "none";
      // });
    });
  });
const rezerv_name = document.querySelector(".rezerv_name");
const rezerv_gmail = document.querySelector(".rezerv_gmail");
const rezerv_number = document.querySelector(".rezerv_number");
const rezerv_date = document.querySelector(".rezerv_date");
const congrlation_bg = document.querySelector(".congrlation_bg");
const rezerv_btn = document.querySelector(".rezerv_btn");

rezerv_btn.addEventListener("click", function () {
  if (rezerv_name.value === "") {
    alert("Adinizi qeyd edin");
  } else if (rezerv_date.value === "") {
    alert("Gelmek istediyiniz tarixi qeyd edin");
  } else if (rezerv_gmail === "") {
    alert("Gmailini yazin");
  } else if (rezerv_number === "") {
    alert("Telefon nomrenizi qeyd edin");
  } else {
    fetch("http://localhost:3000/rezerv", {
      method: "post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rezerv_name: `${rezerv_name.value}`,
        rezerv_gmail: `${rezerv_gmail.value}`,
        rezerv_number: `${rezerv_number.value}`,
        rezerv_date: `${rezerv_date.value}`,
      }),
      cache: "default",
    });

    congrlation_bg.style.display = "flex";
    setTimeout(function () {
      congrlation_bg.style.display = "none";
    }, 1500);
  }

  rezerv_name.value = "";
  rezerv_gmail.value = "";
  rezerv_number.value = "";
  rezerv_date.value = "";
});
