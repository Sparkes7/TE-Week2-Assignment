const images = [
  {
    title: `"A city at night" by Alef_photograph`,
    filePath: "./images/bustling-korea.jpg",
    sourceset:
      "./images/bustling-korea-halfres.jpg 425w, ./images/bustling-korea.jpg 850w, ",
    altText:
      "A bustling Korean highrise cityscape lit by the city lights at night",
    thumbnail: "./thumbnails/bustling-korea-thumb.jpg",
  },
  {
    title: `"Neon Structures" by Pexels`,
    filePath: "./images/resort.jpg",
    sourceset: "./images/resort-halfres.jpg 425w, ./images/resort.jpg 850w",
    altText:
      "Tall buildings surrounded by calm water that is reflecting the night lights",
    thumbnail: "./thumbnails/resort-thumb.jpg",
  },
  {
    title: `"Industrial Snow" by Lukas Lehotsky`,
    filePath: "./images/snowy-powerplant.jpg",
    sourceset:
      "./images/snowy-powerplant-halfres.jpg 425w, ./images/snowy-powerplant.jpg 850w",
    altText: "A power station blanketed in snow at dawn",
    thumbnail: "./thumbnails/snowy-powerplant-thumb.jpg",
  },
  {
    title: `"Escaping Concrete Jungles" by Anthony Intraversato`,
    filePath: "./images/city-overhang.jpg",
    sourceset:
      "./images/city-overhang-halfres.jpg 425w, ./images/city-overhang.jpg 850w",
    altText:
      "Person wearing blue jeans facing the cityscape from atop a building during nighttime",
    thumbnail: "./thumbnails/city-overhang-thumb.jpg",
  },
  {
    title: `"Golden Gate" by Mooloom`,
    filePath: "./images/golden-gate.jpg",
    sourceset:
      "./images/golden-gate-halfres.jpg 425w, ./images/golden-gate.jpg 850w",
    altText:
      "The Golden Gate Bridge in San Francisco spanning over the ocean to a city of lights at night",
    thumbnail: "./thumbnails/golden-gate-thumb.jpg",
  },
  {
    title: `"Manhattan From Space" by NASA`,
    filePath: "./images/nasa-manhattan.jpg",
    sourceset:
      "./images/nasa-manhattan-halfres.jpg 425w, ./images/nasa-manhattan.jpg 850w",
    altText:
      "An night-time aerial view of Manhattan, New York taken from the International Space Station",
    thumbnail: "./thumbnails/nasa-manhattan-thumb.jpg",
  },
  {
    title: `"Presence" by Hikarinoshita Hikari`,
    filePath: "./images/light-pollution.jpg",
    sourceset:
      "./images/light-pollution-halfres.jpg 425w, ./images/light-pollution.jpg 850w",
    altText:
      "A dark body of water at night with an explosion of light pollution in the distance",
    thumbnail: "./thumbnails/light-pollution-thumb.jpg",
  },
  {
    title: `"Smolder" by Matt Howard`,
    filePath: "./images/forest-fire.jpg",
    sourceset:
      "./images/forest-fire-halfres.jpg 425w, ./images/forest-fire.jpg 850w",
    altText: "A large-scale smoggy forest fire at night",
    thumbnail: "./thumbnails/forest-fire-thumb.jpg",
  },
];

for (i = 0; i < images.length; i++) {
  images[i].index = i;
}
console.log(images);

let imageToDisplay = 0;
let isFeatureOpen = false;

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
prevImageButton.textContent = "<";
prevImageButton.setAttribute("aria-label", "Go to previous image");

const nextImageButton = document.createElement("button");
nextImageButton.classList.add("feature-button", "next-image");
nextImageButton.textContent = ">";
nextImageButton.setAttribute("aria-label", "Go to next image");

const closeImageButton = document.createElement("button");
closeImageButton.classList.add("close-image");
closeImageButton.textContent = "Close Image";
closeImageButton.setAttribute("aria-label", "Close image overlay");

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
  image.setAttribute("data-index", i);
  image.setAttribute("src", images[i].thumbnail);
  image.setAttribute("alt", images[i].altText);
  image.setAttribute("aria-label", `Gallery image ${i + 1}`);
  image.addEventListener("click", function () {
    imageToDisplay = image.getAttribute("data-index");
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

  if (featureSection.classList.contains("hidden")) {
    featureSection.classList.remove("hidden");
    isFeatureOpen = true;
    console.log(isFeatureOpen);
  } else if (!featureSection.classList.contains("hidden")) {
    featureSection.classList.add("hidden");
    isFeatureOpen = false;
    console.log(isFeatureOpen);
  }
}

function updateImage() {
  featuredImage.setAttribute("src", images[imageToDisplay].filePath);
  featuredImage.setAttribute("srcset", images[imageToDisplay].sourceset);
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
  } else if (key.key === "Escape") {
    if (isFeatureOpen) {
      toggleImage();
    }
  }
}
