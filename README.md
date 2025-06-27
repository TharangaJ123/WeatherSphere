Here's an updated `README.md` file with your hosted link included and some additional refinements:

```markdown
# 🌤️ WeatherSphere

A modern weather application with real-time forecasts, air quality data, and beautiful visualizations. Built with React and Tailwind CSS.

[![Live Demo](https://img.shields.io/badge/Live_Demo-WeatherSphere-blue?style=for-the-badge&logo=vercel)](https://weatherspherebytharanga.vercel.app/)

![WeatherSphere Screenshot](https://example.com/screenshot.jpg) <!-- Add your screenshot URL here -->

## ✨ Features

### Core Features
- 🌡️ Real-time temperature, humidity, and wind data
- 🏙️ Default location (Colombo, Sri Lanka) with global city search
- 📅 5-day interactive forecast
- 🌬️ Air quality index with health recommendations
- ⚠️ Severe weather alerts system
- 🌈 Dynamic UI theming based on current weather

### Enhanced Features
- 🖥️ Glassmorphism design with backdrop filters
- 📱 Fully responsive (mobile, tablet, desktop)
- 🔄 Smooth animations with Framer Motion
- ⚡ Optimized API calls with caching
- 🛡️ Comprehensive error handling
- 🌙 Automatic dark/light mode

## 🛠️ Technology Stack

| Category        | Technologies                          |
|-----------------|---------------------------------------|
| Frontend        | React 18, Vite                        |
| Styling         | Tailwind CSS 3, PostCSS               |
| State Management| React Hooks, Context API              |
| API             | WeatherAPI.com                        |
| Deployment      | Vercel                                |
| Version Control | Git, GitHub                           |

## 🚀 Live Deployment

➡️ **[https://weatherspherebytharanga.vercel.app/](https://weatherspherebytharanga.vercel.app/)**

## 📸 Application Preview

| Desktop View | Mobile View | 
|--------------|-------------|
| ![Desktop](screenshots/desktop.jpg) | ![Mobile](screenshots/mobile.jpg) |

## 🔧 Local Development

### Requirements
- Node.js ≥ v16.14
- npm ≥ v8.5
- WeatherAPI.com account (free tier available)

### Setup

1. Clone repository:
   ```bash
   git clone https://github.com/yourusername/weathersphere.git
   cd weathersphere
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment:
   ```bash
   cp .env.example .env
   ```
   Add your WeatherAPI key to `.env`

4. Start development server:
   ```bash
   npm run dev
   ```

5. Open in browser:
   ```
   http://localhost:5173
   ```

## 📜 Documentation

### API Usage
The application uses these WeatherAPI endpoints:
- Current weather: `/current.json`
- Forecast: `/forecast.json`
- Air quality: Included in current weather response
- Alerts: Included in forecast response

### Environment Variables
```env
VITE_WEATHER_API_KEY=your_api_key_here
VITE_BASE_API_URL=https://api.weatherapi.com/v1
```

## 🏗️ Project Architecture

```
src/
├── assets/            # SVGs, images
├── components/        # Reusable components
│   ├── core/         # Basic UI elements
│   ├── weather/      # Weather-specific components
│   └── layout/       # Layout components
├── contexts/         # React contexts
├── hooks/            # Custom hooks
├── styles/           # Global styles
├── utils/            # Helper functions
├── App.jsx           # Root component
└── main.jsx          # Entry point
```

## 📌 Key Implementation Details

- **Dynamic Theming**: UI colors adapt to weather conditions
- **Performance**: Memoized components and efficient API calls
- **Accessibility**: WCAG 2.1 compliant components
- **Error Boundaries**: Graceful degradation on API failures
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 📈 Future Improvements

- [ ] Add weather radar maps
- [ ] Implement user location detection
- [ ] Add temperature unit switching (°C/°F)
- [ ] Include historical weather data
- [ ] Develop PWA version

```

Key improvements in this version:
1. Added your live Vercel link with a badge
2. Improved the feature categorization
3. Added technology stack table
4. Better organized the project structure section
5. Added implementation details section
6. Included future improvements roadmap
7. Made the documentation more comprehensive

Remember to:
1. Replace placeholder image URLs with your actual screenshots
2. Update the GitHub repository link
3. Add your personal information in the Author section
4. Add any additional credits or acknowledgments if needed
