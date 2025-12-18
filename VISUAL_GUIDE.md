# 🎨 Visual Guide - What You'll See

## Dashboard Layout (Top to Bottom)

### 1. Hero Section
```
┌─────────────────────────────────────────────┐
│                                             │
│              🌍 (animated)                  │
│                                             │
│        Live Air Quality Monitor             │
│          Nagpur, Maharashtra                │
│   Real-time air quality data across city   │
│                                             │
│         ～～～～～～～～～～～～～～～        │
└─────────────────────────────────────────────┘
```
- Purple gradient background
- Floating animated globe icon
- Clean white text
- Wave transition at bottom

### 2. Statistics Cards (3 cards in a row)
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ 💨 City Avg  │  │ 📍 Stations  │  │ 🕐 Updated   │
│              │  │              │  │              │
│     156      │  │      8       │  │   10:30 AM   │
└──────────────┘  └──────────────┘  └──────────────┘
```
- White cards with gradient icons
- Hover effect (lifts up)
- Real-time data display

### 3. Interactive Map Section
```
┌─────────────────────────────────────────────┐
│ 🗺️ Interactive AQI Map      [🔄 Refresh]   │
├─────────────────────────────────────────────┤
│                                             │
│    🟢 50   🟡 85   🟠 120   🔴 156         │
│         (Colored markers on map)            │
│                                             │
│    [OpenStreetMap with Nagpur view]         │
│                                             │
├─────────────────────────────────────────────┤
│ AQI Scale:                                  │
│ 🟢 0-50  🟡 51-100  🟠 101-150  🔴 151-200 │
└─────────────────────────────────────────────┘
```
- Full interactive Leaflet map
- Color-coded markers (green to red)
- Click markers for popups
- Zoom and pan controls
- Legend at bottom

### 4. Location Cards Grid (2-3 columns)
```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ 📍 Sitabuldi     │  │ 📍 Civil Lines   │  │ 📍 Dharampeth    │
│                  │  │                  │  │                  │
│       156        │  │       142        │  │       168        │
│    UNHEALTHY     │  │    UNHEALTHY     │  │    UNHEALTHY     │
│                  │  │                  │  │                  │
│ PM2.5  PM10  O₃  │  │ PM2.5  PM10  O₃  │  │ PM2.5  PM10  O₃  │
│   65    120  15  │  │   58    110  18  │  │   72    135  12  │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```
- Gradient background cards
- Color-coded top border
- Hover effect (lifts up)
- Click to zoom map to location
- Shows 3 main pollutants

### 5. Health Advisory
```
┌─────────────────────────────────────────────┐
│ 💗 Health Advisory                          │
├─────────────────────────────────────────────┤
│ 💡  Everyone may experience health effects. │
│     Limit outdoor activities and wear masks │
│     if going out.                           │
└─────────────────────────────────────────────┘
```
- Light blue background
- Large icon
- Dynamic advice based on AQI
- Easy to read text

### 6. Footer
```
┌─────────────────────────────────────────────┐
│  Data provided by WAQI | Updates every 30m  │
│           Made with ❤️ for Nagpur           │
└─────────────────────────────────────────────┘
```
- Dark background
- White text
- Credits and info

## Color Scheme

### AQI Colors (Standard EPA Scale)
- 🟢 **0-50**: Green (#00e400) - Good
- 🟡 **51-100**: Yellow (#ffaa00) - Moderate
- 🟠 **101-150**: Orange (#ff7e00) - Unhealthy for Sensitive
- 🔴 **151-200**: Red (#ff0000) - Unhealthy
- 🟣 **201-300**: Purple (#8f3f97) - Very Unhealthy
- 🟤 **301+**: Maroon (#7e0023) - Hazardous

### UI Colors
- **Primary Gradient**: Purple to Violet (#667eea → #764ba2)
- **Background**: Light Gray (#f0f2f5)
- **Cards**: White (#ffffff)
- **Text**: Dark Gray (#333333)
- **Shadows**: Subtle black with transparency

## Animations & Effects

### 1. Hero Icon
- Floats up and down continuously
- 3-second animation loop
- Smooth ease-in-out

### 2. Cards
- Hover: Lifts up 5px
- Hover: Shadow increases
- Smooth 0.3s transition

### 3. Refresh Button
- Hover: Lifts up 2px
- Click: Icon spins
- Gradient background

### 4. Map Markers
- Colored circles with AQI number
- White border
- Shadow effect
- Click for popup

### 5. Location Cards
- Hover: Elevation effect
- Click: Zooms map
- Color-coded border

## Responsive Behavior

### Desktop (1400px+)
- 3-column stats grid
- 3-column location cards
- Full-width map (500px height)
- Horizontal legend

### Tablet (768px - 1399px)
- 2-column stats grid
- 2-column location cards
- Full-width map (500px height)
- Horizontal legend

### Mobile (<768px)
- 1-column everything
- Stacked layout
- Map height: 400px
- Vertical legend
- Touch-friendly buttons

## Interactive Elements

### Clickable
1. **Refresh Button** → Fetches new data
2. **Location Cards** → Zooms map to location
3. **Map Markers** → Shows popup with details
4. **Map** → Pan and zoom

### Hover Effects
1. **Stats Cards** → Lifts up
2. **Location Cards** → Lifts up
3. **Refresh Button** → Lifts up, icon rotates
4. **Map Markers** → Cursor changes

## Loading States

### Initial Load
```
┌─────────────────────────────────────────────┐
│              ⭕ (spinning)                   │
│          Loading stations...                │
└─────────────────────────────────────────────┘
```

### Refreshing
```
[🔄 Refreshing...] (button disabled, icon spinning)
```

### Error State
```
┌─────────────────────────────────────────────┐
│  ⚠️ Unable to fetch AQI data.               │
│     Please try again later.                 │
└─────────────────────────────────────────────┘
```

## Map Popup (When clicking marker)
```
┌──────────────┐
│  Sitabuldi   │
│              │
│     156      │
│  UNHEALTHY   │
└──────────────┘
```
- Location name
- Large AQI number (colored)
- Status text (colored)
- White background
- Rounded corners

## Typography

- **Hero Title**: 3rem, Bold
- **Hero Subtitle**: 1.8rem, Regular
- **Section Headers**: 1.5rem, Semi-bold
- **AQI Values**: 2.5rem, Bold
- **Status Text**: 0.9rem, Semi-bold, Uppercase
- **Body Text**: 1rem, Regular
- **Small Text**: 0.85rem, Regular

## Spacing

- **Section Margins**: 30px
- **Card Padding**: 25-30px
- **Grid Gap**: 20px
- **Element Spacing**: 10-15px

## Shadows

- **Cards**: 0 4px 20px rgba(0,0,0,0.08)
- **Hover**: 0 8px 30px rgba(0,0,0,0.12)
- **Buttons**: 0 2px 10px rgba(102,126,234,0.3)

This creates a modern, professional, and user-friendly dashboard! 🎨
