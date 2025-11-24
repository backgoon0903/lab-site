import { useState } from "react";

export default function Board() {
  const [posts, setPosts] = useState(
    JSON.parse(localStorage.getItem("posts") || "[]")
  );
  const [text, setText] = useState("");

  const addPost = () => {
    if (!text.trim()) return;
    const newPosts = [...posts, { id: Date.now(), text }];
    setPosts(newPosts);
    localStorage.setItem("posts", JSON.stringify(newPosts));
    setText("");
  };

  return (
    <div>
      <h2>같이해요 게시판</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="내용 입력"
      />
      <button onClick={addPost}>등록</button>

      <ul>
        {posts.map((p) => (
          <li key={p.id}>{p.text}</li>
        ))}
      </ul>
    </div>
  );
}
