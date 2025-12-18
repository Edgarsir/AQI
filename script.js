// WAQI API Token - Get your free token from https://aqicn.org/data-platform/token/
const WAQI_TOKEN = 'demo'; // Replace with your token

// Nagpur coordinates (default center)
const NAGPUR_CENTER = [21.1458, 79.0882];
const DEFAULT_ZOOM = 12;

// Comprehensive areas in Nagpur to monitor
const NAGPUR_LOCATIONS = [
    // Central Nagpur
    { name: 'Sitabuldi', lat: 21.1466, lon: 79.0882, query: 'nagpur' },
    { name: 'Civil Lines', lat: 21.1498, lon: 79.0806, query: 'nagpur' },
    { name: 'Dharampeth', lat: 21.1389, lon: 79.0883, query: 'nagpur' },
    { name: 'Sadar', lat: 21.1458, lon: 79.0882, query: 'nagpur' },
    { name: 'Itwari', lat: 21.1307, lon: 79.0974, query: 'nagpur' },
    
    // North Nagpur
    { name: 'Kamptee', lat: 21.2219, lon: 79.1961, query: 'nagpur' },
    { name: 'Wadi', lat: 21.1850, lon: 79.0500, query: 'nagpur' },
    { name: 'Kalamna', lat: 21.1650, lon: 79.1100, query: 'nagpur' },
    { name: 'Pratap Nagar', lat: 21.1750, lon: 79.0650, query: 'nagpur' },
    
    // South Nagpur
    { name: 'Hingna', lat: 21.0800, lon: 78.9500, query: 'nagpur' },
    { name: 'Manewada', lat: 21.0950, lon: 79.0700, query: 'nagpur' },
    { name: 'Koradi', lat: 21.2500, lon: 79.1000, query: 'nagpur' },
    
    // East Nagpur
    { name: 'Laxmi Nagar', lat: 21.1400, lon: 79.1200, query: 'nagpur' },
    { name: 'Shankar Nagar', lat: 21.1350, lon: 79.1050, query: 'nagpur' },
    { name: 'Gandhibagh', lat: 21.1500, lon: 79.1000, query: 'nagpur' },
    { name: 'Mominpura', lat: 21.1550, lon: 79.0950, query: 'nagpur' },
    
    // West Nagpur
    { name: 'Dhantoli', lat: 21.1350, lon: 79.0700, query: 'nagpur' },
    { name: 'Ramdaspeth', lat: 21.1400, lon: 79.0650, query: 'nagpur' },
    { name: 'Bajaj Nagar', lat: 21.1300, lon: 79.0500, query: 'nagpur' },
    { name: 'Jaripatka', lat: 21.1200, lon: 79.1100, query: 'nagpur' },
    
    // Industrial Areas
    { name: 'MIDC Hingna', lat: 21.0700, lon: 78.9300, query: 'nagpur' },
    { name: 'Butibori', lat: 21.2200, lon: 79.0300, query: 'nagpur' },
    { name: 'Kalmeshwar', lat: 21.2300, lon: 78.9200, query: 'nagpur' },
    
    // Outer Areas
    { name: 'Umred', lat: 20.8500, lon: 79.3200, query: 'nagpur' },
    { name: 'Khapa', lat: 21.3000, lon: 79.1500, query: 'nagpur' },
    { name: 'Nara', lat: 21.0500, lon: 79.1800, query: 'nagpur' }
];

let map;
let markers = [];
let stationsData = [];

// Initialize map
function initMap() {
    map = L.map('map').setView(NAGPUR_CENTER, DEFAULT_ZOOM);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Populate location dropdown
    populateLocationDropdown();
}

// Reset map to Nagpur center
function resetMapView() {
    if (map) {
        map.setView(NAGPUR_CENTER, DEFAULT_ZOOM);
    }
}

// Populate location dropdown
function populateLocationDropdown() {
    const selector = document.getElementById('locationSelector');
    NAGPUR_LOCATIONS.forEach((location, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = location.name;
        selector.appendChild(option);
    });
}

// Get AQI color
function getAQIColor(aqi) {
    if (aqi <= 50) return '#00e400';
    if (aqi <= 100) return '#ffaa00';
    if (aqi <= 150) return '#ff7e00';
    if (aqi <= 200) return '#ff0000';
    if (aqi <= 300) return '#8f3f97';
    return '#7e0023';
}

// Get AQI info
function getAQIInfo(aqi) {
    if (aqi <= 50) {
        return {
            category: 'Good',
            class: 'aqi-good',
            advice: '🌟 Air quality is excellent! Perfect day for outdoor activities. Enjoy the fresh air!'
        };
    } else if (aqi <= 100) {
        return {
            category: 'Moderate',
            class: 'aqi-moderate',
            advice: '😊 Air quality is acceptable. Most people can enjoy outdoor activities normally.'
        };
    } else if (aqi <= 150) {
        return {
            category: 'Unhealthy for Sensitive Groups',
            class: 'aqi-unhealthy-sensitive',
            advice: '⚠️ Sensitive groups should limit prolonged outdoor activities. General public can continue normal activities.'
        };
    } else if (aqi <= 200) {
        return {
            category: 'Unhealthy',
            class: 'aqi-unhealthy',
            advice: '🚨 Everyone may experience health effects. Limit outdoor activities and wear masks if going out.'
        };
    } else if (aqi <= 300) {
        return {
            category: 'Very Unhealthy',
            class: 'aqi-very-unhealthy',
            advice: '⛔ Health alert! Avoid outdoor activities. Keep windows closed and use air purifiers indoors.'
        };
    } else {
        return {
            category: 'Hazardous',
            class: 'aqi-hazardous',
            advice: '☠️ Emergency conditions! Stay indoors. Avoid all outdoor activities. Use N95 masks if you must go out.'
        };
    }
}

// Create marker for location
function createMarker(location, aqi) {
    const color = getAQIColor(aqi);
    const aqiInfo = getAQIInfo(aqi);
    
    const icon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="
            background: ${color};
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: bold;
            font-size: 16px;
            border: 4px solid white;
            box-shadow: 0 3px 12px rgba(0,0,0,0.4);
            font-family: 'Segoe UI', sans-serif;
        ">${aqi}</div>`,
        iconSize: [45, 45],
        iconAnchor: [22, 22]
    });
    
    const marker = L.marker([location.lat, location.lon], { icon }).addTo(map);
    
    const popupContent = `
        <div class="popup-content">
            <div class="popup-location">${location.name}</div>
            <div class="popup-aqi" style="color: ${color}">${aqi}</div>
            <div class="popup-status" style="color: ${color}">${aqiInfo.category}</div>
        </div>
    `;
    
    marker.bindPopup(popupContent);
    markers.push(marker);
}

// Fetch AQI data for Nagpur
async function fetchAQIData() {
    try {
        const response = await fetch(`https://api.waqi.info/feed/nagpur/?token=${WAQI_TOKEN}`);
        const data = await response.json();
        
        if (data.status === 'ok') {
            const mainData = {
                aqi: data.data.aqi,
                location: 'Nagpur Central',
                lat: NAGPUR_CENTER[0],
                lon: NAGPUR_CENTER[1],
                iaqi: data.data.iaqi,
                time: data.data.time
            };
            
            // Clear existing markers
            markers.forEach(marker => map.removeLayer(marker));
            markers = [];
            
            // Add main station
            stationsData = [mainData];
            createMarker(mainData, mainData.aqi);
            
            // Simulate data for other locations (in real scenario, you'd fetch from multiple stations)
            // For demo, we'll create variations of the main AQI
            NAGPUR_LOCATIONS.slice(1).forEach((loc, index) => {
                const variation = Math.floor(Math.random() * 30) - 15; // ±15 variation
                const simulatedAQI = Math.max(0, mainData.aqi + variation);
                const locationData = {
                    aqi: simulatedAQI,
                    location: loc.name,
                    lat: loc.lat,
                    lon: loc.lon,
                    iaqi: mainData.iaqi,
                    time: mainData.time
                };
                stationsData.push(locationData);
                createMarker(locationData, simulatedAQI);
            });
            
            updateUI();
        }
    } catch (error) {
        console.error('Error fetching AQI data:', error);
        showError();
    }
}

// Pagination variables
let displayedStations = 6; // Show 6 stations initially on mobile
const stationsPerLoad = 6;

// Update UI with data
function updateUI() {
    if (stationsData.length === 0) return;
    
    // Calculate average AQI
    const avgAQI = Math.round(
        stationsData.reduce((sum, station) => sum + station.aqi, 0) / stationsData.length
    );
    
    // Update stats
    document.getElementById('avgAQI').textContent = avgAQI;
    document.getElementById('stationCount').textContent = stationsData.length;
    
    const lastUpdate = new Date(stationsData[0].time.iso);
    document.getElementById('lastUpdate').textContent = lastUpdate.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    // Update health advisory
    const aqiInfo = getAQIInfo(avgAQI);
    document.getElementById('healthAdvice').textContent = aqiInfo.advice;
    
    // Check for AQI alerts
    checkAQIAlert(avgAQI);
    
    // Render locations
    renderLocations();
}

// Render locations with pagination
function renderLocations(showAll = false) {
    const locationsGrid = document.getElementById('locationsGrid');
    const showMoreContainer = document.getElementById('showMoreContainer');
    const isMobile = window.innerWidth <= 768;
    
    locationsGrid.innerHTML = '';
    
    // Determine how many stations to show
    const stationsToShow = (isMobile && !showAll) ? displayedStations : stationsData.length;
    
    stationsData.slice(0, stationsToShow).forEach(station => {
        const aqiInfo = getAQIInfo(station.aqi);
        const color = getAQIColor(station.aqi);
        
        const card = document.createElement('div');
        card.className = 'location-card';
        card.style.setProperty('--aqi-color', color);
        
        card.innerHTML = `
            <div class="location-header">
                <div class="location-name">
                    <i class="fas fa-map-marker-alt" style="color: ${color}"></i>
                    ${station.location}
                </div>
                <div class="location-aqi">${station.aqi}</div>
            </div>
            <div class="location-status">${aqiInfo.category}</div>
            <div class="location-details">
                <div class="detail-item">
                    <div class="detail-label">PM2.5</div>
                    <div class="detail-value">${station.iaqi.pm25?.v || 'N/A'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">PM10</div>
                    <div class="detail-value">${station.iaqi.pm10?.v || 'N/A'}</div>
                </div>
                <div class="detail-item">
                    <div class="detail-label">O₃</div>
                    <div class="detail-value">${station.iaqi.o3?.v || 'N/A'}</div>
                </div>
            </div>
        `;
        
        card.addEventListener('click', () => {
            map.setView([station.lat, station.lon], 14);
            const marker = markers.find(m => 
                m.getLatLng().lat === station.lat && 
                m.getLatLng().lng === station.lon
            );
            if (marker) marker.openPopup();
        });
        
        locationsGrid.appendChild(card);
    });
    
    // Show/hide "Show More" button
    if (isMobile && stationsData.length > displayedStations) {
        showMoreContainer.style.display = 'block';
        const btn = document.getElementById('showMoreBtn');
        const remaining = stationsData.length - stationsToShow;
        
        if (showAll || stationsToShow >= stationsData.length) {
            btn.querySelector('span:first-of-type').textContent = 'Show Less';
            btn.querySelector('.station-count').textContent = '';
            btn.classList.add('expanded');
        } else {
            btn.querySelector('span:first-of-type').textContent = 'Show More Stations';
            btn.querySelector('.station-count').textContent = `+${remaining}`;
            btn.classList.remove('expanded');
        }
    } else {
        showMoreContainer.style.display = 'none';
    }
}

// Show More button handler
document.getElementById('showMoreBtn').addEventListener('click', () => {
    const btn = document.getElementById('showMoreBtn');
    const isExpanded = btn.classList.contains('expanded');
    
    if (isExpanded) {
        // Show less - reset to initial count
        displayedStations = 6;
        renderLocations(false);
        // Scroll to stations section
        document.getElementById('stations').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // Show more
        displayedStations += stationsPerLoad;
        if (displayedStations >= stationsData.length) {
            renderLocations(true);
        } else {
            renderLocations(false);
        }
    }
});

// Re-render on window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        renderLocations(displayedStations >= stationsData.length);
    }, 250);
});

// Show error
function showError() {
    const locationsGrid = document.getElementById('locationsGrid');
    locationsGrid.innerHTML = `
        <div class="loading-locations">
            <p style="color: #d32f2f;">⚠️ Unable to fetch AQI data. Please try again later.</p>
        </div>
    `;
}

// Refresh button
document.getElementById('refreshBtn').addEventListener('click', () => {
    const btn = document.getElementById('refreshBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-sync-alt fa-spin"></i> Refreshing...';
    
    fetchAQIData().finally(() => {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
    });
});

// Notification System
function showNotification(title, message, type = 'success') {
    const toast = document.getElementById('notificationToast');
    const icon = document.getElementById('notificationIcon');
    const titleEl = document.getElementById('notificationTitle');
    const messageEl = document.getElementById('notificationMessage');
    
    // Set icon based on type
    const icons = {
        success: '✅',
        warning: '⚠️',
        error: '❌',
        info: 'ℹ️'
    };
    
    icon.textContent = icons[type] || icons.info;
    titleEl.textContent = title;
    messageEl.textContent = message;
    
    // Remove previous classes and add new one
    toast.className = `notification-toast ${type} show`;
    
    // Auto hide after 4 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 4000);
}

// Theme Switcher
const lightThemeBtn = document.getElementById('lightTheme');
const darkThemeBtn = document.getElementById('darkTheme');

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    darkThemeBtn.classList.add('active');
} else {
    lightThemeBtn.classList.add('active');
}

// Light theme
lightThemeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    lightThemeBtn.classList.add('active');
    darkThemeBtn.classList.remove('active');
    showNotification('Light Mode', 'Theme changed to light mode', 'success');
});

// Dark theme
darkThemeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    darkThemeBtn.classList.add('active');
    lightThemeBtn.classList.remove('active');
    showNotification('Dark Mode', 'Theme changed to dark mode', 'success');
});

// Burger Menu
const burgerBtn = document.getElementById('burgerBtn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const closeSidebar = document.getElementById('closeSidebar');

burgerBtn.addEventListener('click', () => {
    sidebarMenu.classList.add('active');
    sidebarOverlay.classList.add('active');
});

closeSidebar.addEventListener('click', () => {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

sidebarOverlay.addEventListener('click', () => {
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Notification Button
const notificationBtn = document.getElementById('notificationBtn');
const notificationStatus = document.getElementById('notificationStatus');
let notificationsEnabled = localStorage.getItem('notifications') === 'true';

if (notificationsEnabled) {
    notificationBtn.classList.add('active');
    notificationStatus.classList.add('active');
}

notificationBtn.addEventListener('click', async () => {
    if (!('Notification' in window)) {
        showNotification('Not Supported', 'Notifications not supported in this browser', 'error');
        return;
    }
    
    if (Notification.permission === 'granted') {
        notificationsEnabled = !notificationsEnabled;
        localStorage.setItem('notifications', notificationsEnabled);
        notificationBtn.classList.toggle('active');
        notificationStatus.classList.toggle('active');
        
        if (notificationsEnabled) {
            showNotification('Notifications Enabled', 'You will receive AQI alerts', 'success');
            new Notification('AQI Monitor', {
                body: 'Notifications enabled for Nagpur AQI updates',
                icon: '🌍'
            });
        } else {
            showNotification('Notifications Disabled', 'AQI alerts turned off', 'info');
        }
    } else if (Notification.permission !== 'denied') {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            notificationsEnabled = true;
            localStorage.setItem('notifications', 'true');
            notificationBtn.classList.add('active');
            notificationStatus.classList.add('active');
            showNotification('Notifications Enabled', 'You will receive AQI alerts', 'success');
        }
    } else {
        showNotification('Permission Denied', 'Please enable notifications in browser settings', 'error');
    }
    
    // Close sidebar after action
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
});

// Fullscreen Map
const fullscreenBtn = document.getElementById('fullscreenBtn');
const fullscreenModal = document.getElementById('fullscreenModal');
const closeFullscreen = document.getElementById('closeFullscreen');
let fullscreenMap;

fullscreenBtn.addEventListener('click', () => {
    // Close sidebar
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    
    fullscreenModal.classList.add('active');
    
    // Initialize fullscreen map
    if (!fullscreenMap) {
        fullscreenMap = L.map('fullscreenMap').setView(NAGPUR_CENTER, 12);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(fullscreenMap);
        
        // Add all markers to fullscreen map
        stationsData.forEach(station => {
            const color = getAQIColor(station.aqi);
            const aqiInfo = getAQIInfo(station.aqi);
            
            const icon = L.divIcon({
                className: 'custom-marker',
                html: `<div style="
                    background: ${color};
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: white;
                    font-weight: bold;
                    font-size: 16px;
                    border: 4px solid white;
                    box-shadow: 0 3px 15px rgba(0,0,0,0.4);
                ">${station.aqi}</div>`,
                iconSize: [50, 50],
                iconAnchor: [25, 25]
            });
            
            const marker = L.marker([station.lat, station.lon], { icon }).addTo(fullscreenMap);
            
            const popupContent = `
                <div class="popup-content">
                    <div class="popup-location">${station.location}</div>
                    <div class="popup-aqi" style="color: ${color}">${station.aqi}</div>
                    <div class="popup-status" style="color: ${color}">${aqiInfo.category}</div>
                </div>
            `;
            marker.bindPopup(popupContent);
        });
    }
    
    setTimeout(() => fullscreenMap.invalidateSize(), 100);
    showNotification('Fullscreen Map', 'Viewing map in fullscreen mode', 'info');
});

closeFullscreen.addEventListener('click', () => {
    fullscreenModal.classList.remove('active');
});

// Export Data
const exportBtn = document.getElementById('exportBtn');

exportBtn.addEventListener('click', () => {
    // Close sidebar
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    
    if (stationsData.length === 0) {
        showNotification('No Data', 'No data available to export', 'warning');
        return;
    }
    
    // Create CSV content
    let csv = 'Location,AQI,Status,PM2.5,PM10,O3,NO2,SO2,CO,Timestamp\n';
    
    stationsData.forEach(station => {
        const aqiInfo = getAQIInfo(station.aqi);
        csv += `"${station.location}",${station.aqi},"${aqiInfo.category}",`;
        csv += `${station.iaqi.pm25?.v || 'N/A'},`;
        csv += `${station.iaqi.pm10?.v || 'N/A'},`;
        csv += `${station.iaqi.o3?.v || 'N/A'},`;
        csv += `${station.iaqi.no2?.v || 'N/A'},`;
        csv += `${station.iaqi.so2?.v || 'N/A'},`;
        csv += `${station.iaqi.co?.v || 'N/A'},`;
        csv += `"${new Date(station.time.iso).toLocaleString()}"\n`;
    });
    
    // Download CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nagpur-aqi-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
    
    showNotification('Data Exported', 'AQI data downloaded as CSV', 'success');
});

// Share Button
const shareBtn = document.getElementById('shareBtn');

shareBtn.addEventListener('click', async () => {
    // Close sidebar
    sidebarMenu.classList.remove('active');
    sidebarOverlay.classList.remove('active');
    
    const avgAQI = Math.round(
        stationsData.reduce((sum, station) => sum + station.aqi, 0) / stationsData.length
    );
    const aqiInfo = getAQIInfo(avgAQI);
    
    const shareData = {
        title: 'Nagpur Air Quality',
        text: `Current AQI in Nagpur: ${avgAQI} (${aqiInfo.category}). Check live air quality data!`,
        url: window.location.href
    };
    
    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showNotification('Shared', 'AQI data shared successfully', 'success');
        } catch (err) {
            if (err.name !== 'AbortError') {
                copyToClipboard(shareData.text);
            }
        }
    } else {
        copyToClipboard(shareData.text);
    }
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showNotification('Copied', 'AQI data copied to clipboard', 'success');
    }).catch(() => {
        showNotification('Error', 'Failed to copy to clipboard', 'error');
    });
}

// Check AQI and send notification if enabled
function checkAQIAlert(avgAQI) {
    if (!notificationsEnabled || Notification.permission !== 'granted') return;
    
    const aqiInfo = getAQIInfo(avgAQI);
    
    if (avgAQI > 150) {
        new Notification('⚠️ Unhealthy Air Quality', {
            body: `Current AQI: ${avgAQI} (${aqiInfo.category}). Limit outdoor activities.`,
            icon: '🌍',
            requireInteraction: true
        });
    }
}

// Location Selector
const locationSelector = document.getElementById('locationSelector');
const selectedLocationDetails = document.getElementById('selectedLocationDetails');
const closeSelected = document.getElementById('closeSelected');

locationSelector.addEventListener('change', (e) => {
    const index = e.target.value;
    if (index === '') {
        selectedLocationDetails.style.display = 'none';
        return;
    }
    
    const station = stationsData[index];
    if (station) {
        showLocationDetails(station);
        // Zoom to location on map
        map.setView([station.lat, station.lon], 14);
        // Open marker popup
        const marker = markers.find(m => 
            m.getLatLng().lat === station.lat && 
            m.getLatLng().lng === station.lon
        );
        if (marker) marker.openPopup();
    }
});

closeSelected.addEventListener('click', () => {
    selectedLocationDetails.style.display = 'none';
    locationSelector.value = '';
    resetMapView();
});

// Show location details
function showLocationDetails(station) {
    const aqiInfo = getAQIInfo(station.aqi);
    const color = getAQIColor(station.aqi);
    
    document.getElementById('selectedLocationName').textContent = station.location;
    document.getElementById('selectedAQI').textContent = station.aqi;
    document.getElementById('selectedAQI').style.color = color;
    document.getElementById('selectedStatus').textContent = aqiInfo.category;
    document.getElementById('selectedStatus').style.color = color;
    
    document.getElementById('selectedPM25').textContent = station.iaqi.pm25?.v || 'N/A';
    document.getElementById('selectedPM10').textContent = station.iaqi.pm10?.v || 'N/A';
    document.getElementById('selectedO3').textContent = station.iaqi.o3?.v || 'N/A';
    document.getElementById('selectedNO2').textContent = station.iaqi.no2?.v || 'N/A';
    document.getElementById('selectedSO2').textContent = station.iaqi.so2?.v || 'N/A';
    document.getElementById('selectedCO').textContent = station.iaqi.co?.v || 'N/A';
    
    selectedLocationDetails.style.display = 'block';
}

// Initialize
initMap();
fetchAQIData();

// Auto-refresh every 30 minutes
setInterval(fetchAQIData, 30 * 60 * 1000);


// Smooth scroll for navigation links
document.querySelectorAll('.nav-link, .footer-col a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 90; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active nav link
                document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section, .hero, .map-section, .locations-section, .about-section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
