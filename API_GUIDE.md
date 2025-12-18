# 🔌 API Integration Guide

## Getting Your API Token

1. Visit: https://aqicn.org/data-platform/token/
2. Fill in your details (name, email, purpose)
3. You'll receive a token via email
4. Replace `'demo'` in `script.js` with your token

## API Endpoints Used

### Main Endpoint
```
https://api.waqi.info/feed/{city}/?token={token}
```

### Search for Stations
```
https://api.waqi.info/search/?keyword={keyword}&token={token}
```

### Get by Coordinates
```
https://api.waqi.info/feed/geo:{lat};{lon}/?token={token}
```

## Finding Real Monitoring Stations in Nagpur

To get actual monitoring stations instead of simulated data:

### Method 1: Search API
```javascript
const response = await fetch(
  `https://api.waqi.info/search/?keyword=nagpur&token=${WAQI_TOKEN}`
);
const data = await response.json();
// Returns list of all stations in Nagpur
```

### Method 2: Map Bounds
```javascript
const response = await fetch(
  `https://api.waqi.info/map/bounds/?latlng=20.9,78.8,21.3,79.3&token=${WAQI_TOKEN}`
);
// Returns all stations within the bounding box
```

## Response Format

```json
{
  "status": "ok",
  "data": {
    "aqi": 156,
    "idx": 5847,
    "city": {
      "name": "Nagpur, Maharashtra, India"
    },
    "time": {
      "iso": "2024-12-18T10:00:00+05:30"
    },
    "iaqi": {
      "pm25": { "v": 65 },
      "pm10": { "v": 120 },
      "o3": { "v": 15 },
      "no2": { "v": 25 },
      "so2": { "v": 8 },
      "co": { "v": 0.5 }
    }
  }
}
```

## Upgrading to Real Multi-Station Data

Replace the simulation code in `script.js` with:

```javascript
async function fetchAllStations() {
  try {
    // Search for all Nagpur stations
    const searchResponse = await fetch(
      `https://api.waqi.info/search/?keyword=nagpur&token=${WAQI_TOKEN}`
    );
    const searchData = await searchResponse.json();
    
    if (searchData.status === 'ok') {
      const stations = searchData.data;
      
      // Fetch data for each station
      const stationPromises = stations.map(station => 
        fetch(`https://api.waqi.info/feed/@${station.uid}/?token=${WAQI_TOKEN}`)
          .then(res => res.json())
      );
      
      const stationsData = await Promise.all(stationPromises);
      
      // Process and display
      stationsData.forEach(data => {
        if (data.status === 'ok') {
          const station = {
            aqi: data.data.aqi,
            location: data.data.city.name,
            lat: data.data.city.geo[0],
            lon: data.data.city.geo[1],
            iaqi: data.data.iaqi,
            time: data.data.time
          };
          createMarker(station, station.aqi);
        }
      });
    }
  } catch (error) {
    console.error('Error fetching stations:', error);
  }
}
```

## Rate Limits

- **Free Tier**: 1000 requests per minute
- **Demo Token**: Limited to specific cities
- **Production Token**: Full access to all stations

## Alternative APIs

If you need more data or different features:

1. **OpenWeatherMap Air Pollution API**
   - https://openweathermap.org/api/air-pollution
   - Free tier: 1000 calls/day
   - Provides forecast data

2. **IQAir API**
   - https://www.iqair.com/air-pollution-data-api
   - More detailed data
   - Paid plans available

3. **Government APIs**
   - CPCB (Central Pollution Control Board)
   - State pollution control boards
   - May require special access

## Best Practices

1. **Cache Data**: Store responses to reduce API calls
2. **Error Handling**: Always handle failed requests gracefully
3. **Rate Limiting**: Don't exceed API limits
4. **Fallback**: Have backup data sources
5. **User Feedback**: Show loading states and errors clearly

## Testing

Use the demo token to test:
- Works with major cities
- Limited to ~10 requests per minute
- Good for development and testing

## Production Deployment

Before going live:
1. Get your own API token
2. Test with real data
3. Implement error handling
4. Add data caching
5. Monitor API usage
6. Consider backup data sources
