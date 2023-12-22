import PostCard from "@/components/(Posts)/PostCard";

async function getPostById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Failed to get post. Status: ${response.status}`);
    }
    const data = await response.json();
    return data.post;
  } catch (error) {
    console.error("Error fetching post:", error);
  }
}

const PostById = async ({ params }) => {
  const { id } = params;
  const post = await getPostById(id);

  return (
    <div className="flex justify-center items-center p-2">
      <div className="bg-white rounded shadow-md p-4 w-full">
        <PostCard Post={post} />
      </div>
    </div>
  );
};

export default PostById;
