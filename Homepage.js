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
// var item = document.getElementById("products");

//   window.addEventListener("wheel", function (e) {
//     if (e.deltaY > 0) item.scrollLeft += 100;
//     else item.scrollLeft -= 100;
//   });
var div=document.querySelectorAll("#pdt-type>div>img");
div[0].addEventListener("mouseover",imgC1);
div[0].addEventListener("mouseout",imgR1);
div[1].addEventListener("mouseover",imgC2);
div[1].addEventListener("mouseout",imgR2);
div[2].addEventListener("mouseover",imgC3);
div[2].addEventListener("mouseout",imgR3);
div[3].addEventListener("mouseover",imgC4);
div[3].addEventListener("mouseout",imgR4);
div[4].addEventListener("mouseover",imgC5);
div[4].addEventListener("mouseout",imgR5);
div[5].addEventListener("mouseover",imgC6);
div[5].addEventListener("mouseout",imgR6);

function imgC1(){
    div[0].src="./images/Category-Image-1.webp";
}
function imgR1(){
    div[0].src="./images/Category-Image-hover-1.webp";
}
function imgC2(){
    div[1].src="./images/Category-Image-2.webp";
}
function imgR2(){
    div[1].src="./images/pdt-7.webp";
}
function imgC3(){
    div[2].src="./images/Category-Image-3.webp";
}
function imgR3(){
    div[2].src="./images/pdt-6.webp";
}
function imgC4(){
    div[3].src="./images/Category-Image-4.webp";
}
function imgR4(){
    div[3].src="./images/pdt-5.webp";
}
function imgC5(){
    div[4].src="./images/Category-Image-5.webp";
}
function imgR5(){
    div[4].src="./images/pdt-4.webp";
}
function imgC6(){
    div[5].src="./images/Category-Image-6.webp";
}
function imgR6(){
    div[5].src="./images/pdt-3.webp";
}

var product_data=[
    {
        image:"./Images/pdt-1.webp",
        iname:"Total RF Serum",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice: "175",
        itype:"Retail Price",
        irating:"★★★★★ 4.5"
    },
    {
        image:"./Images/pdt-2.webp",
        iname:"R + F Lash Boost",
        ides:"Energizes millions of surface skin cells by 200%\nto address all key signs of skin aging.",
        iprice:"155",
        itype:"Retail Price",
        irating:"★★★★★ 4.6"
    },
    {
        image:"./Images/pdt-3.webp",
        iname:"REDEFINE Multi-Function Eye Cream",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice:"70",
        itype:"Retail Price",
        irating:"★★★★★ 4.6"
    },
    {
        image:"./Images/pdt-4.webp",
        iname:"Active Hydration Serum",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice:"112",
        itype:"Retail Price",
        irating:"★★★★★ 4.8"
    },
    {
        image:"./Images/pdt-5.webp",
        iname:"REDEFINE Regimen",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice:"220",
        itype:"Retail Price",
        irating:"★★★★★ 4.7"
    },
    {
        image:"./Images/pdt-6.webp",
        iname:"UNBLEMISH Regimen",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice:"190",
        itype:"Retail Price",
        irating:"★★★★★ 4.5"
    },
    {
        image:"./Images/pdt-7.webp",
        iname:"Rodan + Fields Active Hydration",
        ides:"Energizes millions of surface skin cells by 200%\n to address all key signs of skin aging.",
        iprice:"66",
        itype:"Retail Price",
        irating:"★★★★★ 4.9"
    }
    
];

showData(product_data);

function showData(data){
    data.forEach(function(el){
        var item=document.createElement("div");
        var img=document.createElement("img");
        var iname=document.createElement("p");
        var ides=document.createElement("p");
        var iprice=document.createElement("h4");
        var itype=document.createElement("p");
        var irating=document.createElement("p")
        var ibtn=document.createElement("button");
        item.setAttribute("class","item");
        img.src=el.image;
        iname.innerText=el.iname;
        ides.innerText=el.ides;
        iprice.innerText="$"+el.iprice;
        itype.innerText=el.itype;
        irating.innerText=el.irating;
        ibtn.innerText="ADD TO BAG";
        var products=document.querySelector("#products");
        img.addEventListener("click",pdtDetails);
        iname.addEventListener("click",pdtDetails);
        ides.addEventListener("click",pdtDetails);
        products.append(item);
        item.appendChild(img);
        item.appendChild(iname);
        item.appendChild(ides);
        item.appendChild(iprice);
        item.appendChild(itype);
        item.appendChild(irating);
        item.appendChild(ibtn);
        ibtn.addEventListener("click",function(){
            addtocart(el);
        })
    })
        var cart=JSON.parse(localStorage.getItem("cartItem")) || [];
        function addtocart(el){
            cart.push(el);
            localStorage.setItem("cartItem",JSON.stringify(cart));
            alert("Product Added to the Cart");
            if(confirm("Proceed to checkout")){
                window.location.href="/Cart.html";
            };
        } 
    }

document.querySelector(".bag").addEventListener("click",gotocart);
function gotocart(){
    window.location.href="/Cart.html";
}
function pdtDetails(){
    window.location.href="/r+f lash boost.html";
}

document.querySelector("#sp-al-pdt").addEventListener("click",allproducts);
function allproducts(){
    window.location.href="/all products.html";
}

document.querySelector(".search").addEventListener("click",showbox);
document.querySelector("#searchbar").addEventListener("mouseleave",removebox);

var search=document.querySelector("#searchbar");
function showbox(){
    search.style.display="flex";
}
function removebox(){
    search.style.display="none";
}
// document.querySelector("#searchbar").addEventListener("keyup",searchitem);
// function searchitem(){
//     var input=document.querySelector("#searchbar>input").value;
//     input=input.trim().toLowerCase();
    
//     // console.log(input);
// }


var userData=JSON.parse(localStorage.getItem("userData"));
console.log(userData);
document.querySelector("#login>button").addEventListener("click",checklogin);
function checklogin(){
    var iemail=document.querySelector("#email").value;
    var ipass=document.querySelector("#pass").value;

    var marker=false;
    for(var i=0;i<userData.length;i++){
        if(iemail==userData[i].useremail && ipass==userData[i].userpassword){
            alert("Login Successful");
            marker=true;
            localStorage.setItem("signIn",JSON.stringify(userData[i]));
            break;
        }
        
    }
    if(marker==false){
        alert("Invalid Email or Password");
    }
}







