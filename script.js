// script.js
 
 // Dark Mode Toggle
 const darkModeToggle = document.getElementById('darkModeToggle');
 const body = document.body;
 
 darkModeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
  const isDarkMode = body.dataset.theme === 'dark';
  darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i> Light Mode' :
   '<i class="fas fa-moon"></i> Dark Mode';
 });
 
 // Timer Functionality
 const poseDurationInput = document.getElementById('poseDuration');
 const startTimerButton = document.getElementById('startTimer');
 const timerDisplay = document.getElementById('time');
 let timerInterval;
 let timeLeft;
 
 startTimerButton.addEventListener('click', () => {
  clearInterval(timerInterval);
  timeLeft = parseInt(poseDurationInput.value);
  timerDisplay.textContent = timeLeft;
 
  timerInterval = setInterval(() => {
   timeLeft--;
   timerDisplay.textContent = timeLeft;
 
   if (timeLeft <= 0) {
    clearInterval(timerInterval);
    alert('Time is up!');
   }
  }, 1000);
 });
 
 // Pose Tracker - Example (Needs more robust storage and interaction)
 const poseList = document.getElementById('poseList');
 //Adding a test pose
 // Create a new list item
 const listItem = document.createElement('li');
 listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
 listItem.textContent = 'Test Pose'; // Replace with actual pose name
 
 // Create a badge
 const badge = document.createElement('span');
 badge.className = 'badge badge-primary badge-pill';
 badge.textContent = '1 time'; // Replace with actual count
 
 // Append the badge to the list item
 listItem.appendChild(badge);
 
 // Append the list item to the poseList
 poseList.appendChild(listItem);
 
 // Scroll to Top Button
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");
 
 window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
   scrollToTopBtn.style.display = "flex";
  } else {
   scrollToTopBtn.style.display = "none";
  }
 };
 
 scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
   top: 0,
   behavior: 'smooth'
  });
 });
 
 // Reminder Functionality (Basic - needs service worker for true push notifications)
 const setReminderButton = document.getElementById('setReminder');
 const reminderTimeInput = document.getElementById('reminderTime');
 
 setReminderButton.addEventListener('click', () => {
  const reminderTime = reminderTimeInput.value;
  if (reminderTime) {
   alert(`Reminder set for ${reminderTime}`); // Replace with a more robust notification
  } else {
   alert('Please select a reminder time.');
  }
 });
 
 // Personalized Training Plans (Basic - needs logic to generate plans)
 const getPlanButton = document.getElementById('getPlan');
 const userGoalSelect = document.getElementById('userGoal');
 
 getPlanButton.addEventListener('click', () => {
  const userGoal = userGoalSelect.value;
  alert(`Generating training plan for ${userGoal}`); // Replace with actual plan generation
 });
 
 // Fetch API Data Joke - Start
 const fetchJokeButton = document.getElementById('fetchJoke');
 const jokeDisplay = document.getElementById('jokeDisplay');
 const jokeContainer = document.getElementById('jokeContainer');
 
 // Utility function to display a message
 function displayMessage(message, isError = false) {
  jokeDisplay.textContent = message;
  jokeDisplay.className = isError ? 'error-message' : 'success-message';
 }
 
 async function fetchData(url) {
  try {
   const testResponse = await fetch(url, {
    method: 'HEAD',
    mode: 'cors'
   });
   if (testResponse.ok) {
    // API is directly accessible
    console.log('API is directly accessible.');
    const response = await fetch(url);
    if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
   } else {
    // CORS issue detected, use AllOrigins
    console.warn('CORS issue detected, using AllOrigins proxy.');
    const proxyUrl = `https://api.allorigins.win/raw?url=${url}`;
    const response = await fetch(proxyUrl);
    if (!response.ok) {
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    const text = await response.text();
    try {
     return JSON.parse(text);
    } catch (e) {
     throw new Error('Failed to parse JSON from proxy response.');
    }
   }
  } catch (error) {
   console.error('Fetch error:', error);
   throw error;
  }
 }
 
 async function getJoke() {
  displayMessage('Loading...');
  try {
   const jokeData = await fetchData('https://official-joke-api.appspot.com/random_joke');
   const setup = jokeData.setup;
   const punchline = jokeData.punchline;
   displayJoke(setup, punchline);
  } catch (error) {
   displayMessage(`Failed to fetch joke: ${error}`, true);
  }
 }
 
 function displayJoke(setup, punchline) {
  const jokeText = `Setup: ${setup}\nPunchline: ${punchline}`;
  jokeDisplay.textContent = jokeText;
 }
 
 fetchJokeButton.addEventListener('click', getJoke);
 // Fetch API Data Joke - End