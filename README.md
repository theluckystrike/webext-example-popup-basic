# Popup Basic Chrome Extension

A Chrome extension demonstrating a popup with button click interaction.

## What It Does

This extension adds a button to Chrome's toolbar. When clicked, it opens a popup with:
- A counter that tracks how many times you've clicked the button
- A "Click Me!" button that increments the counter
- Visual feedback showing the click count

## How to Install

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right corner
3. Click "Load unpacked"
4. Select the `src` folder of this extension

## How to Use

1. Look for the extension icon in Chrome's toolbar
2. Click the icon to open the popup
3. Click the "Click Me!" button
4. Watch the counter increment!

## Project Structure

```
webext-example-popup-basic/
├── src/
│   ├── manifest.json    # Extension configuration
│   ├── popup.html       # Popup UI
│   ├── popup.js         # Popup logic
│   └── icons/           # Extension icons
├── screenshots/         # Screenshots
├── README.md            # This file
├── LEARN.md             # Learning guide
└── package.json         # Package config
```

## Key Concepts

### Browser Action (Action API)

In Manifest V3, `browser_action` is now called `action`. It defines:
- `default_popup`: The HTML file to show when clicking the icon
- `default_icon`: The icon to display in the toolbar

### Popup Lifecycle

Popups in Chrome extensions:
- Open when the user clicks the toolbar icon
- Close when the user clicks outside or presses Escape
- Are destroyed when closed (state is not preserved between opens)
- Share the extension's origin for messaging

## Learning Path

1. [Hello World](../webext-example-hello-world) - Minimal extension
2. **Popup Basic** (you are here) - Add a popup UI
3. [Content Script](../webext-example-content-script-basic) - Interact with web pages
4. [Background Service Worker](../webext-example-background-basic) - Background processing
5. [Options Page](../webext-example-options-page) - Add settings

## Related Examples

- [webext-popup-router](https://github.com/zovo/webext-popup-router) - Router for complex popups
- [webext-toast-notifications](https://github.com/zovo/webext-toast-notifications) - Toast UI component

## License

MIT
