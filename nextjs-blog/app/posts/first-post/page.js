import Link from "next/link";
import React from "react";

function FirstPost() {
  return (
    <div>
      <h1>First post</h1>
      <Link href="/" className="text-blue-500">
        Back to home
      </Link>
    </div>
  );
}

export default FirstPost;
