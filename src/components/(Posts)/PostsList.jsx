async function fetchPosts() {
  try {
    const response = await fetch("http://localhost:3000/api/posts", {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    return response.json();
  } catch (error) {
    console.log("Error loading posts: ", error);
    return { posts: [] };
  }
}

const PostsList = async () => {
  const data = await fetchPosts();

  if (!data || !data.posts || !Array.isArray(data.posts)) {
    console.log("No valid posts found");
    return <div>No valid posts found</div>;
  }

  return (
    <div className="flex justify-center items-center p-2">
      <div className="bg-white rounded shadow-md p-4 w-full max-w-lg h-full">
        <h2 className="text-2xl text-center font-bold mb-4">Posts</h2>
        <hr className="mb-4" />
        <ul>
          {data.posts.map((post) => (
            <li key={post._id} className="mb-2">
              <h3 className="text-lg font-semibold">{post.title}</h3>
              <p className="text-gray-600">{post.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PostsList;
