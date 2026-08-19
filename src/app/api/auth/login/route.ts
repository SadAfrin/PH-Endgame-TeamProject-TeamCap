import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password, role } = body;

  if (!email || !password || !role) {
    return NextResponse.json(
      { success: false, message: "All fields are required" },
      { status: 400 }
    );
  }

  // TODO: connect to MongoDB with mongoose and check real user
  // const user = await User.findOne({ email, role })
  // if (!user || !(await bcrypt.compare(password, user.password))) {
  //   return NextResponse.json({ success: false, message: "Invalid credentials" }, { status: 401 })
  // }

  return NextResponse.json({
    success: true,
    message: "Login successful",
    user: {
      id: "123",
      name: "Test User",
      email,
      role,
    },
  });
}