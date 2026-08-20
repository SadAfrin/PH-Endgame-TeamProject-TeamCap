import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password, role } = body;

  if (!name || !email || !password || !role) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  // TODO: connect to MongoDB with mongoose
  // check if user already exists
  // const existing = await User.findOne({ email })
  // if (existing) {
  //   return NextResponse.json({ success: false, message: "Email already registered" }, { status: 409 })
  // }
  // const hashedPassword = await bcrypt.hash(password, 10)
  // const user = await User.create({ name, email, password: hashedPassword, role })

  return NextResponse.json({
    success: true,
    message: "Account created successfully",
    user: {
      id: "123",
      name,
      email,
      role,
    },
  });
}