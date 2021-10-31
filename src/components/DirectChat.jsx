import React, { useState } from "react";

import { ChatEngine, getOrCreateChat } from "react-chat-engine";

const DirectChatPage = () => {
  const [username, setUsername] = useState("");

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div>
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => createDirectChat(creds)}>Create</button>
      </div>
    );
  }

  return (
    <ChatEngine
      height="100vh"
      userName="adam"
      userSecret="pass1234"
      projectID="4e7b3004-1cc8-45e4-bbf9-3742d322b41b"
      renderNewChatForm={(creds) => renderChatForm(creds)}
    />
  );
};

export default DirectChatPage;
