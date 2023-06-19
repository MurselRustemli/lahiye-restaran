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

basket_arr = JSON.parse(localStorage.getItem("basket"));
getTotal();
basket_arr.forEach((element) => {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const inc = document.createElement("button");
  const p = document.createElement("p");
  const dec = document.createElement("button");
  const del = document.createElement("button");

  h3.innerHTML = element.food_name;
  inc.innerHTML = "+";
  p.innerHTML = element.count;
  dec.innerHTML = "-";
  del.innerHTML = "sebetden_cixar";
  inc.className="basket_topla"
  dec.className="basket_cixma"
  del.className="basket_vurma"
  

  //artim
  inc.onclick = () => {
    p.innerHTML++;
    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };
  //azalma
  dec.onclick = () => {
    if (p.innerHTML === "1") {
      return;
    }
    p.innerHTML--;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };
  //delete
  del.onclick = () => {
    basket_arr = basket_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();

    del.parentElement.remove();
  };

  div.classList.add("basket_item");

  div.append(h3, inc, p, dec, del);
  basket_container.append(div);
});
function getTotal() {
  h2.innerHTML = basket_arr.reduce(
    (sum, prev) => sum + prev.food_cost * prev.count,
    0
  );
}
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