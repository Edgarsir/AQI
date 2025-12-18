# 🎉 New Features Guide

## 🎨 Theme Switcher (Top Right Corner)

### Light Mode ☀️
- Click the **Sun icon** to switch to light mode
- Clean, bright interface
- Perfect for daytime viewing

### Dark Mode 🌙
- Click the **Moon icon** to switch to dark mode
- Easy on the eyes
- Great for nighttime viewing
- Reduces eye strain

**Features:**
- ✅ Instant theme switching
- ✅ Saves your preference (remembers next visit)
- ✅ Smooth transitions
- ✅ All elements adapt to theme

---

## 🔔 Notification System

### Enable Notifications
1. Click the **Bell icon** in the control panel
2. Allow notifications when browser prompts
3. Get alerts when AQI is unhealthy (>150)

**Notification Types:**
- 🟢 **Success** - Actions completed
- ⚠️ **Warning** - Important info
- ❌ **Error** - Something went wrong
- ℹ️ **Info** - General updates

**Features:**
- ✅ Browser notifications for high AQI
- ✅ Toast notifications for actions
- ✅ Auto-dismiss after 4 seconds
- ✅ Works in background

---

## 🗺️ Fullscreen Map

### View Map in Fullscreen
1. Click the **Expand icon** 
2. See all locations on a large map
3. Click markers for details
4. Press **X** to close

**Features:**
- ✅ Larger view of all stations
- ✅ Better for detailed analysis
- ✅ All markers visible
- ✅ Interactive popups
- ✅ Easy to close

---

## 📥 Export Data

### Download AQI Data as CSV
1. Click the **Download icon**
2. CSV file downloads automatically
3. Open in Excel, Google Sheets, etc.

**CSV Includes:**
- Location name
- Current AQI value
- Status (Good, Moderate, etc.)
- All pollutant levels (PM2.5, PM10, O₃, NO₂, SO₂, CO)
- Timestamp

**Use Cases:**
- 📊 Create custom charts
- 📈 Track trends over time
- 📝 Generate reports
- 🔬 Data analysis

---

## 🔗 Share Feature

### Share AQI Data
1. Click the **Share icon**
2. Choose sharing method (if supported)
3. Or data is copied to clipboard

**What Gets Shared:**
```
Current AQI in Nagpur: 156 (Unhealthy)
Check live air quality data!
[Your website URL]
```

**Sharing Options:**
- 📱 Native share (mobile)
- 📋 Copy to clipboard (desktop)
- 💬 WhatsApp, Twitter, etc.

---

## 🎯 Control Panel Overview

Located in **top right corner**, below theme switcher:

| Icon | Feature | Action |
|------|---------|--------|
| 🔔 | Notifications | Enable/disable AQI alerts |
| 🔍 | Fullscreen | View map in fullscreen |
| 📥 | Export | Download data as CSV |
| 🔗 | Share | Share AQI information |

---

## 💡 Tips & Tricks

### Theme Switching
- **Keyboard Shortcut**: None yet (coming soon!)
- **Auto Theme**: Based on time of day (coming soon!)
- **Custom Colors**: Edit `style.css` for your colors

### Notifications
- **High AQI Alert**: Automatic when AQI > 150
- **Permission**: Grant once, works forever
- **Disable**: Click bell icon again
- **Browser Settings**: Can be managed in browser

### Fullscreen Map
- **Zoom**: Scroll or pinch to zoom
- **Pan**: Click and drag to move
- **Markers**: Click for station details
- **Exit**: Click X or press Escape

### Export Data
- **Filename**: `nagpur-aqi-YYYY-MM-DD.csv`
- **Format**: Standard CSV (comma-separated)
- **Encoding**: UTF-8
- **Compatible**: Excel, Google Sheets, Numbers

### Share Feature
- **Mobile**: Uses native share sheet
- **Desktop**: Copies to clipboard
- **Custom Message**: Edit in `script.js`
- **URL**: Includes current page URL

---

## 🔧 Customization

### Change Theme Colors

**Light Theme:**
Edit `style.css`:
```css
body {
    background: linear-gradient(to bottom, #f0f2f5 0%, #e8eaf0 100%);
}
```

**Dark Theme:**
Edit `style.css`:
```css
body.dark-theme {
    background: linear-gradient(to bottom, #1a1a2e 0%, #16213e 100%);
}
```

### Notification Threshold
Edit `script.js`:
```javascript
if (avgAQI > 150) {  // Change 150 to your threshold
    // Send notification
}
```

### Auto-Refresh Time
Edit `script.js`:
```javascript
setInterval(fetchAQIData, 30 * 60 * 1000); // 30 minutes
```

---

## 📱 Mobile Experience

All features work perfectly on mobile:

- ✅ **Touch-friendly** buttons
- ✅ **Responsive** layout
- ✅ **Native share** on mobile
- ✅ **Optimized** notifications
- ✅ **Smooth** animations

---

## 🐛 Troubleshooting

### Notifications Not Working
1. Check browser permissions
2. Enable in browser settings
3. Click bell icon to toggle
4. Refresh the page

### Theme Not Saving
1. Check browser allows localStorage
2. Clear browser cache
3. Try incognito mode
4. Check browser console for errors

### Export Not Downloading
1. Check browser download settings
2. Allow downloads from site
3. Check popup blocker
4. Try different browser

### Share Not Working
1. Use HTTPS (required for share API)
2. Try copy to clipboard instead
3. Check browser compatibility
4. Use manual sharing

---

## 🚀 Coming Soon

Future features in development:

- [ ] Historical data charts
- [ ] AQI predictions
- [ ] Weather integration
- [ ] Multiple city comparison
- [ ] Custom alerts
- [ ] Keyboard shortcuts
- [ ] Auto theme (day/night)
- [ ] Widget mode
- [ ] API for developers

---

## 📊 Feature Comparison

| Feature | Light Theme | Dark Theme |
|---------|-------------|------------|
| Visibility | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Eye Strain | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Battery (OLED) | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Daytime | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Nighttime | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎓 Learn More

- **Theme Design**: Check `style.css` lines 1-150
- **Notifications**: Check `script.js` notification functions
- **Export Logic**: Check `script.js` export function
- **Share API**: Check `script.js` share function

---

**Enjoy the new features! 🎉**

Made with ❤️ for Nagpur
