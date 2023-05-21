import TodoItem from "@/components/todoItem";
import UserItem from "@/components/useritem";
import { PrismaClient } from "@prisma/client";

export const dynamic = "force-dynamic";

const getTodos = async () => {
  const prisma = new PrismaClient();

  const todos = await prisma.toDo.findMany({
    orderBy: {
      created_at: "desc",
    },
  });
  return todos;
};
const getUsers = async () => {
  const prisma = new PrismaClient();

  const todos = await prisma.user.findMany({});
  return todos;
};

export default async function Home() {
  const todos = await getTodos();
  const users = await getUsers();
  return (
    <>
      <div className="text-xl capitalize">home page</div>
      <div className="sm:flex sm:justify-between sm:space-x-2 space-y-2 sm:space-y-0 p-4">
        {/* todo items */}
        <div className="w-full sm:w-1/2 bg-emerald-300 rounded-md p-2">
          <div>todos</div>
          <ul>
            {todos.map((todo) => (
              <TodoItem todo={todo} key={todo.id} />
            ))}
          </ul>
        </div>
        {/* users */}
        <div className="w-full sm:w-1/2 bg-teal-300 rounded-md p-2">
          <div>users</div>
          <ul>
            {users.map((user) => (
              <UserItem user={user} key={user.id} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
