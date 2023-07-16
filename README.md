# Cinema Calc Coding Challenge

### by Hannes Steinel

This is my solution of your coding challenge.

## Run

To run the project you can execute locally the following command:

### `npm start`

To build a releasable project run:

### `npm run build`

## Structure

The overall structure of the code is that all components, assets, models and stores are in separate folders.
Main files like index.js and App.js are on the root folder-level.

I decided in this small project to use plain js and css and not for example **tailwind**.
So i saved all .css files next to the .js files.
The general folder structure is level oriented. So models, application and ui are in seperated folders.

## State

I used [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction) as a state management.
This is a very small and easy to use state management for small project so perfect for this challenge.

## BigNumbers.js

BigNumbers.js is used for the float problem.
The computer is not able to calculate decimal numbers so there are workarounds.
A computer calculates first the base and then the numbers after the point.
BigNumbers.js have a higher precision on calculation big and small numbers.
For financial applications it is necessary to have a precise calculation.

## Design

I created the design of my coding challenge with a large reference to your software, but I tried to use my own touch.

Before coding, I created a design in Figma, so I wouldn't have any big design changes while coding.
Actually I also designed a mobile version. But due to time constraints this was no longer programmable.

**I tried to create a pleasant and open design.**

## Tasks

My tasks were:

1. Define a state management library
2. Define global settings (background color, page padding, )
3. Set up the folder structure
4. Code the header
5. Code main components
6. Bring the components in the layout
7. Implement the state management
8. Do bug fixing
9. Test it
10. Write this file
11. Write the mail for you

