const items = document.querySelectorAll(".carousel-items");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const progressBar = document.querySelector(".progress-bar");
let currentIndex = 0;
let length = items.length;
let nextImgRef;
let progress = 0;

function displayImg(index) {
    items[index].style.display = "block";
    progress = 0;
    progressBar.style.width = '0%';
}

function nextImg() {
    items[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % length;
    displayImg(currentIndex);
    startProgressBar();

}
prevBtn.addEventListener("click", () => {
    items[currentIndex].style.display = "none";
    if (currentIndex === 0) {
        currentIndex = length - 1;
    } else {
        currentIndex--;
    }
    displayImg(currentIndex);
    startProgressBar();
});

function updateProgressBar() {
    if (progress < 100) {
        progress += 0.5;
        progressBar.style.width = `${progress}%`;
    } else {
        nextImg();
    }
}

function startProgressBar() {
    clearInterval(nextImgRef);
    nextImgRef = setInterval(updateProgressBar, 10);
}


displayImg(currentIndex);
nextBtn.addEventListener("click", nextImg);
startProgressBar();

