# ⚡ Quick Reference Card

## 🚀 Getting Started
```bash
# Open the dashboard
Double-click index.html

# Add your background image
Save as: hero-bg.jpg (same folder as index.html)
```

## 🔑 Get API Token
1. Visit: https://aqicn.org/data-platform/token/
2. Open `script.js`
3. Line 2: Replace `'demo'` with your token

## 📁 File Structure
```
your-folder/
├── index.html          ← Main file (open this!)
├── style.css           ← All styling
├── script.js           ← Logic & API
├── hero-bg.jpg         ← Your background image
└── *.md files          ← Documentation
```

## 🎨 Customization Cheat Sheet

### Change Hero Colors
**File:** `style.css` (line ~17)
```css
rgba(102, 126, 234, 0.85)  /* Purple - change 0.85 for transparency */
rgba(118, 75, 162, 0.85)   /* Violet - change 0.85 for transparency */
```

### Add More Locations
**File:** `script.js` (line ~8)
```javascript
{ name: 'Area Name', lat: 21.1458, lon: 79.0882, query: 'nagpur' }
```

### Change Refresh Time
**File:** `script.js` (last line)
```javascript
30 * 60 * 1000  // 30 minutes (change 30 to any number)
```

### Change Map Center
**File:** `script.js` (line ~5)
```javascript
const NAGPUR_CENTER = [21.1458, 79.0882]; // [latitude, longitude]
```

## 🎯 Key Features

| Feature | How to Use |
|---------|------------|
| **Refresh Data** | Click "Refresh" button |
| **Zoom Map** | Click any location card |
| **View Details** | Click map markers |
| **Auto-Update** | Happens every 30 min |

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Map not showing | Check internet connection |
| No data | Verify API token |
| Image not showing | Check filename: `hero-bg.jpg` |
| Looks broken | Clear cache (Ctrl+F5) |

## 📊 AQI Color Scale

| AQI | Color | Status |
|-----|-------|--------|
| 0-50 | 🟢 Green | Good |
| 51-100 | 🟡 Yellow | Moderate |
| 101-150 | 🟠 Orange | Unhealthy (Sensitive) |
| 151-200 | 🔴 Red | Unhealthy |
| 201-300 | 🟣 Purple | Very Unhealthy |
| 301+ | 🟤 Maroon | Hazardous |

## 🔗 Important URLs

- **API Token**: https://aqicn.org/data-platform/token/
- **Leaflet Docs**: https://leafletjs.com/
- **Font Awesome**: https://fontawesome.com/icons

## 📱 Browser Support

✅ Chrome, Firefox, Safari, Edge (latest)
✅ Mobile browsers (iOS, Android)
✅ Tablets and iPads

## 🎓 Documentation Files

| File | Purpose |
|------|---------|
| `START_HERE.md` | Begin here! |
| `QUICKSTART.md` | 5-min setup |
| `API_GUIDE.md` | API details |
| `BACKGROUND_SETUP.md` | Add image |
| `FEATURES.md` | Feature list |
| `VISUAL_GUIDE.md` | UI/UX info |

## 💡 Pro Tips

- 💡 Works immediately with demo token
- 💡 Click location cards to zoom map
- 💡 Mobile-friendly design
- 💡 Auto-refreshes every 30 minutes
- 💡 No installation needed!

## 🚀 Deploy Online (Optional)

### GitHub Pages
```bash
1. Create GitHub repo
2. Upload all files
3. Enable Pages in settings
```

### Netlify
```bash
1. Drag folder to netlify.com
2. Get instant URL
```

### Local Server
```bash
python -m http.server 8000
# Open: http://localhost:8000
```

---

**Need More Help?**
- Check START_HERE.md
- Read QUICKSTART.md
- Open browser console (F12) for errors

**Made with ❤️ for Nagpur** 🌍
