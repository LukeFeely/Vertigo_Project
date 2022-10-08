# Vertigo_Project

This project was created for the Software Engineering Module in Trinity College. The aim of the project was to create a mobile app which could help physio patients suffering from inner ear damage or vertigo. The user can log-in and they will be shown the exercises which they have been prescribed by the physio along with instructions and a demo video. The game then uses the front camera to track the user's head movements which controls the car on the road, the user must turn their head in a set rhythm to keep the car on the road and complete the exercise.

Installation Instructions:
  -open terminal
  -change directory to VertigoUI
  -run the command "npm install"
  -then run "npm start"
  -then scan the qr code using the expo app
  -Once you have run npm install once, you don't have to run it ever again
  -To create a screen, make a new .js file, and follow the skeleton of either login or welcome.
  -To add the screen to the app, import it to app.js at the top and down in the screen stack cpy and paste  one of the 2 screen stacks and just replace the name of it so that it is now a new screen in the stack navigator.

--The Game--
You will need to install matter.js and react-native-game-engine via npm install into your projects to get the dependencies needed.
the car and road file are the objects of the game. Car is what we will move via head movements. The road is a sine wave so it loops in sync as it is trimmed at the peak amplitude.

The movement files is what dictates how the entities are updated between frames.

The game file is what combines all the files. It creates a world for the game engine to render. The game engine then renders the entities in the world and imports the "systems"(the movement functions and rules the entities obey like gravity or standard movement).
