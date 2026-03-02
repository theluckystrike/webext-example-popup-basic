# Learning: Chrome Extension Popup

## What is a Popup?

A popup is a small HTML interface that appears when users click your extension's icon in Chrome's toolbar. It's one of the most common ways to provide a user interface for Chrome extensions.

## Key Concept: Action API (formerly Browser Action)

In Manifest V3, the `browser_action` key was renamed to `action`. This defines the extension's toolbar icon and popup.

```json
{
  "action": {
    "default_popup": "popup.html",
    "default_icon": {
      "16": "icons/icon16.png",
      "48": "icons/icon48.png"
    }
  }
}
```

## Creating a Popup

### 1. The HTML (popup.html)

```html
<!DOCTYPE html>
<html>
<body>
  <h1>My Popup</h1>
  <button id="myButton">Click Me</button>
  <script src="popup.js"></script>
</body>
</html>
```

### 2. The JavaScript (popup.js)

```javascript
document.getElementById('myButton').addEventListener('click', () => {
  console.log('Button clicked!');
});
```

## Popup Lifecycle

Important things to know about popups:

1. **Created on open**: The popup HTML is created fresh each time it opens
2. **Destroyed on close**: All state is lost when the popup closes
3. **Limited lifetime**: If the user doesn't interact, it may close automatically
4. **DevTools available**: Right-click the popup → Inspect to debug

## Best Practices

1. **Don't rely on state**: Use chrome.storage to persist data
2. **Keep it lightweight**: Popups should open quickly
3. **Handle close events**: Save state before the popup closes
4. **Use modern JS**: Popups support ES6+ features

## Common Patterns

### Communicating with Background Script

```javascript
// From popup.js
chrome.runtime.sendMessage({ action: 'doSomething' }, (response) => {
  console.log(response);
});
```

### Accessing Current Tab

```javascript
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  const currentTab = tabs[0];
  console.log('Current tab:', currentTab.url);
});
```

### Storing State

```javascript
// Save state
chrome.storage.local.set({ clickCount: 5 });

// Load state
chrome.storage.local.get(['clickCount'], (result) => {
  console.log('Count:', result.clickCount);
});
```

## Next Steps

Now that you understand popups, learn about:
- **Content Scripts**: Injecting code into web pages
- **Background Workers**: Running code in the background
- **Messaging**: Communication between extension parts

## Resources

- [Action API Documentation](https://developer.chrome.com/docs/extensions/reference/action/)
- [Popup Best Practices](https://developer.chrome.com/docs/extensions/develop/ui/popup)
