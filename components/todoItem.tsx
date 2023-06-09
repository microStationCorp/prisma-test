"use client";
import { ToDo, User } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function TodoItem({
  todo,
}: {
  todo: ToDo & { User: User | null };
}) {
  const [isDeleting, setDelete] = useState<boolean>(false);
  const router = useRouter();
  return (
    <li>
      {todo.todo}-{todo.created_at?.toDateString()} -{" "}
      <span className="text-sm text-slate-600 font-semibold italic mr-2">
        by {todo.User?.name}
      </span>
      {isDeleting ? (
        <div className="inline text-sm text-slate-700 font-semibold">
          deleting...
        </div>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 inline hover:cursor-pointer"
          onClick={() => {
            setDelete(true);
            fetch(`/api/delete/todo/${todo.id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                router.refresh();
              });
          }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
          />
        </svg>
      )}
    </li>
  );
}
