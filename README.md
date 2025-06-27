Weather Reporter Application
A modern, responsive weather application built as a take-home project for the Software Engineer position at Lanka Software Foundation.
🌤️ Overview
This application displays current weather conditions for Colombo, Sri Lanka (and other cities via search), featuring a clean, modern interface with glassmorphism design principles.
✨ Features
Core Requirements

Current Weather Display: Temperature, humidity, wind speed, and UV index
Colombo Default: Automatically loads weather for Colombo, Sri Lanka
Clean Interface: User-friendly design with clear data presentation
Responsive Design: Works seamlessly across desktop, tablet, and mobile devices

Additional Features

City Search: Search functionality for weather in any city worldwide
5-Day Forecast: Extended weather forecast for better planning
Air Quality Index: Real-time air quality information
Weather Alerts: Severe weather notifications when available
Loading States: Smooth loading indicators during data fetch
Error Handling: Graceful error handling with user-friendly messages
Modern UI: Glassmorphism design with backdrop blur effects
Smooth Animations: Micro-interactions and hover effects

🛠️ Technology Stack

Frontend: React.js with Hooks
Styling: Tailwind CSS
API: WeatherAPI.com
Deployment: [Vercel/Netlify/Other - Update based on your choice]
Version Control: Git & GitHub

🚀 Live Demo
Deployed Application: [Your deployed URL here]
📱 Screenshots
Add screenshots of your application here
🔧 Installation & Setup

Clone the repository
bashgit clone https://github.com/yourusername/weather-reporter-app.git
cd weather-reporter-app

Install dependencies
bashnpm install

Set up environment variables
Create a .env file in the root directory:
envREACT_APP_WEATHER_API_KEY=your_api_key_here

Get your API key

Sign up at WeatherAPI.com
Get your free API key
Add it to your .env file


Run the application
bashnpm start

Open in browser
Navigate to http://localhost:3000

🌐 API Integration
This application uses the WeatherAPI.com service:

Current Weather: /v1/current.json
Forecast: /v1/forecast.json
Features: Real-time weather data, air quality, and weather alerts

📋 Project Requirements Fulfilled
✅ Fetch Weather Data: Current weather for Colombo, Sri Lanka
✅ Display Required Info: Temperature, humidity, wind speed, UV index
✅ Web Interface: Clean, functional HTML interface
✅ Version Control: Git history with meaningful commits
✅ Deployment: Publicly accessible via URL
✅ Secure API Keys: Environment variables implementation
🎨 Design Choices

Modern Glassmorphism: Frosted glass effect with backdrop blur
Dark Theme: Elegant dark color scheme for better visual appeal
Responsive Grid: Mobile-first approach with Tailwind CSS
Weather Icons: Emoji-based icons for universal compatibility
Smooth Animations: CSS transitions for enhanced user experience
Error Boundaries: Robust error handling throughout the application

🔄 Development Process

Planning: Analyzed requirements and designed component structure
Core Implementation: Built basic weather fetching and display
UI Enhancement: Added modern styling and responsive design
Feature Addition: Implemented search, forecast, and air quality
Testing: Tested across different devices and screen sizes
Deployment: Deployed to production with environment variables

📝 Challenges Faced

API Rate Limiting: Implemented efficient caching to minimize API calls
Responsive Design: Ensured consistent experience across all devices
Error Handling: Created comprehensive error states for various scenarios
Performance: Optimized component rendering and data fetching

🚀 Future Enhancements

Weather maps integration
Historical weather data
Weather comparison between cities
Push notifications for weather alerts
Offline support with cached data

📄 License
This project is created for educational and evaluation purposes as part of the Lanka Software Foundation application process.
👨‍💻 Author
[Your Name]
Software Engineer Candidate
📧 [your.email@example.com]
🔗 [Your LinkedIn/Portfolio]

Note: This project was created as a take-home assignment for the Software Engineer position at Lanka Software Foundation. It demonstrates proficiency in modern web development technologies and best practices.
