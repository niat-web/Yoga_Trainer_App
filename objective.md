# Yoga_Trainer_App

## Objective
This project implements a basic interactive Yoga Trainer application using HTML, CSS, and JavaScript. The application includes features such as a dark mode toggle, a timer for tracking pose durations, a basic pose tracker, a scroll-to-top button, simple reminder functionality, and placeholder features for personalized training plans and a joke fetching API integration. It primarily focuses on front-end functionality and demonstrates fundamental JavaScript concepts like event handling, DOM manipulation, timers, and asynchronous API calls.

## Output
<iframe src="https://niat-web.github.io/Yoga_Trainer_App/" height="1000" width="300" title="Yoga_Trainer_App"></iframe>

## Project Requirements
**Technologies:** HTML, CSS, JavaScript

## Features to Implement
- Dark mode toggle for improved user experience in different lighting conditions.
- Timer functionality to track the duration of yoga poses.
- Pose tracker to log completed poses (basic example only).

## UI Enhancements
- Implement more visually appealing alerts instead of basic `alert()` calls.
- Improve the styling and layout of the pose tracker.

## Project Tasks & Expected Outcomes
| Task | Expected Outcome |
|------|------------------|
| Implement Dark Mode Toggle | The application's theme should switch between light and dark modes on button click. |
| Create Pose Duration Timer | A timer should count down from a user-specified duration, alerting the user when the time is up. |
| Add Scroll to Top Functionality | A button appears when the user scrolls down and smoothly scrolls the page back to the top on click. |
| Implement Basic Reminder | Display an alert with the set time for a reminder. |
| Fetch Joke From API | Display a joke using the joke api. |

## JavaScript Concepts
| Concept | Implementation |
|---------|----------------|
| Event Handling | Used with `addEventListener` for button clicks (dark mode toggle, timer start, scroll-to-top, reminder, training plan, joke fetch) and scroll events (scroll-to-top). |
| DOM Manipulation | Used to update text content (`textContent`), modify classes (`className`), set attributes (`dataset.theme`), create elements (`createElement`), and append elements (`appendChild`). |
| Timers | `setInterval` is used to create a countdown timer for yoga poses. `clearInterval` is used to stop the timer. |
| Asynchronous JavaScript | `async/await` is used when fetching joke data from an external API.  The `fetch` API is used. |
| Conditional Statements | Used to determine if the page is scrolled and the style of the scroll to top button.  Also used to change the look of the darkmode toggle. |

## API Details
| API | Endpoint | Description |
|-----|----------|-------------|
| Official Joke API | https://official-joke-api.appspot.com/random_joke | Retrieves a random joke in JSON format. Returns setup and punchline. |