
function products(src, heading, price) {
let product_div = document.createElement("div");
product_div.setAttribute("class", "flex flex-col items-center m-4 w-[220px] py-[2%] mt-[20%] lg:mt-[10px] md:mt-[10px]");

    let product_image = document.createElement("img");
    product_image.setAttribute("src", src); 
    product_image.setAttribute("class", "w-[100%] h-[200px] pb-[10px]");

    let product_heading = document.createElement("h3");
    product_heading.innerText = heading; 
    product_heading.setAttribute("class", "text-white text-[19px]");

    let product_price = document.createElement("p");
    product_price.innerText = price; 
    product_price.setAttribute("class", "text-white text-[19px] mb-[15px]");

    let product_btn = document.createElement("a");
    product_btn.innerText = "Add To Cart";
    product_btn.setAttribute("class", "text-white text-[15px] bg-[#8858ED] px-5 py-2 rounded-[20px]");
    product_btn.setAttribute("href", "#");

    product_div.append(product_image, product_heading, product_price, product_btn);

    let all_products = document.getElementById("all_products");
    all_products.appendChild(product_div);
}

const Allsource = [
    "images/pro1.jpg",
    "images/pro2.jpg",
    "images/pro3.jpg",
    "images/pro4.jpg",
    "images/pro5.jpg",
    "images/pro6.jpg",
    "images/pro7.jpg",
    "images/pro8.jpg",
    "images/pro9.jpg",
    "images/pro10.webp",
    "images/pro11.webp",
    "images/pro12.webp"
];

const AllHeading = [
    "Echo Headset",
    "L503 Headset",
    "Headset",
    "Impact Gaming Chair",
    "Mach Gaming Chair",    
    "X-2 Wireless Mouse",
    "Blaze Wireless Mouse",
    "Spartan Mechanical Keyboard",
    "CO-21 Mechanical Keyboard",
    "Gameflow Black",
    "Playbox XZ Gold Edition",
    "Veritas VR Set"
];

const AllPrice = [
    "$39.99",
    "$19.99",
    "$49.99",
    "$25.99",
    "$29.99",
    "$59.99",
    "$199.99",
    "$129.99",
    "$79.99",
    "$14.99",
    "$199.99",
    "$249.99"
];

for (let i = 0; i < 12; i++) {
    products(Allsource[i], AllHeading[i], AllPrice[i]);
}
