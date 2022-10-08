// Eable Disable Script
function enabledisable(element) {
    console.log(element.style);
    if (element.style.fill != "rgb(29, 185, 84)") {
        element.style.setProperty("fill", "#1db954");
    } else {
        element.style.setProperty("fill", "#fff");
    }
}

// Greeetngs Script
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();
const welcomeTypes = ["Good morning", "Good afternoon", "Good evening"];
let welcomeText = "";

if (hour < 12) welcomeText = welcomeTypes[0];
else if (hour < 18) welcomeText = welcomeTypes[1];
else welcomeText = welcomeTypes[2];

greeting.innerHTML = welcomeText;

//Carousel Slider Script
const leftBtn = document.querySelector(".left-btn");
const rightBtn = document.querySelector(".right-btn");
const carouselContainer = document.querySelector(".carousel-container");
const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselUl = carouselContainer.querySelectorAll("ul");
const gap = 16;
let tracker = 0;
let carouselMovement = "forwards";

//Please Reload the page to see the Carousel Slider's Responsive Design
window.addEventListener("resize", () => {
    carouselUl.forEach((val) => {
        val.style.width = `${carouselContainer.clientWidth}px`;
    });
});

const handleLeftBtn = () => {
    tracker--;
    if (tracker === -1) {
        tracker = 0;
        leftBtn.disabled = true;
        return;
    }
    rightBtn.disabled = false;
    const position = tracker * (carouselContainer.clientWidth + 16);

    carouselWrapper.style.transform = `translateX(-${position}px)`;
};

const handleRightBtn = () => {
    tracker++;
    if (tracker === carouselUl.length) {
        tracker = carouselUl.length - 1;
        rightBtn.disabled = true;
        return;
    }
    leftBtn.disabled = false;
    const position = tracker * (carouselContainer.clientWidth + 16);

    carouselWrapper.style.transform = `translateX(-${position}px)`;
};

leftBtn.addEventListener("click", () => {
    handleLeftBtn();
});

rightBtn.addEventListener("click", () => {
    handleRightBtn();
});

const animateCarousel = setInterval(() => {
    if (tracker === 0) {
        carouselMovement = "forwards";
    } else if (tracker === carouselUl.length - 1) {
        carouselMovement = "backwards";
    } else {
        console.log("carousel is running");
    }

    if (carouselMovement === "forwards") {
        handleRightBtn();
    } else if (carouselMovement === "backwards") {
        handleLeftBtn();
    } else {
        console.log("error!!!");
    }
}, 4000);
