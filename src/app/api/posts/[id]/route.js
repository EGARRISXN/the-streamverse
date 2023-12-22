import connect from "@/utilities/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const { newTitle: title, newDescription: description } =
      await request.json();
    await connect();
    await Post.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "Post updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while updating post." },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connect();
    const post = await Post.findOne({ _id: id });
    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while retrieving post." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connect();
    const post = await Post.findByIdAndDelete(id);
    return NextResponse.json({ message: "Post Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error while deleting post." },
      { status: 500 }
    );
  }
}
