console.log("hello world");

const images = [
  {
    title: "A city at night",
    filePath: "./images/city-7358078_1920.jpg",
    altText: "",
  },
  {
    title: "Buildings at night",
    filePath: "./images/buildings-1839647_1920.jpg",
    altText: "",
  },
];

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
const featuredInfoText = document.createElement("p");
featuredInfoText.classList.add("image-text");
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

//featuredImage.setAttribute("src", images[imageToDisplay].filePath);

// Buttons Functionality

function nextImage() {
  if (imageToDisplay < images.length - 1) {
    imageToDisplay++;
    featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  } else if (imageToDisplay == images.length - 1) {
    imageToDisplay = 0;
    featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  }
}

function prevImage() {
  if (imageToDisplay > 0) {
    imageToDisplay--;
    featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  } else if (imageToDisplay === 0) {
    imageToDisplay = images.length - 1;
    featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  }
}

function toggleImage() {
  const featureSection = document.getElementById("feature");

  if (featureSection.classList.contains("hidden")) {
    featureSection.classList.remove("hidden");
  } else if (!featureSection.classList.contains("hidden")) {
    featureSection.classList.add("hidden");
  }
}

// const prevImageButton = document.getElementById("prev-image");
// const nextImageButton = document.getElementById("next-image");
// const closeImageButton = document.getElementById("close-image");

nextImageButton.addEventListener("click", nextImage);
prevImageButton.addEventListener("click", prevImage);
closeImageButton.addEventListener("click", toggleImage);

window.addEventListener("keydown", handleKeyPress);

function handleKeyPress(key) {
  if (key.key === "ArrowRight") {
    nextImage();
  } else if (key.key === "ArrowLeft") {
    prevImage();
  } else if (key.key === "Escape") {
    toggleImage();
  }
}

//
// Might need later:

// loop through images and give them an index key value pair.
// for (i = 0; i < images.length; i++) {
//   images[i].index = i;
// }
// console.log(images);
