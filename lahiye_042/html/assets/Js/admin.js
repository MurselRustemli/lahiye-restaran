const login_usr=document.querySelector(".login_usr")
const login_psr=document.querySelector(".login_psr")
const admin_btn=document.querySelector(".admin_btn")
const login=document.querySelector(".login");

const user= "Mursel";
const password="1234";
admin_btn.addEventListener("click",function (e) {
    if(login_usr.value!==user&&login_psr.value===password){
alert("Istifadeci ve yaxud sifre sehfdir");
    }
    else if(login_usr.value===user&&login_psr.value!==password){
        alert("Istifadeci ve yaxud sifre sehfdir");

    }
    else if(login_usr.value!==user&&login_psr.value!==password){
        alert("Istifadeci ve yaxud sifre sehfdir");

    }
    else{
        login.style.display="none";
    }
    login_psr.value=""
    login_usr.value=""
})
////
////
////
////
const menyu_title = document.querySelector(".menyu_title");
const menyu_image = document.querySelector(".menyu_image");
const menyu_description = document.querySelector(".menyu_description");
const title_post = document.querySelector(".title_post");

title_post.addEventListener("click", function () {
  if (menyu_description.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else if (menyu_image.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else if (menyu_title.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else {
    fetch("http://localhost:3000/posts", {
      method: "post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        menyu_description: `${menyu_description.value}`,
        menyu_title: `${menyu_title.value}`,
        image: `${menyu_image.value}`,
      }),
      cache: "default",
    });
  }
  menyu_description.value = "";
  menyu_title.value = "";
  menyu_image.value = "";
});

const menyu_select_filter = document.querySelector(".menyu_select_filter");
fetch("http://localhost:3000/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const foods_list_text_element = document.createElement("div");
      const img = document.createElement("img");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      btn.innerText = "Sil";

      div.className = "menyu_select_filter_container";
      foods_list_text_element.className = "foods_list_text_element";
      h1.innerText = element.menyu_title;
      p.innerText = element.menyu_description;
      img.src = element.image;
      foods_list_text_element.appendChild(p);
      div.append(h1, foods_list_text_element, img, btn);
      menyu_select_filter.append(div);

      btn.addEventListener("click", function () {
        fetch(`http://localhost:3000/posts/${element.id}`, {
          method: "delete",
          headers: { "Content-Type": "application / json" },
          cache: "default",
        });
      });
    });
  });
//
//
////
////
////////////////////////////////////////////////////////////////
/////
//
//
//
const food_name = document.querySelector(".food_name");
const food_cost = document.querySelector(".food_cost");
const food_send = document.querySelector(".food_send");

food_send.addEventListener("click", function () {
  if (food_name.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else if (food_cost.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else {
    fetch("http://localhost:3000/comments", {
      method: "post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        food_name: `${food_name.value}`,
        food_cost: `${food_cost.value}`,
      }),
      cache: "default",
    });
  }
  food_cost.value = "";
  food_name.value = "";
});

const menu_cost_delete = document.querySelector(".menu_cost_delete");
fetch("http://localhost:3000/comments")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      div.className = "menu_const_delete_element";
      h1.innerText = element.food_name;
      p.innerText = element.food_cost;
      btn.innerText = "Sil";
      div.append(h1, p, btn);
      menu_cost_delete.append(div);
      btn.addEventListener("click", function () {
        fetch(`http://localhost:3000/comments/${element.id}`, {
          method: "delete",
          headers: { "Content-Type": "application / json" },
          cache: "default",
        });
      });
    });
  });
//
////////////////////////////////////////////////////////////////////////
//
//
//
//
//

const chef_admin_chefname = document.querySelector(".chef_admin_chefname");
const chef_admin_description = document.querySelector(
  ".chef_admin_description"
);
const chef_btn_send = document.querySelector(".chef_btn_send");

chef_btn_send.addEventListener("click", function () {
  if (chef_admin_chefname.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else if (chef_admin_description.value === "") {
    alert("Melumatlar bos saxlanila bilmez");
  } else {
    fetch("http://localhost:3000/chef", {
      method: "post",
      headers: {
        Accept: "application.json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chef_admin_chefname: `${chef_admin_chefname.value}`,
        chef_admin_description: `${chef_admin_description.value}`,
      }),
      cache: "default",
    });
  }
  chef_admin_chefname.value = "";
  chef_admin_description.value = "";
});

const chef_admin_chefs = document.querySelector(".chef_admin_chefs");
fetch("http://localhost:3000/chef")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const div = document.createElement("div");
      const chef_admin_description_text = document.createElement("div");
      const h1 = document.createElement("h1");
      const p = document.createElement("p");
      const btn = document.createElement("button");

      div.className = "chef_admin_element";
      chef_admin_description_text.className = "chef_admin_description_text";
      h1.innerText = element.chef_admin_chefname;
      p.innerText = element.chef_admin_description;
      btn.innerText = "Sil";

      chef_admin_description_text.append(p);
      div.append(h1, chef_admin_description_text, btn);
      chef_admin_chefs.append(div);
      btn.addEventListener("click", function () {
        fetch(`http://localhost:3000/chef/${element.id}`, {
          method: "delete",
          headers: { "Content-Type": "application / json" },
          cache: "default",
        });
      });
    });
  });
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
////////////////////////////////
fetch("http://localhost:3000/rezerv")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
      const rezerv_admin=document.getElementById("rezerv_admin")
      const div = document.createElement("div");
      const rezerv_name = document.createElement("p");
      const rezerv_gmail = document.createElement("p");
      const rezerv_number = document.createElement("p");
      const rezerv_date = document.createElement("p");
      const btn = document.createElement("button");

      div.className = "rezerv_admin_element";
      btn.innerText = "Sil";

      rezerv_name.innerText = "AD ----- "+element.rezerv_name;

      rezerv_gmail.innerText ="GMAIL ----- " +element.rezerv_gmail;

      rezerv_number.innerText ="TELEFON NOMRESI ----- "+ element.rezerv_number;

      rezerv_date.innerText ="GELIS TARIXI ----- "+ element.rezerv_date;

      div.append( rezerv_name, rezerv_gmail, rezerv_number, rezerv_date,btn);
      rezerv_admin.append(div);
      btn.addEventListener("click", function () {
        fetch(`http://localhost:3000/rezerv/${element.id}`, {
          method: "delete",
          headers: { "Content-Type": "application / json" },
          cache: "default",
        });
      });
    });
  });
