document.querySelector(".search+p").addEventListener("click",showlogin);
function showlogin(){
    var login=document.querySelector("#login");
    login.style.display="block";
}
document.querySelector("#login").addEventListener("mouseleave",hidelogin);
function hidelogin(){
    var login=document.querySelector("#login");
    login.style.display="none";
}

document.querySelector(".bag").addEventListener("click",gotocart);
function gotocart(){
    window.location.href="/Cart.html";
}
var itemcatagory=document.querySelector(".shop");
itemcatagory.addEventListener("mouseover",showdata);
itemcatagory.addEventListener("mouseout",removedata);
var shophead=document.querySelector("#catagory>p:nth-child(1)");
shophead.addEventListener("mouseover",showdata);
shophead.addEventListener("mouseout",removedata);

function showdata(){
    itemcatagory.style.display="flex";
}
function removedata(){
    itemcatagory.style.display="none";
}

var featured=document.querySelector(".featured");
featured.addEventListener("mouseover",showfeatured);
featured.addEventListener("mouseout",hidefeatured);
var featuredhead=document.querySelector("#catagory>p:nth-child(3)");
featuredhead.addEventListener("mouseover",showfeatured);
featuredhead.addEventListener("mouseout",hidefeatured);

function showfeatured(){
    featured.style.display="flex";
    featured.style.marginRight="300px";
}
function hidefeatured(){
    featured.style.display="none";
}

var ourstory=document.querySelector(".ourstory");
ourstory.addEventListener("mouseover",showstory);
ourstory.addEventListener("mouseout",hidestory);
var storyhead=document.querySelector("#catagory>p:nth-child(4)");
storyhead.addEventListener("mouseover",showstory);
storyhead.addEventListener("mouseout",hidestory);

function showstory(){
    ourstory.style.display="flex";
    ourstory.style.marginRight="180px";
}
function hidestory(){
    ourstory.style.display="none";

}