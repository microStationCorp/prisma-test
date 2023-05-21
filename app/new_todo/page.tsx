import NewTodo from "@/components/newTodo";
import { PrismaClient } from "@prisma/client";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

const getUsers = async () => {
  const prisma = new PrismaClient();

  const todos = await prisma.user.findMany({});
  return todos;
};

export default async function Newtodo() {
  const users = await getUsers();

  return (
    <>
      new todo
      <NewTodo users={users} />
    </>
  );
}

export const metadata: Metadata = {
  title: "new todo",
};
