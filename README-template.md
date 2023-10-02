# Frontend Mentor - Insure landing page solution

This is a solution to the [Insure landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/insure-landing-page-uTU68JV8). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./images/FireShot%20Capture%20001%20-%20Frontend%20Mentor%20-%20Insure%20landing%20page%20-%20http___127.0.0.1_5500_index.h_%20-%20127.0.0.1.png)


### Links

- Solution URL: https://github.com/lmash12/Insure
- Live Site URL: https://insure-dbf71.web.app/

## My process
my first steps in this project were;
-reading through all documentation 
-declare all my colors
-install all the fonts from google fonts that i would be using for the project. 

Using a mobile first approach i then proceeded to create the nav bar for screens with max width 992px. I added a scroll to function on the menu options incase a user clicked and nothing happened.

I then proceeded to implement the body of the page. My approach with this was to create the web code for each section then immediately implement the responsive side of it. this Helped me get the project done much faster.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

I learnt i can manipulate the position of my images using the background position elememt and using numbers instead of words. 

I managed to implement a scroll to feature that will scroll users to a section on the page and close the menu to allow users to not get stuck on the menu. 

To avoid users scrolling through the menu i implemented a no scroll feature so users stay on the menu until they click an option. 

code snippets, see below:

```css
body.no-scroll {
  overflow: hidden;
}
```
```js
  if (isOpen) {
    toggleBtnIcon.src = "images/icon-close.svg";
    body.classList.add("no-scroll");
  } else {
    toggleBtnIcon.src = "images/icon-hamburger.svg"; 
    body.classList.remove("no-scroll");
  }
});
```


### Continued development

I would like to take on projects that involve a lot more javascript and api calls so i can test myself.


## Author

- Website - [Lesley Mashaya](https://lesmashaya.web.app/)
- Frontend Mentor - @lmash12
- Twitter - https://www.twitter.com/lmash12

