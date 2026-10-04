import { use } from "react";

const fetchPosts = fetch(
  "https://jsonplaceholder.typicode.com/posts/awdawdawd",
).then((res) => {
  if (!res.ok) throw new Error("page " + res.status + "! not found");
  return res.json();
});

const PostList = () => {
  const posts = use(fetchPosts);

  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
};

export default PostList;
