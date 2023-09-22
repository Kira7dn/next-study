"use client";
import React, { useState, useEffect } from "react";

function PostList({ posts }) {
  const [showData, setShowData] = useState(false);
  const [postList, setPostList] = useState(posts);
  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will unmount");
    };
  }, []);
  useEffect(() => {
    console.log("Component Did Update");
  }, [showData, postList]);
  function handleDelete(selectedId) {
    setPostList(postList.filter((post) => post.id !== selectedId));
  }
  return (
    <div>
      <h1>Post List {postList.length} items</h1>
      <h1 className="text-xl font-bold underline">Hello world!</h1>
      <button onClick={() => setShowData(!showData)}>Toggle</button>
      {showData && (
        <ul className="">
          {postList?.map((post) => (
            <li key={post.id}>
              <span
                className="mr-2 p-2 cursor-pointer hover:text-red-500"
                onClick={() => handleDelete(post.id)}
              >
                x
              </span>
              <span>{post.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PostList;
