const { app, BrowserWindow } = require('electron');

app.on('ready', () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadFile('index.html');
});

document.addEventListener('DOMContentLoaded', () => {
  // Your code that interacts with the DOM (e.g., creating event listeners, manipulating elements) goes here
});