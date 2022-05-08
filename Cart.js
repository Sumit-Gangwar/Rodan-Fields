var cart=JSON.parse(localStorage.getItem("cartItem"));
var body=document.querySelector("body");
var h2=document.createElement("h2");
var price=document.createElement("h2");
var payment=document.createElement("button");
var home=document.createElement("button");
home.innerText="Home";
payment.innerText="Proceed to Checkout";
payment.setAttribute("id","payment");
home.setAttribute("id","home");
var totalitem=cart.length;
h2.innerText=("Total Items  : " +totalitem);
body.append(h2,price,payment,home);
home.addEventListener("click",gotohome);
function gotohome(){
    window.location.href="/index.html";
}
payment.addEventListener("click",function(){
    window.location.href="/checkout.html";
})

cartData(cart);

function cartData(data){
    var count=0;
    var products=document.createElement("div");
    products.setAttribute("id","products");
    body.append(products);
    data.forEach(function(el){ 
        var item=document.createElement("div");
        var img=document.createElement("img");
        var iname=document.createElement("p");
        var ides=document.createElement("p");
        var iprice=document.createElement("h4");
        var itype=document.createElement("p");
        var irating=document.createElement("p");
        var increase=document.createElement("button");
        var decrease=document.createElement("button");
        var qty=document.createElement("h3");
        increase.setAttribute("class","incdec");
        decrease.setAttribute("class","incdec");
        qty.setAttribute("class","incdec");
        var ibtn=document.createElement("button");
        item.setAttribute("class","item");
        img.src=el.image;
        iname.innerText=el.iname;
        ides.innerText=el.ides;
        iprice.innerText="$"+el.iprice;
        itype.innerText=el.itype;
        irating.innerText=el.irating;
        increase.innerText="+";
        decrease.innerText="-";
        qty.innerText=1;
        ibtn.innerText="REMOVE";
        products.appendChild(item);
        item.appendChild(img);
        item.appendChild(iname);
        item.appendChild(ides);
        item.appendChild(iprice);
        item.appendChild(itype);
        item.appendChild(irating);
        item.appendChild(increase);
        item.appendChild(qty);
        item.appendChild(decrease);
        item.appendChild(ibtn);
        ibtn.addEventListener("click",function(){
            removeitem(el.iname);
        })
        
    })
    var sum=0;
    for(var i=0;i<data.length;i++){
        sum+=Number(data[i].iprice);
    }
    price.innerText="Total Amount :"+" "+"$"+sum;
    localStorage.setItem("totalamount",sum);
  
}
function removeitem(nam){
    
    cart=cart.filter(function(x){
        return x.iname!=nam;
    })
    cartData(cart);
    localStorage.setItem("cartItem",JSON.stringify(cart));
    window.location.reload();
}