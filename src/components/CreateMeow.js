import React, { useState } from "react";

const CreateMeow = () => {
  const [text, setText] = useState("");
  const [hashtags, setHashtags] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://cyf-cors-api.herokuapp.com/meow", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text,
        hashtags,
      }),
    }).then(res => res.json())
  }

  return (
    <div className="CreateMeow">
      <form onSubmit={handleSubmit}>
        <label>
          <h5>Text</h5>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </label>
        <label>
          <h5>Hashtags</h5>
          <textarea
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
          />
        </label>
        <button type="submit">Add Meow</button>
      </form>
    </div>
  );
};

export default CreateMeow;
