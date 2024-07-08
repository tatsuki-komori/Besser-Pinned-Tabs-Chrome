// Intercept link clicks
document.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link && link.href) {
    chrome.runtime.sendMessage({ action: "openInNewTab", url: link.href }, (response) => {
      if (response.success) {
        event.preventDefault();
      }
    });
  }
});