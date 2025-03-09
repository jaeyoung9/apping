import React from "react";
import { useParams, Link } from "react-router-dom";

const Post: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const post = posts.find((p: any) => p.id === Number(id));

    if (!post) {
        return <p>게시글을 찾을 수 없습니다.</p>;
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <Link to="/">목록으로 돌아가기</Link>
        </div>
    );
};

export default Post;