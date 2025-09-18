# Sidebar Docker Chrome Extension

A Chrome extension that adds a sidebar docker to the right side of web pages, containing an iframe that loads an app from `http://localhost:5173/`.

## Features

- **Right-side sidebar**: Fixed position sidebar that appears on all web pages
- **Iframe integration**: Loads content from `http://localhost:5173/`
- **Toggle functionality**: Collapsible sidebar with a toggle button
- **Responsive design**: Adapts to different screen sizes
- **Non-intrusive**: Adjusts page margin to avoid content overlap

## Installation

1. **Download or clone this repository**
2. **Open Chrome and navigate to**: `chrome://extensions/`
3. **Enable Developer mode** (toggle in the top right)
4. **Click "Load unpacked"** and select the extension folder
5. **The extension will be installed and active**

## Usage

1. **Navigate to any website** - the sidebar will automatically appear on the right
2. **Use the toggle button** (◀/▶) on the left edge of the sidebar to show/hide it
3. **The iframe will load content** from `http://localhost:5173/`

## Requirements

- **Chrome browser** (version 88 or higher for Manifest V3 support)
- **Local development server** running on `http://localhost:5173/`

## File Structure

```
sidebar/
├── manifest.json      # Extension configuration
├── content.js         # Content script for sidebar injection
├── sidebar.css        # Styling for the sidebar
└── README.md          # This file
```

## Permissions

The extension requires the following permissions:
- `activeTab`: To inject content scripts into active tabs
- `scripting`: To run content scripts
- `http://localhost:5173/*`: To load content from the local development server
- `<all_urls>`: To inject the sidebar on all websites

## Troubleshooting

- **Sidebar not appearing**: Check if the extension is enabled in `chrome://extensions/`
- **Iframe not loading**: Ensure your local server is running on `http://localhost:5173/`
- **Content blocked**: Check browser console for CORS or security errors

## Development

To modify the extension:
1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh button on the extension card
4. Reload any open tabs to see changes