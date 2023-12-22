import connect from "@/utilities/db";
import Post from "@/models/Post";
// import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { title, description } = await request.json();
    // const { title, description, userId } = await request.json();
    await connect();
    await Post.create({ title, description });
    // const post = await Post.create({ title, description, user: userId });
    // await User.findByIdAndUpdate(userId, { $push: { posts: post._id } });
    return NextResponse.json({ message: "Post created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while creating post." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    const posts = await Post.find();
    // const posts = await Post.find().populate("user");
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while retrieving posts." },
      { status: 500 }
    );
  }
}
