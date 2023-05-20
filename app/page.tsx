import NewTodo from "@/components/newTodo";
import TodoItem from "@/components/todoItem";
import { PrismaClient } from "@prisma/client";

const getTodos = async () => {
  const prisma = new PrismaClient();

  const todos = await prisma.toDo.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return todos;
};

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      home page
      <NewTodo />
      <div>
        <ul>
          {todos.map((todo) => (
            <TodoItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
