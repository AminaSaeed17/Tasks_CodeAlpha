const tabs = document.querySelectorAll('ul li');
const imgs = document.querySelectorAll('.info');
const arrayImgs = Array.from(imgs);
console.log(arrayImgs, tabs);

tabs.forEach((e) => {
    e.addEventListener('click', removeActive);
    e.addEventListener('click', manageImgs);
});

function removeActive() {
    tabs.forEach(li => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}

function manageImgs() {
    arrayImgs.forEach(li => {
        li.style.display = 'none';
    });
    document.querySelectorAll(this.dataset.img).forEach(el => {
        el.style.display = 'block';
    });
}

let GallaryItem = document.getElementsByClassName("gallery-item");

// create lightBox
const lightBoxContainer = document.createElement("div");
const lightBoxContent = document.createElement('div');
const lightBoxImg = document.createElement('img');
const lightBoxPrev = document.createElement('div');
const lightBoxNext = document.createElement('div');

// Create classlist

lightBoxContainer.classList.add('lightbox');
lightBoxContent.classList.add('lightbox-content');
lightBoxPrev.classList.add('fa','fa-angle-left','lightbox-prev');
lightBoxNext.classList.add('fa', 'fa-angle-right', 'lightbox-next');

lightBoxContainer.appendChild(lightBoxContent);
lightBoxContent.appendChild(lightBoxImg);
lightBoxContent.appendChild(lightBoxPrev);
lightBoxContent.appendChild(lightBoxNext);
document.body.appendChild(lightBoxContainer);

let index = 1;

function showInfo(e) {
    if (e > GallaryItem.length) {
        index = 1;
    } else if (e < 1) {
        index = GallaryItem.length;
    }
    let gallaryLocation = GallaryItem[index - 1].children[0].getAttribute('src');
    lightBoxImg.setAttribute('src', gallaryLocation);
    console.log(gallaryLocation);
}
function currentImage() {
    lightBoxContainer.style.display = 'block';
    let imageIndex = parseInt(this.getAttribute('data-index'));
    showInfo(index = imageIndex);
}

for (let i = 0; i < GallaryItem.length; i++) {
    GallaryItem[i].addEventListener('click', currentImage);
}
function sliderImage(n) {
    showInfo(index += n);
}
function prevImage() {
    sliderImage(-1);
}
function nextImage() {
    sliderImage(1);
}
lightBoxPrev.addEventListener('click', prevImage);
lightBoxNext.addEventListener('click', nextImage);

function closeLightBox() {
    if (this === event.target) {
        lightBoxContainer.style.display = 'none';
    }
}

lightBoxContainer.addEventListener('click', closeLightBox);


