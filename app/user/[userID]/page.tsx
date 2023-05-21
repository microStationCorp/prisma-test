import { PrismaClient } from "@prisma/client";

export default async function Profile({
  params,
}: {
  params: { userID: string };
}) {
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: params.userID,
    },
    include: {
      todo: true,
    },
  });
  return (
    <div>
      profile
      <div>
        <div>{user?.name}</div>
        <div>
          {user?.todo.map((t) => (
            <div key={t.id}>
              {t.todo}-{t.created_at.toDateString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
