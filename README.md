# Flashcards creator
Link to video demo: [Click here](https://www.linkedin.com/posts/zo%C3%A9-playoust-467b68116_redux-ugcPost-7023653569916493824-Y41t?utm_source=share&utm_medium=member_desktop).

# Table of contents
1. [About The App](#About-The-App)
2. [Technologies](#Technologies)
3. [To Run](#To-Run)
4. [State](#State)
5. [Routes](#Routes)
6. [To Test](#To-Test)
7. [Credits](#Credits)

## About The App
This app aim to create flipable flashcards, with content on both sides. You can store those flashcards by topic. 

## Technologies
I used html, css, react, redux

## To Run

Download or clone the repository 
run `npm install` in the project root
Run `npm start` in the project root and the app will be available on port 3000.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

## Credits

This exercise was setup by [Codecademy](https://www.codecademy.com/)