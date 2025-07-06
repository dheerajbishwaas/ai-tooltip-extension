document.getElementById('saveBtn').addEventListener('click', () => {
  const token = document.getElementById('apiKeyInput').value.trim();

  if (!token) {
    alert('Please enter a valid API token.');
    return;
  }

  chrome.storage.local.set({ apiKey: token }, () => {
    alert('API Token Saved!');
  });
});