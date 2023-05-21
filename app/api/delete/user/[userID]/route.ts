import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  {
    params,
  }: {
    params: { userID: string };
  }
) {
  const prisma = new PrismaClient();
  const deletedUser = await prisma.user.delete({
    where: {
      id: params.userID,
    },
  });
  return NextResponse.json({ deletedUser });
}
