import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewPost: React.FC = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newPost = { id: Date.now(), title, content };

        const existingPosts = JSON.parse(localStorage.getItem("posts") || "[]");
        localStorage.setItem("posts", JSON.stringify([...existingPosts, newPost]));

        navigate("/");
    };

    return (
        <div>
            <h1>새 글 작성</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="제목"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <textarea
                    placeholder="내용"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                />
                <button type="submit">등록</button>
            </form>
        </div>
    );
};

export default NewPost;