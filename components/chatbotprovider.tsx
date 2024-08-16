"use client";

import { useEffect } from "react";

export default function ChatbotProvider() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="samitinobot"
      agent-id="224f3f58-c1c8-48ff-a7c3-6e9dd45901ad"
      language-code="en"
    ></df-messenger>
  );
}
