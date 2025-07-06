let mouseX = 0;
let mouseY = 0;
let currentTooltip = null;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});


document.addEventListener("mouseup", async (e) => {
  // Wait a tiny bit to avoid conflict with click-to-close
  setTimeout(async () => {
    const selectedText = window.getSelection().toString().trim();

    if (!selectedText || selectedText.length < 2) return;

    removeTooltip();

    const answer = await getAIAnswer(selectedText);
    showTooltip(answer, mouseX, mouseY);
  }, 50); // ⏳ Delay prevents re-show after click
});


document.addEventListener("click", removeTooltip);


// Gemini API integration
async function getAIAnswer(text) {

  const API_KEY = await new Promise((resolve, reject) => {
    chrome.storage.local.get("apiKey", (result) => {
      if (chrome.runtime.lastError || !result.apiKey) {
        reject("API key not found.");
      } else {
        resolve(result.apiKey);
      }
    });
  });
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;

  const body = {
    contents: [
      {
        parts: [
          {
            text: `which one is correct answer in short 100 words :\n\n"${text}"`
          }
        ]
      }
    ]
  };

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const data = await res.json();

    const answer =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No answer found from Gemini.";

    return answer;
  } catch (err) {
    console.error("Gemini API error:", err);
    return "Error contacting Gemini API.";
  }
}



function showTooltip(answer, x, y) {
  const tooltip = document.createElement("div");
  tooltip.innerText = answer;

  Object.assign(tooltip.style, {
    position: "fixed",
    top: `${y + 10}px`,
    left: `${x + 10}px`,
    background: "#1e1e1e",
    color: "#f1f1f1",
    padding: "12px 14px",
    borderRadius: "10px",
    maxWidth: "320px",
    maxHeight: "250px",
    overflowY: "auto",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    lineHeight: "1.5",
    zIndex: 999999,
    boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    scrollBehavior: "smooth"
  });

  currentTooltip = tooltip;
  document.body.appendChild(tooltip);

  setTimeout(removeTooltip, 100000);
}

function removeTooltip() {
  if (currentTooltip) {
    currentTooltip.remove();
    currentTooltip = null;
  }
}

