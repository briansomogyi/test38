import React from 'react';

const Post = ({ post }) => {
    return (
        <div className="card mb-4">
            <div className="card-header">
                <strong>{post.username}</strong>
            </div>
            <img src={post.imageUrl} className="card-img-top" alt="Post" />
            <div className="card-body">
                <p className="card-text">{post.caption}</p>
            </div>
        </div>
    );
};

export default Post;
