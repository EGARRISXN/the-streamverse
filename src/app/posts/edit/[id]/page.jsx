"use client";
import { useState, useEffect } from "react";
import EditPostForm from "@/components/(Posts)/EditPostForm";

async function fetchPostById(id) {
  try {
    const response = await fetch(`http://localhost:3000/api/posts/${id}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to get post.");
    }

    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
}

const EditPost = ({ params }) => {
  const { id } = params;
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postData = await fetchPostById(id);
        setPost(postData);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPost();
  }, [id]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, description } = post;

  return <EditPostForm id={id} title={title} description={description} />;
};

export default EditPost;
