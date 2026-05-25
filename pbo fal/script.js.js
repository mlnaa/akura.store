// =========================
// CLASS PRODUCT
// =========================
class Product {

    constructor(brand, name, price, image) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.image = image;
    }

    displayProduct() {

        return `

        <div class="card">

            <div class="wishlist">
                <i class="ri-heart-3-line"></i>
            </div>

            <img src="${this.image}" alt="${this.name}">

            <div class="card-content">

                <div class="brand-name">
                    ${this.brand}
                </div>

                <div class="product-title">
                    ${this.name}
                </div>

                <div class="price">
                    Rp. ${this.price.toLocaleString("id-ID")}
                </div>

                <button 
class="buy-btn"
data-name="${this.name}"
data-price="${this.price}"
data-image="${this.image}"
>
BELI SEKARANG
</button>

            </div>

        </div>
        `;
    }
}

// =========================
// DATA PRODUK
// =========================
const products = [

new Product(
"ADIDAS",
"Samba OG Men's Sneakers - Core Black",
2200000,
"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
),

new Product(
"PUMA",
"Speedcat Ballet Women's Shoes",
1299000,
"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
),

new Product(
"NIKE",
"Air Max Plus Men's Sneakers",
2849000,
"https://images.unsplash.com/photo-1543508282-6319a3e2621f"
),

new Product(
"ON",
"Cloud 6 Men's Sneakers",
2600000,
"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
),

new Product(
"ADIDAS",
"Ultraboost Running Shoes",
2400000,
"https://images.unsplash.com/photo-1549298916-b41d501d3772"
),

new Product(
"NEW BALANCE",
"530 Classic Lifestyle",
1800000,
"https://images.unsplash.com/photo-1605348532760-6753d2c43329"
),

new Product(
"CONVERSE",
"Chuck Taylor High Black",
999000,
"https://images.unsplash.com/photo-1514996937319-344454492b37"
),

new Product(
"VANS",
"Old Skool Premium",
1200000,
"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
),

new Product(
"NIKE",
"Dunk Low Panda",
2100000,
"https://images.unsplash.com/photo-1608231387042-66d1773070a5"
),

new Product(
"ADIDAS",
"Forum Low White",
1750000,
"https://images.unsplash.com/photo-1600269452121-4f2416e55c28"
),

new Product(
"PUMA",
"RS-X Triple White",
1900000,
"https://images.unsplash.com/photo-1600180758890-6b94519a8ba6"
),

new Product(
"ASICS",
"Gel Kayano 14",
3200000,
"https://images.unsplash.com/photo-1460353581641-37baddab0fa2"
),

new Product(
"NIKE",
"Jordan 1 Low",
2500000,
"https://images.unsplash.com/photo-1552346154-21d32810aba3"
),

new Product(
"ADIDAS",
"Gazelle Indoor",
1999000,
"https://images.unsplash.com/photo-1491553895911-0055eca6402d"
),

new Product(
"NEW BALANCE",
"9060 Grey",
3100000,
"https://images.unsplash.com/photo-1605348532760-6753d2c43329"
),

new Product(
"REEBOK",
"Club C Vintage",
1500000,
"https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb"
),

new Product(
"SKECHERS",
"Go Walk Comfort",
1300000,
"https://images.unsplash.com/photo-1465453869711-7e174808ace9"
),

new Product(
"NIKE",
"Pegasus Trail",
2300000,
"https://images.unsplash.com/photo-1543508282-6319a3e2621f"
),

new Product(
"PUMA",
"Future Rider Play On",
1600000,
"https://images.unsplash.com/photo-1542291026-7eec264c27ff"
),

new Product(
"ADIDAS",
"NMD R1 Primeblue",
2700000,
"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111"
)

];

// =========================
// TAMPILKAN PRODUK
// =========================
const container = document.getElementById("brand-container");

products.forEach(product => {
    container.innerHTML += product.displayProduct();
});

// =========================
// SLIDER HERO
// =========================
const slides = document.querySelectorAll(".slide");

let currentSlide = 0;

setInterval(() => {

    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 3000);

// =========================
// KERANJANG
// =========================
let carts = [];

const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const overlay = document.getElementById("overlay");

function addToCart(name, price, image){

    carts.push({
        name,
        price,
        image
    });

    cartCount.innerText = carts.length;

    renderCart();
}

function renderCart(){

    cartItems.innerHTML = "";

    let totalPrice = 0;

    carts.forEach((item, index) => {

        totalPrice += Number(item.price);

        cartItems.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>
                Rp ${Number(item.price)
                .toLocaleString("id-ID")}
                </p>

            </div>

            <button class="delete-btn"
            onclick="removeCart(${index})">
                Hapus
            </button>

        </div>
        `;
    });

    document.getElementById("cart-total-items")
    .innerText =
    `Total Item: ${carts.length}`;

    document.getElementById("cart-total-price")
    .innerText =
    `Total: Rp ${totalPrice.toLocaleString("id-ID")}`;
}

function removeCart(index){

    carts.splice(index, 1);

    cartCount.innerText = carts.length;

    renderCart();
}

function toggleCart(){

    if(overlay.style.display === "flex"){

        overlay.style.display = "none";

    }else{

        overlay.style.display = "flex";

    }
    
}
// =========================
// SLIDE PRODUK KANAN KIRI
// =========================

const recommendGrid = document.querySelector(".recommend-grid");

const leftBtn = document.querySelector(".ri-arrow-left-s-line");
const rightBtn = document.querySelector(".ri-arrow-right-s-line");

rightBtn.addEventListener("click", () => {

    recommendGrid.scrollBy({
        left: 300,
        behavior: "smooth"
    });

});

leftBtn.addEventListener("click", () => {

    recommendGrid.scrollBy({
        left: -300,
        behavior: "smooth"
    });

});

// =========================
// WISHLIST SYSTEM
// =========================

let wishlistData = [];

const wishlistCount = document.getElementById("wishlist-count");

const wishlistItemsContainer =
document.getElementById("wishlist-items");

const wishlistOverlay =
document.getElementById("wishlist-overlay");

// TOGGLE MODAL
function toggleWishlist(){

    if(wishlistOverlay.style.display === "flex"){

        wishlistOverlay.style.display = "none";

    }else{

        wishlistOverlay.style.display = "flex";
    }
}

// RENDER WISHLIST
function renderWishlist(){

    wishlistItemsContainer.innerHTML = "";

    if(wishlistData.length === 0){

        wishlistItemsContainer.innerHTML = `
            <p style="text-align:center;">
                Wishlist masih kosong
            </p>
        `;

        document.getElementById("wishlist-total")
        .innerText =
        "Total Wishlist: 0 Produk";

        return;
    }

    wishlistData.forEach((item, index) => {

        wishlistItemsContainer.innerHTML += `

        <div class="cart-item">

            <img src="${item.image}">

            <div class="cart-info">

                <h4>${item.name}</h4>

                <p>
                  Rp ${Number(item.price)
                  .toLocaleString("id-ID")}
                </p>

            </div>

            <button class="delete-btn"
            onclick="removeWishlist(${index})">
                Hapus
            </button>

        </div>
        `;
    });

    document.getElementById("wishlist-total")
    .innerText =
    `Total Wishlist: ${wishlistData.length} Produk`;
}

function removeWishlist(index){

    wishlistData.splice(index, 1);

    wishlistCount.innerText =
    wishlistData.length;

    renderWishlist();
}

// CLICK LOVE
document.addEventListener("click", function(e){

    const wishlistBtn = e.target.closest(".wishlist");

    if(!wishlistBtn) return;

    wishlistBtn.classList.toggle("active");

    const icon = wishlistBtn.querySelector("i");

    const card = wishlistBtn.closest(".card");

    const productName =
    card.querySelector(".product-title").innerText;

    const productPrice =
    card.querySelector(".price")
    .innerText
    .replace("Rp. ", "")
    .replaceAll(".", "");

    const productImage =
    card.querySelector("img").src;

    if(wishlistBtn.classList.contains("active")){

        icon.classList.remove("ri-heart-3-line");
        icon.classList.add("ri-heart-3-fill");

        wishlistData.push({
            name: productName,
            price: productPrice,
            image: productImage
        });

    }else{

        icon.classList.remove("ri-heart-3-fill");
        icon.classList.add("ri-heart-3-line");

        wishlistData = wishlistData.filter(item =>
            item.name !== productName
        );
    }

    wishlistCount.innerText = wishlistData.length;

    renderWishlist();

});
// =========================
// SEARCH PRODUK
// =========================

const searchInput = document.querySelector(".search-box input");

searchInput.addEventListener("keyup", function(){

    const keyword = this.value.toLowerCase();

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {

        const title = card
        .querySelector(".product-title")
        .innerText
        .toLowerCase();

        const brand = card
        .querySelector(".brand-name")
        .innerText
        .toLowerCase();

        if(
            title.includes(keyword) ||
            brand.includes(keyword)
        ){
            card.style.display = "flex";
        }else{
            card.style.display = "none";
        }

    });

});

document.addEventListener("click", function(e){

    const buyBtn = e.target.closest(".buy-btn");

    if(!buyBtn) return;

    addToCart(
        buyBtn.dataset.name,
        buyBtn.dataset.price,
        buyBtn.dataset.image
    );

});

function checkout(){

    if(carts.length === 0){

        alert("Keranjang masih kosong!");
        return;
    }

    const payment =
    document.getElementById("payment-method").value;

    if(payment === ""){

        alert("Pilih metode pembayaran!");
        return;
    }

    alert(
        `Checkout berhasil dengan ${payment}`
    );

    carts = [];

    cartCount.innerText = 0;

    renderCart();

    toggleCart();
}
function toggleCart(){

    wishlistOverlay.style.display = "none";

    if(overlay.style.display === "flex"){
        overlay.style.display = "none";
    }else{
        overlay.style.display = "flex";
    }
}

function toggleWishlist(){

    overlay.style.display = "none";

    if(wishlistOverlay.style.display === "flex"){
        wishlistOverlay.style.display = "none";
    }else{
        wishlistOverlay.style.display = "flex";
    }
}