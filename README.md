# 🌍 Live AQI Dashboard - Nagpur City

A beautiful, real-time Air Quality Index (AQI) monitoring dashboard for Nagpur, Maharashtra with interactive maps and multiple monitoring stations.

## ✨ Features

- 🗺️ **Interactive Map** - Leaflet.js powered map showing AQI across Nagpur
- 📍 **Multiple Locations** - Monitor 8+ areas including Sitabuldi, Civil Lines, Dharampeth, Itwari, and more
- 📊 **Detailed Pollutant Levels** - PM2.5, PM10, O₃, NO₂, SO₂, CO for each location
- 🎨 **Color-Coded Display** - Instant visual feedback with AQI-based colors
- 💡 **Smart Health Advice** - Personalized recommendations based on air quality
- 📈 **City Statistics** - Average AQI, station count, and last update time
- 🔄 **Auto-Refresh** - Updates every 30 minutes automatically
- 📱 **Fully Responsive** - Beautiful on desktop, tablet, and mobile
- 🎯 **Click to Focus** - Click any location card to zoom to that area on map

## Setup

1. **Get a free API token:**
   - Visit https://aqicn.org/data-platform/token/
   - Register for a free token
   - Replace `'demo'` in `script.js` with your token:
     ```javascript
     const WAQI_TOKEN = 25cf1c2d1e0634da6d7e742ec9b29cc48e2aa67a;
     ```

2. **Run the application:**
   - Simply open `index.html` in your web browser
   - No server or build process required!

## API Information

This dashboard uses the World Air Quality Index (WAQI) API:
- Free tier available
- Real-time data from monitoring stations
- Covers 100+ countries including India

## AQI Scale

- **0-50**: Good - Air quality is satisfactory
- **51-100**: Moderate - Acceptable air quality
- **101-150**: Unhealthy for Sensitive Groups
- **151-200**: Unhealthy
- **201-300**: Very Unhealthy
- **301+**: Hazardous

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid, Flexbox, and animations
- **JavaScript (ES6+)** - Vanilla JS for performance
- **Leaflet.js** - Interactive maps
- **Font Awesome** - Beautiful icons
- **WAQI API** - Real-time air quality data

## 📍 Monitored Locations

The dashboard tracks air quality across major areas in Nagpur:
- Nagpur Central
- Sitabuldi
- Civil Lines
- Dharampeth
- Sadar
- Itwari
- Kamptee
- Hingna

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

Free to use and modify for personal and commercial projects.
