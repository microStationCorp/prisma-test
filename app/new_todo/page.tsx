import NewTodo from "@/components/newTodo";
import { Metadata } from "next";

export default function Newtodo() {
  return (
    <>
      new todo
      <NewTodo />
    </>
  );
}

export const metadata: Metadata = {
  title: "new todo",
};
