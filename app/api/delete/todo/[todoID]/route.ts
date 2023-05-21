import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: { todoID: string };
  }
) {
  const prisma = new PrismaClient();
  const deletedTodo = await prisma.toDo.delete({
    where: {
      id: params.todoID,
    },
  });
  return NextResponse.json({ deletedTodo });
}
