import CreatePost from "@/components/(Posts)/CreatePostForm";
import PostsList from "@/components/(Posts)/PostsList";

export default function PostsPage() {
  return (
    <div className="grid grid-cols-1 mx-auto">
      <CreatePost />
      <PostsList />
    </div>
  );
}
