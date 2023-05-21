import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const values: { todo: string; userID: string } = await request.json();
  const todo = await prisma.toDo.create({
    data: {
      todo: values.todo,
      User: {
        connect: {
          id: values.userID,
        },
      },
    },
    include: {
      User: true,
    },
  });

  return NextResponse.json({ msg: "got", todo });
}
