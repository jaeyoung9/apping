import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Post {
    id: number;
    title: string;
    content: string;
}

const Home: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const storedPosts = localStorage.getItem("posts");
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    return (
        <div>
            <h1>익명 커뮤니티</h1>
            <Link to="/new">새 글 작성</Link>
            {posts.length === 0 ? (
                <p>게시글이 없습니다.</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link to={`/post/${post.id}`}>{post.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Home;