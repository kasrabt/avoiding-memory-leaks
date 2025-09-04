React Memory Leak Prevention Demo

This project demonstrates best practices for preventing memory leaks in React applications. It provides examples of safe data fetching, interval timers, and event listeners with proper cleanup.

Features

Safe Data Fetching: Uses AbortController to cancel in-progress fetch requests when a component unmounts.

Interval Management: Demonstrates how to properly set up and clear intervals.

Event Listener Cleanup: Shows how to add and remove window event listeners to avoid leaks.

React Strict Mode Compatible: Ensures no warnings appear during development.

How It Works

The project includes a component (ShowComments) that fetches data from an API, updates a timer every second, and listens for window resize events.

All asynchronous operations and event listeners are cleaned up when the component unmounts to prevent memory leaks.
