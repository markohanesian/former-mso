# Fueled Lead FE Engineer Test - Mark Sarkis Ohanesian

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`

## Overview
Thank you for considering my submission for the frontend web developer position. Below, I've outlined the key aspects of my solution in response to the provided assignment instructions.

## Features Implemented
- Editable Title: The title of the questionnaire is fully editable at the top of the page, allowing users to customize it to their preference.
- Dynamic Question Management: Users can add new questions by clicking the "ADD QUESTION" button. Additionally, any question can be deleted by interacting with the provided UI.
- Single Answer Form Type: As per the requirements, I've implemented a single type of answer form, specifically supporting short answer responses. The type of input is also selectable
- JSON Data Output: Clicking on "SAVE & SHARE" triggers the output of a JSON data structure representing the questionnaire viewable in the browser console for easy access and verification. Multiple questions are outputted as arrays.

## Approach
Given that I had a deadline for this assignment, as well as the requirement to not use a UI library, I decided to focus on basic function before implementing all of the design elements, while ensuring basic accessibility by using semantic markup and checking for keyboard functionality as I go. 

### Question Management
Seeing as how this is a react application and I have hooks at my disposal, I opted to use useState to manage the creation and deletion of questions on the form. In order to enable add and delete new questions, I created a mapping function to add new questions with a corresponding id that I passed into the original component. 

### Styling
With the basic functionality complete, I planned to work on the styling. 

I chose to create styling classes as objects in respective component files and simply call the respective objects in-line for each component.  

I check all the corresponding colors, text, container, etc styling of the elements I have on the page and make sure they match in figma, paying careful attention to spacing between elements in the original design. 

For the text in general, I used a sans-serif font to match the custom fonts as closely as possible in Figma. 

There were a few CSS selectors I had never used before, such as those needed to modify the select element dropwdown arrow - for this I checked MDN docs, stackoverflow, and also asked chatGPT for an optimal solution.

### Responsive design
Initially, the app was not responsive when testing in the mobile phone simulation in the browser. To fix this, I added In this app.css file media queries so that the question container (selected with my specified ID) has a fixed width for desktop sizes that matches Figma.
In tablet and smartphone sizes, the question width is set to auto, allowing the containers to adjust based on the size of their content.

Second, there were issues with the navbar where the form title and the login button were getting cut off - this is not something planned for in the Figma design, and in a real life example I would have a conversation with the product team to understand if the title needs to be as long as the user specifies or a limited amount of characters and/or truncated text, then get the updated design from the design team, then pivot back to engineering. Given the assignment requirements I opted to set a character limit on the title as well as update the title size to be slightly smaller in mobile.

### Accessibility
Once I had the app at near completion phase, I did a browser test for accessibility using the WAVE browser extension, and the result was one error, a missing form label for the short answer text input portion of the question form: 
![Missing label error](/public/error-missing-label.png)

Due to the design in Figma specifying that there would be no corresponding label visible above the input area, I added a descriptive aria-label to the input that would be audible but not visible, thus maintaining the design requirement while eliminating the error.
![Fixed label error](/public/fixed-missing-label.png)

## Final Thoughts
Though the application is technically accessible compliant, I think its critical to be exceptionally accessible if ever possible, and noticed that there was an "alert" to the fact that I don't have a hierarchy of headings on the page. I could not come up with a solution to add headings to the page, since it would not really make sense given the design and user experience - I even checked Google forms and the same alert was flagged by WAVE so I did not take any more action on it.

Overall I am happy with my work and think that in a real-world setting, this would be a great solution.

## Bonus feature: Orderable Comments
I was not able to get this done, I got about 90% to a working solution to order the different questions by creating an additional state to capture the amount of comments in the index and assign a unique id that would increment and decrement, however there was something a little off in my function that kept incrementing the number while the same number of questions remained. With some more time I am confident I would come to a solution, however given the amount of time I chose to make sure that the normal requirments of the project were done as well as possible without going for extra credit. 