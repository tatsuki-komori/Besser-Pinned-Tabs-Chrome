# 1.0.6
## Security & Privacy Improvements
- Removed host permissions requirement (`<all_urls>`)
- Eliminated content scripts in favor of using the webNavigation API
- Simplified codebase by removing message passing between content and background scripts

Note: This update may result in a brief visual flash when clicking links in pinned tabs, but provides enhanced privacy by reducing required permissions.

# 1.0.5
Updated description in the manifest

# 1.0.4
Removed unused storage permission

# 1.0.3
## Bug fixes
- Improvement: Added functionality to identify pinned tabs upon extension activation. This ensures the extension immediately recognizes which tabs are protected. (Implemented in background.js)
- Fix: Resolved an issue where the extension blocked CMD-W (or Ctrl-W) for tabs that were previously pinned and then unpinned. Now, the extension only blocks the shortcut for currently pinned tabs. (Modified background.js)
- Fix: Addressed a bug in content.js that caused a "TypeError: Cannot read properties of undefined (reading 'query')" error. The script now checks for extension availability before using the chrome.tabs API. (Modified content.js)
- Fixed an issue where clicking a link to a different domain inside a pinned tab sometimes opened two new tabs instead of one.

# 1.0.0
Initial release