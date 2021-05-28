window.onload=function(){
  document.getElementById('loadid').style.display='none'
}
// ...................scroll..................................
let Nav_main_container = document.getElementById("Nav-main-container1");
var scroll1=window.pageYOffset;
window.addEventListener("scroll", () => {
  var scroll2=window.pageYOffset;
  if (scroll1>scroll2) {
    Nav_main_container.style.visibility='visible'
  } else {
    Nav_main_container.style.visibility='hidden'  
  }
  scroll1=scroll2
});

// ...........................................

let menu = document.getElementById("menu-icon-containerid");
var temp = "true";
menu.addEventListener("click", () => {
  let listitems = document.getElementsByClassName("list_items");
  var menu_icon = document.getElementById("menu_icon");
  if (temp === "true") {
    menu_icon.classList.add("open");
    temp = "false";
    // ...................................
    for (var i = 0; i < listitems.length; i++) {
      listitems[i].style.transform = "translate(0px)";
      listitems[i].style.height = "auto";
      listitems[i].style.width = "auto";
    }
  } else {
    menu_icon.classList.remove("open");
    temp = "true";
    // .................................
    for (var i = 0; i < listitems.length; i++) {
      listitems[i].style.transform = "translate(150px)";
      listitems[i].style.height = "0px";
      listitems[i].style.width = "0px";
    }
  }
});

var product = document.getElementsByClassName("products");
var cond = "false";
for (let j = 0; j < product.length; j++) {
  product[j].addEventListener("mouseenter", (event) => {
    var temp1 = event.target.lastElementChild;
    var price_info = document.getElementsByClassName("price-info");
    for (var i = 0; i < price_info.length; i++) {
      price_info[i].style.display = "none";
    }
    temp1.style.display = "block";
  });

  // ..............................................
}

for (let j = 0; j < product.length; j++) {
  product[j].addEventListener("click", () => {
    var price_info = document.getElementsByClassName("price-info");
    for (var i = 0; i < price_info.length; i++) {
      price_info[i].style.display = "none";
    }
  });
}
// ................................................sigin login...............
let login_listener = document.getElementsByClassName("login-listener");
let signin_listener = document.getElementsByClassName("signin-listener");

for (let i = 0; i < login_listener.length; i++) {
  login_listener[i].addEventListener("click", () => {
    document.getElementById("formm").style.zIndex = "1";
    // document.getElementById('formm').style.display='block'
  });
}

for (let j = 0; j < signin_listener.length; j++) {
  signin_listener[j].addEventListener("click", () => {
    document.getElementById("formm").style.zIndex = "-1";

    // document.getElementById('sign').style.display='block'
  });
}
