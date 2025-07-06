
# 🧠 AI Tooltip Answer – Chrome Extension (Gemini API)

**AI Tooltip Answer** is a simple Chrome extension that lets you select any text on a webpage and instantly get a **short answer powered by Google Gemini AI**. It uses your own Gemini API key, ensures privacy, and runs fully in your browser.

---

## 🚀 Features

- 🖱️ Select any text → Instantly get an AI-generated answer
- 🔐 No server needed — uses your own Gemini API key
- ⚡ Powered by Gemini 2.0 Flash model
- 🧠 Private tooltip overlay — fast and lightweight
- 🧩 Built using Chrome Extensions (Manifest V3)

---

## 📦 Installation Instructions

### 1. Clone or Download the Repository

```bash
git clone https://github.com/dheerajbishwaas/ai-tooltip-extension.git
cd ai-tooltip-extension
```

Or download it as ZIP from GitHub and extract the folder.

---

### 2. Load the Extension into Chrome

1. Open Chrome and go to: `chrome://extensions`
2. Enable **Developer Mode** (top-right corner)
3. Click on **"Load unpacked"**
4. Select the folder where this extension is located (e.g., `ai-tooltip-extension/`)
5. You should now see **"AI Tooltip"** in your Chrome extensions list

---

### 3. Set Your Gemini API Key

1. Click the **AI Tooltip** icon in the Chrome toolbar
2. A popup will open with an input field
3. Paste your Gemini API key into the field and click **"Save Key"**
4. You’ll see a confirmation alert: ✅ “API Key Saved!”

> 📝 The key is stored securely in your browser using `chrome.storage.local` — it’s never sent to anyone else.

---

### 4. Try It Out 🎉

1. Go to any website
2. Select a block of text with your mouse
3. The extension will show an **AI-generated tooltip answer** summarizing the selected text or answering a question
4. Enjoy AI at your fingertips!

---

## 🔐 Where to Get Your Gemini API Key

You can get a free API key by logging in to **Google AI Studio**:

👉 https://makersuite.google.com/app/apikey

Steps:

1. Login with your Google account
2. Accept terms of service
3. Copy your API key and paste it in the extension popup

> 🧠 This key allows you to use Gemini AI (Google’s LLM) in your own apps and tools.

---

## 🔧 Tech Stack

- JavaScript (Vanilla)
- Chrome Extension (Manifest V3)
- HTML + CSS (Popup UI)
- Google Gemini API (v1beta models: `gemini-2.0-flash`)

---

## ⚙️ Permissions Used

This extension uses the following Chrome permissions:

| Permission      | Why it's needed                        |
|-----------------|----------------------------------------|
| `storage`       | To save your API key securely          |
| `scripting`     | To inject content script on web pages  |
| `activeTab`     | To access the currently viewed tab     |
| `<all_urls>`    | To support AI on all webpages you visit|

---

## 🛠️ Folder Structure

```
ai-tooltip-extension/
├── manifest.json
├── background.js
├── content.js
├── popup.html
├── popup.js
└── README.md
```

---

## 🧪 Troubleshooting

- ❌ **No response shown?**
  - Make sure you've entered a valid Gemini API key in the popup
- ❌ **Nothing happens on text selection?**
  - Try refreshing the page after installing the extension
- ❌ **Console errors?**
  - Use `chrome://extensions → Inspect popup` or `Inspect content script`

---

## 🙏 Credits

Made by [@dheerajbishwaas](https://github.com/dheerajbishwaas)  
Powered by **Google Gemini AI**  
Built with ❤️ for developers and learners

---

## 📄 License

MIT License – feel free to use, modify, and contribute.

---

## 🌟 Star This Project

If you like this project, please consider giving it a ⭐ on GitHub. It helps others discover it and keeps the motivation going!
