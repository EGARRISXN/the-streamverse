import connect from "@/utilities/db";
import User from "@/models/User";
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
  await connect();
  await User.findByIdAndUpdate(id, { name, username, password, genre, bio });
  return NextResponse.json({ message: "User updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    await connect();
    const user = await User.findOne({ _id: id });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while retrieving user." },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connect();
    const user = await User.findByIdAndDelete(id);
    return NextResponse.json({ message: "User Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error while deleting user." },
      { status: 500 }
    );
  }
}
