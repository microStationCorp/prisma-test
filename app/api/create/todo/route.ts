import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const todo = await prisma.toDo.create({
    data: await request.json(),
  });
  return NextResponse.json({ msg: "got", todo });
}
