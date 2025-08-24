# Reflection

## Implementation

### Goals:

~~🎯 Implement responsive design methods to ensure the website works well on both small mobile screens and larger desktop screens (e.g., above 800px).~~ DONE

- Used 768px as a media query breakpoint for larger screens.

~~🎯 Implement at least one meaningful media query so that there is a noticeable change between mobile and desktop view (an example is to change where the ‘thumbnail bar’ is positioned).~~ DONE

- Header changes from flex-direction: row, to flex-direction: column, so that the branding and the navigation both fit on smaller screens.
- Close Image button is displayed under the image closer to thumbs on mobile device -> when the screen size is larger, the button gets removed from the document flow and positioned absolutely, to keep the featured image title and text bar 'sleeker'

~~🎯 Ensure all images have appropriate alt text attributes for accessibility.~~ DONE

- alt text provided for all images in the array of image objects.

~~🎯 Correctly use event handlers to switch images based on user interactions.~~ DONE

- Clicking on any thumbnail image will show a larger version of the image, showing a title and some descripting alt text.
- On the larger image pop-up there area three additional buttons for Next, Previous and Close image.

### Stretch Goals

~~🏹 Use ‘srcset’ to specify which image will be used based on the size of the screen for optimal viewing experience.~~

- ?? Maybe implemented? 😅 TBD. Further ramblings on this in [areas to improve](#areas-to-improve)

~~🏹 Add ARIA elements to improve accessibility, such as aria-label, aria-live, and other relevant attributes.~~ DONE

- added aria-label elements to all buttons and input fields on the website
- added aria-required="true/false" to the form elements of the about section

~~🏹 Implement key bindings for buttons to enhance navigation, such as using arrow keys to switch between images.~~ DONE

- Left and Right Arrow Keys call PrevImage() and nextImage() functions respectively to change the image when the larger image is showing. There are also buttons that appear next to larger images that call the same functions to navigate by clicking the buttons instead of arrow keys.

- added escape key functionality to close the featured image.

### Prelude

With this weeks assignment, I wanted to really push the boundaries and incorporate EVERYTHING I have learned so far. This was a big ask for the time given, but I'm quite happy with my results. Given the very positive feedback I received for my Week 1 assignment, I decided to keep the ball rolling and not only attempt the assignment, but to also attempt to build some sort of larger website around the gallery as an extra challenge for myself.

My goal with this approach is to have more than just the gallery at the end, to serve as a 'grander' portfolio piece.

### Design principles

This weeks assignment was to create an image gallery of sorts to show smaller thumbnail images, then use those to create a larger images. In the example, there were some design choices that I wanted to avoid for my own project. Due to the nature of having to make the website responsive, this meant that using the object-fit: cover property resulted in much of the image being clipped off in portrait mode as the width is not being respected to the confines of the screen edge .Additionally, I didn't want the thumbnails to be overlayed my larger image. I wanted to really test myself with this project and attempt something quite different to the example while still ticking all of the user story goals.

I decided to implement a feature that when you click on a thumbnail, it brings up an overlay containing the larger resolution version of the image that was clicked on. I also wanted to display some text, showing a "title" for the photo, and additionally I decided at this point that I wanted the alt text to show under the title to serve as some sort of description. I know that a full image description and alt text serve different purposes, but I wanted to use this as an opportunity for further practice at rendering elements to the DOM through Javascript and referencing object data.

I also decided that instead of following Manny's pseudo-code example of deleting an image to create another one when you click a thumbnail, that I have one constant `<img>` element that is never deleted, but the source attribute simply updates depending on what thumbnail image I click. This brought its own challenge that I will get onto later

I also wanted to build a larger website outside of the gallery. This is because on it's own the gallery is a collection of images that are mostly unrelated. In a real-world example, images would be contextualised in the broader website they're a part of, whether it's somebody's personal collection of photos on something like instagram, or perhaps a gallery of a tradesman's work that they use as examples for future clients. Building the larger website around the gallery will ultimately contextualise the images.

With all of this said, with the changes I wanted to make, I can still achieve all the goals. I can still have thumbnails that show a larger image, have all images have alt text, use handlers to switch images for user interaction, and be responsive for different sizes.

### What went well

#### Addressing a potential bug early

In the [example website](https://image-galleryv2.vercel.app/) I discovered a bug that I didn't want to replicate. If you use the arrows to cycle to an image (for example, the red panda), then click on the another image thumbnail (for example the lynx) to change the image, you would expect that pressing left or right would navigate to the left or right of the lynx in this example and would expect to see the bird or the dog, but instead you get whatever was to the left or right of the last image you navigated to using the arrows. I suspect that this is a disconnect in a variable not updating when you switch between both methods of displaying a larger image.

To get around this, I wanted one variable (that I called imageToDisplay) that was simply a number, then use that number to target an index of my array of image objects. In the example, clicking the thumbnails doesn't seem to update a variable that the "next image" or "previous image" functions use. In my project, I started by creating the thumbnails and rendering them to the DOM, but whilst I'm creating them in my loop, I gave each image a data attribute containing the index number of the image in the array. In my click event I can then use getAttribute() to return my index number and use that data attribute to update my imageToDisplay variable, and then update my larger image.

#### Creating and rendering a section to the DOM with Javascript

With efforts to continue to practice rendering to the DOM and ensuring that i'm appending the right elements to the correct containers, lines 65 to 115 in my app.js are responsible for creating my entire gallery structure with the correct elements and classes. This is a lot of lines of code for what could have just been done in HTML, but I count this as a win because I was able to practice creating nested elements into a structure that was suitable for the gallery.

#### Refactoring code

As I started creating functions that update my "featured image", whether that be by clicking a thumbnail, or navigating with the arrow buttons or arrow keys, I started to see a lot of repeat code. I put that repeated code block into its own function then replaced the code blocks with the function instead. I think in the end it has made the code much more readable.

### Areas to improve

Further understanding responsive design and the cascading nature of media queries is an area that I need to look into more. Towards the end of the styling I discovered that creating breakpoints of max-width starting from smaller resolutions first seemed to work quite well.

I implemented the srcset attribute however I really struggled to test if it was working. When I completely swapped out the images for placeholders that would be easy to test the functionality, sometimes it worked, sometimes it didn't, which I suspect is a caching issue? I'm still unsure after implementation whether it is working as it should be or if I have done something incorrectly. If it's not a caching issue then I suspect a potential issue as to why I'm having problems with it is maybe down to my design choice of keeping one image element and dynamically changing the attributes of the element. More research to be done on this.

Overall, I thought that if I was going to have any "spaghetti code" that it would be in my javascript, and while theres almost definitely going to be better ways I could have done things, i'm happy with what I have. My CSS on the otherhand ended up feeling more like "spaghetti code" than my javascript ever has. Following on from the feedback I got from the Week 1 assignment, as I got it on friday around the time we starte this assignment, I've read the feedback itself but haven't had chance to follow up on the reading material for naming conventions in CSS to apply it. That is definitely something for next project

### Summary

I believe that this week was a massive step forward for me. Not only did I manage to achieve goals set forth for the assignment, I applied it to a larger project that I'm very happy with as a portfolio piece. It was great to get my hands dirty with more javascript to create functionality past the week 1 assignment, and I've learned so much from this project.

### References

[MDN: Data Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/data-*)
[MDN aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
[Form Styling Essentials](https://www.youtube.com/watch?v=nuDpLN2dazU)
[srcset tutorial](https://www.youtube.com/watch?v=2QYpkrX2N48)
