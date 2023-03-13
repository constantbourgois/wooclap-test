
# Integration test

Built with React, Parcel

`npm install
npm start`

### Comments

- I've made most of the styling with a main Scss stylesheet, to go faster for this exercise. But for and idea of reusability of the components, it could have been better to use a different stylesheet for each one, or directly style them inside React. ( In "real life" This should be discussed at the beginning of the project)
- As you mentioned, I would normally spend more time on the style details (margins, colors, fonts, borders...)

### list the UX tweaks you can think of to improve the presentation configuration screen
as you said, it's hard to find any just based on the png, so I mostly played with the real online version. 
As a result, I guess you have a real challenge to deal with responsiveness, since you explicitly ask your user to use a desktop or tablet. Even though, I found problems or things to improve . For instance on this screen (again in real life, I could spend much more time on that matter):

<img width="612" alt="Capture d’écran 2023-03-13 à 16 04 58" src="https://user-images.githubusercontent.com/20339167/224748460-b03d436f-c34c-4aa1-af2a-88b907e950e0.png">

- Question mark in the slide nav is behind the arrows
- The slide view could be larger, and the slide list smaller
- In general we could discuss the possibility of hiding the slide list on small devices to make space for the other elements, since the user can still navigate with the main screen (you need to add the function for deleting a slide in it)
- The sidebar with questions could also be smaller, that way the user have more space to write the note

<img width="480" alt="Capture d’écran 2023-03-13 à 16 08 42" src="https://user-images.githubusercontent.com/20339167/224748364-718acee5-b024-491e-b811-c3b3d463af13.png">

- The “Wooclap is currently optimized only for Desktop & tablet” screen appears under 500px, but you could make it appear earlier

