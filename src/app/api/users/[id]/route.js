import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newName: name,
    newUsername: username,
    newPassword: password,
    newGenre: genre,
    newBio: bio,
  } = await request.json();
  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, username, password, genre, bio });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
