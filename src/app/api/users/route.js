import connect from "@/utilities/db";
import User from "@/models/User";
import Post from "@/models/Post";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, username, password, email, genre, bio } = await request.json();
  await connect();
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return new NextResponse("Username is already in use", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    name,
    username,
    password: hashedPassword,
    email,
    genre,
    bio,
  });
  try {
    await newUser.save();
    return NextResponse.json({ message: "User created." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating user." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    const users = await User.find();
    return NextResponse.json({ users });
  } catch (error) {
    return NextResponse.json(
      { message: "Error while retrieving users." },
      { status: 500 }
    );
  }
}
