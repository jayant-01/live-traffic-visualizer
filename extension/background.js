chrome.webNavigation.onCompleted.addListener(async (details) => {
    const tab = await chrome.tabs.get(details.tabId);
    const url = new URL(tab.url);
    const response = await fetch('https://ip-api.com/json/');
    const data = await response.json();
  
    fetch('http://127.0.0.1:5000/track', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        url: url.hostname,
        ip_data: data
      })
    });
  }, {url: [{schemes: ['http', 'https']}]});
  