# 🚀 Quick Start Guide

## Instant Setup (30 seconds)

1. **Open the dashboard**
   ```
   Simply double-click index.html
   ```
   That's it! The dashboard works immediately with demo data.

2. **What you'll see**
   - Beautiful hero section with animated icon
   - City statistics (Average AQI, Station count, Last update)
   - Interactive map with colored markers
   - 8 location cards showing AQI for different areas
   - Health advisory based on air quality
   - AQI legend with color scale

## For Production Use (5 minutes)

### Step 1: Get API Token
1. Go to: https://aqicn.org/data-platform/token/
2. Fill the form with:
   - Your name
   - Email address
   - Purpose: "Personal AQI Dashboard"
3. Check your email for the token

### Step 2: Update Token
1. Open `script.js` in any text editor
2. Find line 2:
   ```javascript
   const WAQI_TOKEN = 'demo';
   ```
3. Replace with your token:
   ```javascript
   const WAQI_TOKEN = 'your_actual_token_here';
   ```
4. Save the file

### Step 3: Test
1. Refresh the page in your browser
2. You should see real-time data!

## Customization Options

### Change City
Edit `script.js` line 5-6:
```javascript
const NAGPUR_CENTER = [21.1458, 79.0882]; // [latitude, longitude]
```

### Add More Locations
Edit the `NAGPUR_LOCATIONS` array in `script.js`:
```javascript
const NAGPUR_LOCATIONS = [
    { name: 'Your Area', lat: 21.1458, lon: 79.0882, query: 'nagpur' },
    // Add more locations here
];
```

### Change Colors
Edit `style.css` - look for the hero gradient:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Adjust Auto-Refresh Time
Edit last line of `script.js`:
```javascript
setInterval(fetchAQIData, 30 * 60 * 1000); // 30 minutes in milliseconds
```

## Troubleshooting

### Map not showing?
- Check internet connection (map tiles load from OpenStreetMap)
- Check browser console for errors (F12)

### No data loading?
- Verify API token is correct
- Check if you've exceeded rate limits
- Try the demo token first

### Markers not appearing?
- Wait a few seconds for data to load
- Check browser console for API errors
- Verify coordinates are correct

### Styling looks broken?
- Ensure all CSS files are loaded
- Check Font Awesome CDN is accessible
- Clear browser cache (Ctrl+F5)

## Browser Requirements

- Modern browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Internet connection for:
  - Map tiles
  - Font Awesome icons
  - Leaflet.js library
  - API data

## File Structure

```
nagpur-aqi-dashboard/
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript logic
├── README.md           # Project documentation
├── QUICKSTART.md       # This file
├── API_GUIDE.md        # API integration details
└── FEATURES.md         # Feature descriptions
```

## Next Steps

1. ✅ Get it running with demo token
2. ✅ Get your own API token
3. ✅ Customize colors and locations
4. 📱 Test on mobile devices
5. 🚀 Deploy to web hosting (optional)

## Deployment Options

### Option 1: GitHub Pages (Free)
1. Create GitHub repository
2. Upload all files
3. Enable GitHub Pages in settings
4. Access at: `https://yourusername.github.io/repo-name`

### Option 2: Netlify (Free)
1. Drag and drop folder to Netlify
2. Get instant URL
3. Auto-deploys on updates

### Option 3: Local Network
1. Use Python: `python -m http.server 8000`
2. Access at: `http://localhost:8000`
3. Share on local network

## Support

- Check API_GUIDE.md for API details
- Check FEATURES.md for feature list
- Open browser console (F12) for errors
- Verify API token is valid

## Tips

- 💡 Click location cards to zoom map to that area
- 💡 Click map markers for detailed popups
- 💡 Use refresh button to get latest data
- 💡 Works offline after initial load (cached map tiles)
- 💡 Mobile-friendly - works great on phones!

Enjoy monitoring Nagpur's air quality! 🌍
