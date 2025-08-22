const images = [
  {
    title: "A city at night",
    filePath: "./images/city-7358078_1920.jpg",
    altText:
      "A bustling Korean highrise cityscape at night lit by the cities light",
  },
  {
    title: "Buildings at night",
    filePath: "./images/buildings-1839647_1920.jpg",
    altText: "Buildings lit at night",
  },
  {
    title: "Industrial Snow",
    filePath: "./images/lukas-lehotsky-ZEifAiol6Gk-unsplash.jpg",
    altText: "A photo by Lukas Lehotsky",
  },
];

for (i = 0; i < images.length; i++) {
  images[i].index = i;
}
console.log(images);

let imageToDisplay = 0;
//const featuredImage = document.getElementById("featured-image");

//initialise
// create the section for the popup "feature", set the ID to "feature" and then append to body
const featureSection = document.createElement("section");
featureSection.id = "feature";
featureSection.classList.add("hidden");
document.body.prepend(featureSection);

// Create a div with an ID called "feature-container", then append it to the section
const featureContainer = document.createElement("div");
featureContainer.id = "feature-container";
featureSection.appendChild(featureContainer);

// featured image
const featuredImageContainer = document.createElement("div");
featuredImageContainer.classList.add("featured-image-container");
const featuredImage = document.createElement("img");
featuredImage.id = "featured-image";
featuredImage.setAttribute("src", images[imageToDisplay].filePath);
featuredImageContainer.appendChild(featuredImage);

// featured info
const featuredInfo = document.createElement("div");
featuredInfo.classList.add("featured-info");
const featuredInfoTitle = document.createElement("strong");
featuredInfoTitle.classList.add("image-title");
featuredInfoTitle.textContent = images[imageToDisplay].title;
const featuredInfoText = document.createElement("p");
featuredInfoText.classList.add("image-text");
featuredInfoText.textContent = images[imageToDisplay].altText;
featuredInfo.appendChild(featuredInfoTitle);
featuredInfo.appendChild(featuredInfoText);

// buttons
const prevImageButton = document.createElement("button");
prevImageButton.classList.add("feature-button", "prev-image");
prevImageButton.textContent = "Prev";

const nextImageButton = document.createElement("button");
nextImageButton.classList.add("feature-button", "next-image");
nextImageButton.textContent = "Next";

const closeImageButton = document.createElement("button");
closeImageButton.classList.add("feature-button", "close-image");
closeImageButton.textContent = "Close";

featureContainer.appendChild(featuredImageContainer);
featureContainer.appendChild(featuredInfo);
featureContainer.appendChild(prevImageButton);
featureContainer.appendChild(nextImageButton);
featureContainer.appendChild(closeImageButton);

// initialise thumbnails
for (i = 0; i < images.length; i++) {
  const thumbnailContainer = document.getElementById("thumbnail-container");
  const thumbnailDiv = document.createElement("div");
  thumbnailDiv.classList.add("thumbnail");
  const image = document.createElement("img");
  image.classList.add("thumbnail-image");
  image.setAttribute("data", i);
  image.setAttribute("src", images[i].filePath);
  image.addEventListener("click", function () {
    imageToDisplay = image.getAttribute("data");
    toggleImage();
    console.log(imageToDisplay);
  });

  thumbnailDiv.appendChild(image);
  thumbnailContainer.appendChild(thumbnailDiv);
}

// Buttons Functionality

function nextImage() {
  if (imageToDisplay < images.length - 1) {
    imageToDisplay++;
    updateImage();
  } else if (imageToDisplay == images.length - 1) {
    imageToDisplay = 0;
    updateImage();
  }
}

function prevImage() {
  if (imageToDisplay > 0) {
    imageToDisplay--;
    updateImage();
  } else if (imageToDisplay === 0) {
    imageToDisplay = images.length - 1;
    updateImage();
  }
}

function toggleImage() {
  updateImage();

  const featureSection = document.getElementById("feature");

  if (featureSection.classList.contains("hidden")) {
    featureSection.classList.remove("hidden");
  } else if (!featureSection.classList.contains("hidden")) {
    featureSection.classList.add("hidden");
  }
}

function updateImage() {
  featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  featuredInfoTitle.textContent = images[imageToDisplay].title;
  featuredInfoText.textContent = images[imageToDisplay].altText;
}

nextImageButton.addEventListener("click", nextImage);
prevImageButton.addEventListener("click", prevImage);
closeImageButton.addEventListener("click", toggleImage);

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(key) {
  if (key.key === "ArrowRight") {
    nextImage();
  } else if (key.key === "ArrowLeft") {
    prevImage();
  }
}
