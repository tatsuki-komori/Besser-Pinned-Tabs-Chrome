# 1.0.0
Initial release

# 1.0.3
## Bug fixes
- Improvement: Added functionality to identify pinned tabs upon extension activation. This ensures the extension immediately recognizes which tabs are protected. (Implemented in background.js)
- Fix: Resolved an issue where the extension blocked CMD-W (or Ctrl-W) for tabs that were previously pinned and then unpinned. Now, the extension only blocks the shortcut for currently pinned tabs. (Modified background.js)
- Fix: Addressed a bug in content.js that caused a "TypeError: Cannot read properties of undefined (reading 'query')" error. The script now checks for extension availability before using the chrome.tabs API. (Modified content.js)
- Fixed an issue where clicking a link to a different domain inside a pinned tab sometimes opened two new tabs instead of one.