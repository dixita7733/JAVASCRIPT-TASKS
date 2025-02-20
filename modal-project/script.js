let website = document.querySelector(".website")
let model = document.querySelector(".loading_main_modal")
let website_ad = document.querySelector(".modal")

window.onload = function(){
    setTimeout(() => {
        website.classList.add("show");
        website.classList.remove("hide");


        console.log("hello")
    }, 3000);
    setTimeout(stop, 3000);

    setTimeout(() => {
       website_ad.classList.add("show_flex");
       website_ad.classList.remove("hide");
    }, 10000)
    setTimeout(stop, 5000);

}

function stop(){
    model.classList.add("hide");
    website_ad.classList.remove("show");
    website_ad.classList.add("hide");
    console.log("stop called")
}   


