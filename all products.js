var expanded = true;

function showOption() {
    var checkboxes = document.querySelector("#fill");
    if (expanded == true) {
        checkboxes.style.display = "block";
        expanded = false;
    } else {
        checkboxes.style.display = "none";
        expanded = true;
    }
}


// Product Card

var productData = [{
        // 1st Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzU2MTV8aW1hZ2UvanBlZ3xoNWQvaDkwLzE1MDM4NTk0Njc4ODE0LmpwZ3w0M2RjYTNjYTRmZTdkYjNhNDUyN2FhNjY1MzdkMzYxNmFjNjEwMmIwMGYyMTZjODFiNzY0MTkxZTQ5OWU2ODQ3",
        performance: "Best Seller",
        productname: "REDEFINE Regimen + Mini Special",
        define: "",
        price: "$270",
        value: "($391 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 1st Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzAwMDV8aW1hZ2UvanBlZ3xoYmYvaDU2LzE0OTk2MzA2Mjk2ODYyLmpwZ3xjOTYzYzVjYTFjMGJlMGY1MmU5ZjIxOTBhYzcwZmMyZWFhYzBlODhmYmVmZmQzNzZkOTAxZjQyZWJjZmUxMjdk",
        performance: "Best Seller",
        productname: "REDEFINE Regimen + Mini Special",
        define: "",
        price: "$245",
        value: "($391 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 1st Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2MTh8aW1hZ2UvanBlZ3xoYzQvaGNmLzE0OTk2MzA1OTM2NDE0LmpwZ3w1M2RjYWNhODE0YTVjNTc5ZWNhOWM2NWMzZTA1M2JmYTQyZjRkNzI3NWZjNjViNTAzYzM3OTk5Y2VjYjJlMDMz",
        performance: "Best Seller",
        productname: "UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$240",
        value: "($356 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 2nd Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MjY5NTJ8aW1hZ2UvanBlZ3xoMDIvaGVlLzE0OTk2MzA2NTkxNzc0LmpwZ3w0YzE4YTg4MjA0ZmY4N2E4NzM4MTM5M2Y3OGVkOGQxMTUwMTMzMDNjYTk0MmRkODAyNDZmNmMyODVkZDFiYWQ2",
        performance: "",
        productname: "SOOTHE Regimen + Mini Special",
        define: "",
        price: "$235",
        value: "($351 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 2nd Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzQwMjF8aW1hZ2UvanBlZ3xoNWQvaGViLzE0OTk2MzE3NDA1MjE0LmpwZ3xiNTU3MjhjZjZmMDQxNDk4NjAwNzc3ZmUwZWNjMGU0NDdiNmY0NTUyYjM5ZDEzNDUzZDE2OTljMmVhNTU4Njdi",
        performance: "Best Seller",
        productname: "Lash Boost & REDEFINE Regimen + Mini",
        define: "",
        price: "$393",
        value: "($546 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 2nd Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA5MDh8aW1hZ2UvanBlZ3xoMjgvaDViLzE0OTk2MzE3Nzk4NDMwLmpwZ3w3MTQyMTczOTlhZTU0MDY5YzJmNzFmY2NlZmM4NTgwYmNiYTgxZTMxMDg0YjQ2ZGYxODczYzJiODAzZGUxN2Zi",
        performance: "Best Seller",
        productname: "Lash Boost & REVERSE Regimen + Mini",
        define: "",
        price: "$368",
        value: "($516 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 3rd Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HUNML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA2MjZ8aW1hZ2UvanBlZ3xoNzYvaDJmLzE1MDM4NTk2MDg3ODM4LmpwZ3wzMmRkNDBjZWFhNTYxNGQ1ZThjYTVkYzNjNzhjNDc2YjEwMmYxYzliYzAyZGQ5NTI0YTYwYmRjM2Y3Nzc2NDJi",
        performance: "",
        productname: "Lash Boost & UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$362",
        value: "($511 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 3rd Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA5MDh8aW1hZ2UvanBlZ3xoMjgvaDViLzE0OTk2MzE3Nzk4NDMwLmpwZ3w3MTQyMTczOTlhZTU0MDY5YzJmNzFmY2NlZmM4NTgwYmNiYTgxZTMxMDg0YjQ2ZGYxODczYzJiODAzZGUxN2Zi",
        performance: "Best Seller",
        productname: "Lash Boost & REVERSE Regimen + Mini Special",
        define: "",
        price: "$357",
        value: "($506 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 3rd Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8Mjg3NDF8aW1hZ2UvanBlZ3xoY2QvaDUzLzE1MDM4NTk1MzY2OTQyLmpwZ3w4NzU0NWJkZDRkZThiODk3ZDRhMzFlZjRmMDA0YzlmOWNmYjdkNjEwZDc5OTZmNTEwYTI0ZDAzODRlMWUzOWJi",
        performance: "Best Seller",
        productname: "Total RF Serum & REDEFINE Regimen + Mini Special",
        define: "",
        price: "$408",
        value: "($566 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 4th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2MjR8aW1hZ2UvanBlZ3xoYjkvaDZlLzE1MDM4NTk1MTM3NTY2LmpwZ3w1ZjQ4M2I5ZGVjMGZkNDc5NzRlMDhlOTdjNjEyOTJlNDQxODM5NTQxNjVlOTk2MDE0MDY1MGE2N2NjZTQ2YzAw",
        performance: "Best Seller",
        productname: "Total RF Serum & REVERSE Regimen + Mini Special",
        define: "",
        price: "$384",
        value: "($536 Value)",
        rating: "",
        rating_count: " ",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HUNMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2Mjh8aW1hZ2UvanBlZ3xoOTQvaDgzLzE1MDM4NTk2MjUxNjc4LmpwZ3wwMWJjYWZmMGNkZTUzMTI4ZjA2NjIwZDliNGZjNDRkNjFiMmY2YmRmMTc5MjFmYTgxNjUwN2YzN2E2YjRmMjkw",
        performance: "Best Seller",
        productname: "Total RF Serum & UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$378",
        value: "($531 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA4MDV8aW1hZ2UvanBlZ3xoMDUvaGI3LzE1MDM4NTk1Mzk5NzEwLmpwZ3xkZTE0ZWYyYzVhMWFjNWVhZTg2NTg5ZjVlMzRlYjM5YTc4NGRmNmYyZWEyMjJkZDVhY2NmM2RjMjQyZTVhZjIy",
        performance: "Best Seller",
        productname: "Total RF Serum & SOOTHE Regimen + Mini Special",
        define: "",
        price: "$373",
        value: "($526 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
        performance: "Best Seller",
        productname: "R + F Lash Boost",
        define: "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes.",
        price: "$155",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        performance: "Best Seller",
        productname: "Total RF Serum",
        define: "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.",
        price: "$175",
        value: "",
        rating: "★★★★★",
        rating_count: "4.5",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        performance: "Best Seller",
        productname: "REDEFINE Multi-Function Eye Cream",
        define: "Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet",
        price: "$70",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 6th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/AAWA125-AATN125-AATT030-AAPM030-REDEFINE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wzMTE2NXxpbWFnZS9wbmd8aW1hZ2VzL2hkNy9oMWMvMTM3NTgzODQwNzg4NzgucG5nfDE5NTM4Yzc1OTA0MWNiY2M5NzYwMDZhMTQ0NGVmZDEzZmRhYzVlZWE4YWRhODk3NWQ0ZGU1NDlhNzVjZTUyOTU",
        performance: "Best Seller",
        productname: "REDEFINE Regimen",
        define: "Visibly lifts, sculpts + firms while minimizing the appearance of lines + deep wrinkles. ",
        price: "$220",
        value: "($275 Value)",
        rating: "★★★★★",
        rating_count: "4.7",
        button: "SHOP NOW"
    },
    {
        // 6th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/RVWA125-RVTG125-RVSS050-RVTTG50-REVERSE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MTY5NHxpbWFnZS9wbmd8aW1hZ2VzL2gyNy9oZWIvMTM3NTgzODQzNDEwMjIucG5nfGI3NmIzMjI0NTc2Y2RiZjZlNTdhYjg0ZDM4ZjM0MmM2M2U5Yjg5Y2RiNTM1NTM1NGFlOWNiY2E5ZTVkYTM5NWY",
        performance: "Best Seller",
        productname: "REVERSE Regimen",
        define: "Brightens + refines skin’s surface while tackling the look of fine lines + dark spots. ",
        price: "$195",
        value: "($245 Value)",
        rating: "★★★★★",
        rating_count: "3.9",
        button: "ADD TO BAG"
    },
    {
        // 6th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/UNWA125-UNTJ125-UNTT030-UNSS030-UNBLEMISH-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w1NDk5N3xpbWFnZS9wbmd8aW1hZ2VzL2g2YS9oOTYvMTM3NTgzODQ4NjUzMTAucG5nfDNhOWMxMGU5MjIzMGEyZjNhNTZjNWVkMjUxYmJjODI5YmNlODhjODBkNzJjZTA4ZDk1YTk0Yzk0ZjkyNzdhZmU",
        performance: "Best Seller",
        productname: "UNBLEMISH Regimen",
        define: "Helps clear and prevent adult acne while visibly minimizing pores and fine lines.",
        price: "$190",
        value: "($240 Value)",
        rating: "★★★★★",
        rating_count: "4.5",
        button: "ADD TO BAG"
    },
    {
        // 7th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
        performance: "",
        productname: "SOOTHE Regimen",
        define: "Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier. ",
        price: "$185",
        value: "($235 Value)",
        rating: "★★★★★",
        rating_count: "4.2",
        button: "ADD TO BAG"
    },
    {
        // 7th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        performance: "",
        productname: "RECHARGE Regimen",
        define: "Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated. ",
        price: "$134",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 7th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        performance: "Award Winner",
        productname: "SPOTLESS Regimen",
        define: "For teens and young adults: Clears existing blemishes + prevents new ones from forming.",
        price: "$89",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 8th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA",
        performance: "Best Seller",
        productname: "Active Hydration Serum",
        define: "Instantly boosts hydration levels by 200% and locks in moisture on skin's surface. ",
        price: "$112",
        value: "($391 Value)",
        rating: "★★★★★",
        rating_count: "4.8",
        button: "ADD TO BAg"
    },
    {
        // 8th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh",
        performance: "Best Seller",
        productname: "Active Hydration Bright Eye Complex",
        define: "Reduces visible dark circles and under-eye puffiness over time for younger-looking eyes. ",
        price: "$72",
        name: "Regimens",
        value: "",
        rating: "★★★★★",
        rating_count: "4.5",
        button: "ADD TO BAG"
    },
    {
        // 8th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
        performance: "Best Seller",
        productname: "Rodan + Fields Active Hydration Body",
        define: "Instantly and continuously hydrates the body for younger-looking, younger-acting skin. ",
        price: "$66",
        value: "",
        rating: "★★★★★",
        rating_count: "4.9",
        button: "ADD TO BAG"
    },

]
display(productData)


function display(Data) {
    document.querySelector("#result").innerHTML = ""


    Data.forEach(function(ele) {

        var x = document.createElement("div")
        x.setAttribute("id", "card")

        var image = document.createElement("img");
        image.setAttribute("src", ele.Image)

        var perform = document.createElement("p");
        perform.innerText = ele.performance

        var name = document.createElement("h4");
        name.innerText = ele.productname;

        var define_product = document.createElement("p")
        define_product.innerText = ele.define;

        var price = document.createElement("span")
        price.innerText = ele.price

        var or_price = document.createElement("span")
        or_price.innerText = ele.value

        var breaking = document.createElement("br")

        var rate_no = document.createElement("span")
        rate_no.innerText = ele.rating;
        var shop_count = document.createElement("span")
        shop_count.innerText = ele.rating_count;

        var button = document.createElement("button")
        button.innerText = ele.button;

        x.append(image, perform, name, define_product, price, or_price, breaking, rate_no, shop_count, button)

        document.querySelector("#result").append(x);
        button.addEventListener("click", function() {
            addtocart(ele);
        })

    })
    var cart = JSON.parse(localStorage.getItem("cartItem")) || [];

    function addtocart(ele) {
        cart.push(ele);
        localStorage.setItem("cartItem", JSON.stringify(cart));
        alert("Product Added to the Cart");
        if (confirm("Go to Cart")) {
            window.location.href = "/Cart.html";
        }
    }
}


// Regimens Filter

var datafil1 = [{
        // 1st Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzU2MTV8aW1hZ2UvanBlZ3xoNWQvaDkwLzE1MDM4NTk0Njc4ODE0LmpwZ3w0M2RjYTNjYTRmZTdkYjNhNDUyN2FhNjY1MzdkMzYxNmFjNjEwMmIwMGYyMTZjODFiNzY0MTkxZTQ5OWU2ODQ3",
        performance: "Best Seller",
        productname: "REDEFINE Regimen + Mini Special",
        define: "",
        price: "$270",
        value: "($391 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 1st Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzAwMDV8aW1hZ2UvanBlZ3xoYmYvaDU2LzE0OTk2MzA2Mjk2ODYyLmpwZ3xjOTYzYzVjYTFjMGJlMGY1MmU5ZjIxOTBhYzcwZmMyZWFhYzBlODhmYmVmZmQzNzZkOTAxZjQyZWJjZmUxMjdk",
        performance: "Best Seller",
        productname: "REDEFINE Regimen + Mini Special",
        define: "",
        price: "$245",
        value: "($391 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 1st Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2MTh8aW1hZ2UvanBlZ3xoYzQvaGNmLzE0OTk2MzA1OTM2NDE0LmpwZ3w1M2RjYWNhODE0YTVjNTc5ZWNhOWM2NWMzZTA1M2JmYTQyZjRkNzI3NWZjNjViNTAzYzM3OTk5Y2VjYjJlMDMz",
        performance: "Best Seller",
        productname: "UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$240",
        value: "($356 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 2nd Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOMR22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MjY5NTJ8aW1hZ2UvanBlZ3xoMDIvaGVlLzE0OTk2MzA2NTkxNzc0LmpwZ3w0YzE4YTg4MjA0ZmY4N2E4NzM4MTM5M2Y3OGVkOGQxMTUwMTMzMDNjYTk0MmRkODAyNDZmNmMyODVkZDFiYWQ2",
        performance: "",
        productname: "SOOTHE Regimen + Mini Special",
        define: "",
        price: "$235",
        value: "($351 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 2nd Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HAAML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzQwMjF8aW1hZ2UvanBlZ3xoNWQvaGViLzE0OTk2MzE3NDA1MjE0LmpwZ3xiNTU3MjhjZjZmMDQxNDk4NjAwNzc3ZmUwZWNjMGU0NDdiNmY0NTUyYjM5ZDEzNDUzZDE2OTljMmVhNTU4Njdi",
        performance: "Best Seller",
        productname: "Lash Boost & REDEFINE Regimen + Mini",
        define: "",
        price: "$393",
        value: "($546 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    },
    {
        // 2nd Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVML22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA5MDh8aW1hZ2UvanBlZ3xoMjgvaDViLzE0OTk2MzE3Nzk4NDMwLmpwZ3w3MTQyMTczOTlhZTU0MDY5YzJmNzFmY2NlZmM4NTgwYmNiYTgxZTMxMDg0YjQ2ZGYxODczYzJiODAzZGUxN2Zi",
        performance: "Best Seller",
        productname: "Lash Boost & REVERSE Regimen + Mini",
        define: "",
        price: "$368",
        value: "($516 Value)",
        rating: "",
        rating_count: "",
        button: "SHOP NOW"
    }


]



var count = 0

function reg() {
    count++

    if (count % 2 == 0) {
        display(productData)
    }
    display(datafil1)

}

// Face Serum

var datafil2 = [{
        // 4th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2MjR8aW1hZ2UvanBlZ3xoYjkvaDZlLzE1MDM4NTk1MTM3NTY2LmpwZ3w1ZjQ4M2I5ZGVjMGZkNDc5NzRlMDhlOTdjNjEyOTJlNDQxODM5NTQxNjVlOTk2MDE0MDY1MGE2N2NjZTQ2YzAw",
        performance: "Best Seller",
        productname: "Total RF Serum & REVERSE Regimen + Mini Special",
        define: "",
        price: "$384",
        value: "($536 Value)",
        rating: "",
        rating_count: " ",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HUNMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2Mjh8aW1hZ2UvanBlZ3xoOTQvaDgzLzE1MDM4NTk2MjUxNjc4LmpwZ3wwMWJjYWZmMGNkZTUzMTI4ZjA2NjIwZDliNGZjNDRkNjFiMmY2YmRmMTc5MjFmYTgxNjUwN2YzN2E2YjRmMjkw",
        performance: "Best Seller",
        productname: "Total RF Serum & UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$378",
        value: "($531 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA4MDV8aW1hZ2UvanBlZ3xoMDUvaGI3LzE1MDM4NTk1Mzk5NzEwLmpwZ3xkZTE0ZWYyYzVhMWFjNWVhZTg2NTg5ZjVlMzRlYjM5YTc4NGRmNmYyZWEyMjJkZDVhY2NmM2RjMjQyZTVhZjIy",
        performance: "Best Seller",
        productname: "Total RF Serum & SOOTHE Regimen + Mini Special",
        define: "",
        price: "$373",
        value: "($526 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        performance: "Best Seller",
        productname: "Total RF Serum",
        define: "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.",
        price: "$175",
        value: "",
        rating: "",
        rating_count: "4.5",
        button: "ADD TO BAG"
    },
    {
        // 8th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA",
        performance: "Best Seller",
        productname: "Active Hydration Serum",
        define: "Instantly boosts hydration levels by 200% and locks in moisture on skin's surface. ",
        price: "$112",
        value: "($391 Value)",
        rating: "★★★★★",
        rating_count: "4.8",
        button: "ADD TO BAg"
    }

]
var count1 = 0

function face() {
    count1++
    if (count1 % 2 == 1)
        display(datafil2)
    else
        display(productData)
}

// Eyes Filter  

var datafil3 = [{
        // 5th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/MFEC-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyMzc3NHxpbWFnZS9wbmd8aW1hZ2VzL2gzNS9oZmMvMTM3NTgzODU0NTUxMzQucG5nfDNmYWYyNzdiZGY5OWIyY2UzMDYyZDliYmM2YmUzMTRmOGY3Yzg0YmY1ZjY2YjgyYWU1OGNhZDZiN2IzMjViZGI",
        performance: "Best Seller",
        productname: "REDEFINE Multi-Function Eye Cream",
        define: "Visibly firms + lifts to improve the look of fine lines, wrinkles, sagging + crow’s feet",
        price: "$70",
        value: "",
        rating: "",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 8th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHEY15-720x600-DESKTOP-v4.jpg?context=bWFzdGVyfGltYWdlc3w2MDYyOXxpbWFnZS9qcGVnfGltYWdlcy9oZDcvaGI2LzEzNTMzMTczODc0NzE4LmpwZ3w0MGI1MmM0OTExMmRiMzUzYzg5YTIyNWJjZTdiOTZkNzk1ZTVmOTk2MTBhY2IzZTcwNzhkZDI4NTUxZDI5Zjhh",
        performance: "Best Seller",
        productname: "Active Hydration Bright Eye Complex",
        define: "Reduces visible dark circles and under-eye puffiness over time for younger-looking eyes. ",
        price: "$72",
        name: "Regimens",
        value: "",
        rating: "★★★★★",
        rating_count: "4.5",
        button: "ADD TO BAG"
    }
];

var count3 = 0

function eyes() {
    count3++
    if (count3 % 2 == 1)
        display(datafil3)
    else
        display(productData)
}

// Face Mask Filter

var datafil4 = [{
        // 4th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/HRVMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2MjR8aW1hZ2UvanBlZ3xoYjkvaDZlLzE1MDM4NTk1MTM3NTY2LmpwZ3w1ZjQ4M2I5ZGVjMGZkNDc5NzRlMDhlOTdjNjEyOTJlNDQxODM5NTQxNjVlOTk2MDE0MDY1MGE2N2NjZTQ2YzAw",
        performance: "Best Seller",
        productname: "Total RF Serum & REVERSE Regimen + Mini Special",
        define: "",
        price: "$384",
        value: "($536 Value)",
        rating: "",
        rating_count: " ",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HUNMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzI2Mjh8aW1hZ2UvanBlZ3xoOTQvaDgzLzE1MDM4NTk2MjUxNjc4LmpwZ3wwMWJjYWZmMGNkZTUzMTI4ZjA2NjIwZDliNGZjNDRkNjFiMmY2YmRmMTc5MjFmYTgxNjUwN2YzN2E2YjRmMjkw",
        performance: "Best Seller",
        productname: "Total RF Serum & UNBLEMISH Regimen + Mini Special",
        define: "",
        price: "$378",
        value: "($531 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 4th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/HSOMS22P-720x600-desktop-1.jpg?context=bWFzdGVyfHJvb3R8MzA4MDV8aW1hZ2UvanBlZ3xoMDUvaGI3LzE1MDM4NTk1Mzk5NzEwLmpwZ3xkZTE0ZWYyYzVhMWFjNWVhZTg2NTg5ZjVlMzRlYjM5YTc4NGRmNmYyZWEyMjJkZDVhY2NmM2RjMjQyZTVhZjIy",
        performance: "Best Seller",
        productname: "Total RF Serum & SOOTHE Regimen + Mini Special",
        define: "",
        price: "$373",
        value: "($526 Value)",
        rating: "",
        rating_count: "",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        performance: "Best Seller",
        productname: "Total RF Serum",
        define: "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.",
        price: "$175",
        value: "",
        rating: "",
        rating_count: "4.5",
        button: "ADD TO BAG"
    },
    {
        // 8th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHEFG1-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wyMjI3N3xpbWFnZS9wbmd8aW1hZ2VzL2hkMS9oM2MvMTQ1MzIxNjY2MTUwNzAucG5nfGZlMDQ0NDRlMjczNDFlZjdkYWVmNjkwZWY4MDAwM2I4MjMwZGZiMzU3ZTViZGNlYjllNzBiZjAwY2FlZDU5NzA",
        performance: "Best Seller",
        productname: "Active Hydration Serum",
        define: "Instantly boosts hydration levels by 200% and locks in moisture on skin's surface. ",
        price: "$112",
        value: "($391 Value)",
        rating: "★★★★★",
        rating_count: "4.8",
        button: "ADD TO BAg"
    }
];

var count4 = 0

function faceMask() {
    count4++
    if (count4 % 2 == 1)
        display(datafil4)
    else
        display(productData)
}

var datafil5 = [{
    // 8th Row
    // 3rd Card
    Image: "https://www.rodanandfields.com/en-us/medias/ENBR001-720x600-DESKTOP.jpg?context=bWFzdGVyfHJvb3R8MTg2NDR8aW1hZ2UvanBlZ3xoNWMvaGQ5LzEzNTMzMTYzMDk0MDQ2LmpwZ3xiNmNjNjE3YmJmOTI4Y2UzZjAwM2RkMDQwZDNkNmNiZDQyZWQzMzQ4N2ZjZmMxOWY1OGEzYjQ1MTFiM2M1MGE5",
    performance: "Best Seller",
    productname: "Rodan + Fields Active Hydration Body",
    define: "Instantly and continuously hydrates the body for younger-looking, younger-acting skin. ",
    price: "$66",
    value: "",
    rating: "★★★★★",
    rating_count: "4.9",
    button: "ADD TO BAG"
}]

var count5 = 0;

function handBody() {
    count5++
    if (count5 % 2 == 1)
        display(datafil5)
    else
        display(productData)
}

var datafil6 = [{
    // 7th Row
    // 3rd Card
    Image: "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
    performance: "Award Winner",
    productname: "SPOTLESS Regimen",
    define: "For teens and young adults: Clears existing blemishes + prevents new ones from forming.",
    price: "$89",
    value: "",
    rating: "★★★★★",
    rating_count: "4.6",
    button: "ADD TO BAG"
}]



var count6 = 0;

function sunProtect() {
    count6++
    if (count6 % 2 == 1)
        display(datafil6)
    else
        display(productData)
}

var datafil7 = [{
        // 7th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/SOWA125-SOTT050-SOMO050-SOSS050-SOOTHE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3w0MDc1MHxpbWFnZS9wbmd8aW1hZ2VzL2g5Zi9oYWMvMTM3NTgzODUxMjc0NTQucG5nfGFmOTE5ZGY1MjdhZmFkNDhhNzNiOTkyYTYzODAxNzI4OTE3ZGQ5Zjk3YzRlOGRlNTIzYzU3MzZlMTQzNGEzNTI",
        performance: "",
        productname: "SOOTHE Regimen",
        define: "Protects sensitive skin, reduces visible redness + fortifies skin’s moisture barrier. ",
        price: "$185",
        value: "($235 Value)",
        rating: "★★★★★",
        rating_count: "4.2",
        button: "ADD TO BAG"
    },
    {
        // 7th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/RCWA125-RCTTO50-RCSP040-REGHARGE-Regimen-Explainer-570x570.png?context=bWFzdGVyfGltYWdlc3wyNTQ5NHxpbWFnZS9wbmd8aW1hZ2VzL2hkNi9oNDMvMTM3NTgzODQ2MDMxNjYucG5nfGQ4MzYxODU0ZDcxOTZiOTdlODg3NmZmZTAzZGQ1MGQ5Yjg0YzBhODk3NzJhYzM5NzZlNjQ1NjQzNGQ3NTY0ZmE",
        performance: "",
        productname: "RECHARGE Regimen",
        define: "Defends against lifestyle stressors that leave skin looking dull, blotchy + dehydrated. ",
        price: "$134",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 7th Row
        // 3rd Card
        Image: "https://www.rodanandfields.com/en-us/medias/spotless-regimen-UNRS001.jpg?context=bWFzdGVyfGltYWdlc3wxOTY4NHxpbWFnZS9qcGVnfGltYWdlcy9oM2QvaGU3LzEzODE0NjU0MzA0Mjg2LmpwZ3xjNGJiOWMyMDczMDlmMzU4OWRjM2FiNjhkNjgxY2QyYzY1ZjI1NzNlY2NlNWZmMGE1NWZjNTUxMjNkOGIzY2Q3",
        performance: "Award Winner",
        productname: "SPOTLESS Regimen",
        define: "For teens and young adults: Clears existing blemishes + prevents new ones from forming.",
        price: "$89",
        value: "",
        rating: "★★★★★",
        rating_count: "4.6",
        button: "ADD TO BAG"
    }
]


var count7 = 0;

function proSkin() {
    count7++
    if (count7 % 2 == 1)
        display(datafil7)
    else
        display(productData)
}


// Accessories Filter

var datafil8 = [{
        // 5th Row
        // 1st Card
        Image: "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
        performance: "Best Seller",
        productname: "R + F Lash Boost",
        define: "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes.",
        price: "$155",
        value: "",
        rating: "",
        rating_count: "4.6",
        button: "ADD TO BAG"
    },
    {
        // 5th Row
        // 2nd Card
        Image: "https://www.rodanandfields.com/en-us/medias/TRFS-Regimen-Explainer-GLOBAL-570x570.png?context=bWFzdGVyfGltYWdlc3wyODM2M3xpbWFnZS9wbmd8aW1hZ2VzL2g5Yy9oNzcvMTM3NTgzODUzODk1OTgucG5nfGYyZGUwNzdmOWM3N2Q2M2FlMjM4Zjc4MjQxNWZkNmIzOTc0NjIyZWM3MDgyZTY3YzA5YjMyZjNhZWY3MGE3YzY",
        performance: "Best Seller",
        productname: "Total RF Serum",
        define: "Our most comprehensive anti-aging serum to revitalize and address all key signs of aging.",
        price: "$175",
        value: "",
        rating: "",
        rating_count: "4.5",
        button: "ADD TO BAG"
    }

]

var count8 = 0;

function accessories() {
    count8++
    if (count8 % 2 == 1)
        display(datafil8)
    else
        display(productData)
}