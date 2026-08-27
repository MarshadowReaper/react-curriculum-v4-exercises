import './Lesson07Styles.css';
import { useState } from 'react';
import { getSinglePost } from './api';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  async function handleClick() {
    setLoading(true);
    const data = await getSinglePost(1);
    setPost(data);
    setLoading(false);
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick}>
        Get post
      </button>
      <div className="content">
        {loading ? (
          <p>Loading...</p>
        ) : post ? (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ) : (
          <p>Click the button to load a post</p>
        )}
      </div>
    </div>
  );
}
