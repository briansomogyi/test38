import React from 'react';
import Post from './Post';

const Feed = () => {
    const posts = [
        { id: 1, username: 'user1', imageUrl: 'https://via.placeholder.com/150', caption: 'First post!' },
        { id: 2, username: 'user2', imageUrl: 'https://via.placeholder.com/150', caption: 'Hello world!' },
    ];

    return (
        <div className="container mt-4">
            {posts.map(post => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    );
};

export default Feed;
