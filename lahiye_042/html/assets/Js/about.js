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
const foods_list = document.querySelector(".foods_list");
fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const foods_list_text = document.createElement("div");
      const food_list_all = document.createElement("div");
      const food_list_image = document.createElement("div");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      food_list_all.className = "foods_list_all";
      foods_list_text.className = "foods_list_text";
      food_list_image.className = "foods_list_image";
      img.src = element.image;
      btn.innerText = "Butun menyu";
      h1.innerText = element.menyu_title;
      p.innerText = element.menyu_description;
      foods_list_text.append(h1, p, btn);
      food_list_image.append(img);
      food_list_all.append(foods_list_text, food_list_image);
      foods_list.append(food_list_all);
    });
  });
  const chef = document.querySelector("#chef");
fetch("http://localhost:3000/chef")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const chef_descripion_element = document.createElement("div");
      const chef_descripion_image = document.createElement("div");
      const chef_descripion_text = document.createElement("div");
      const chef_descripion_all = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");

      chef_descripion_element.className = "chef_descripion_element";
      div.className = "chef_descripion";
      chef_descripion_image.className = "chef_descripion_image";
      chef_descripion_text.className = "chef_descripion_text";
      chef_descripion_all.className = "chef_descripion_all";

      h1.innerText = element.chef_admin_chefname;
      p.innerText = element.chef_admin_description;
      chef_descripion_text.append(h1, p);
      chef_descripion_element.append(
        chef_descripion_image,
        chef_descripion_text
      );
      div.append(chef_descripion_element);
      chef_descripion_all.append(div);
      chef.append(chef_descripion_all);
    });
  });