# Live Traffic Visualizer

A Chrome extension that visualizes website traffic in real-time using a map interface.

## Functionality

This extension provides real-time visualization of website traffic from around the world:

- **Global Traffic Map**: See a world map showing the geographical location of all visitors
- **Real-Time Updates**: Watch as new visitors appear on the map instantly
- **Visitor Counter**: Track the total number of active users on the website
- **Location Details**: View city and country information for each visitor
- **Continuous Monitoring**: All changes in traffic are reflected in real-time

## Project Structure

### Chrome Extension
- `extension/manifest.json`: Extension configuration
- `extension/popup.html`: HTML for extension popup with map interface
- `extension/popup.js`: JavaScript for the popup interface, handles WebSocket connection and map visualization
- `extension/background.js`: Background script that tracks navigation and reports data to the backend
- `extension/icon.png`: Extension icon

### Backend
- `backend/app.py`: Flask server with WebSocket support to track and broadcast user data
- `backend/requirements.txt`: Python dependencies for the backend

## How It Works

1. The Chrome extension tracks website navigation using the Chrome API
2. Location data is gathered and sent to the Flask backend
3. The backend stores visitor information in Redis and broadcasts updates via WebSockets
4. The extension popup displays a real-time map with visitor locations and updates the counter
5. As new visitors access the website, their locations appear on the map instantly
6. The total visitor count is updated in real-time

## Setup Instructions

### Backend Setup
1. Install dependencies: `pip install -r backend/requirements.txt`
2. Run the Flask server: `python backend/app.py`

### Extension Setup
1. Go to Chrome Extensions (chrome://extensions/)
2. Enable Developer Mode
3. Click "Load unpacked" and select the extension directory
4. Configure the backend URL in background.js and popup.js to match your server

## Usage

1. After installing the extension, click on its icon in the Chrome toolbar
2. The popup will display a world map showing current visitors to the website
3. The map updates automatically as new visitors access the site
4. The counter at the bottom shows the total number of active users
