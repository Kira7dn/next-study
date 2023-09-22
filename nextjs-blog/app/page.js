import React from "react";
import Link from "next/link";
import PostList from "../components/PostList";

async function getData() {
  const data = fetch("https://jsonplaceholder.typicode.com/posts");
  return (await data).json();
}

async function page() {
  const data = await getData();
  return (
    <div >
      <h1>
        Read{" "}
        <Link href="/posts/first-post" className="text-blue-500">
          this page!
        </Link>
      </h1>
      <PostList posts={data} />
    </div>
  );
}

export default page;
