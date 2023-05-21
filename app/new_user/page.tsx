import NewUser from "@/components/newuser";
import { Metadata } from "next";

export default function Newuser() {
  return (
    <>
      new user
      <NewUser />
    </>
  );
}

export const metadata: Metadata = {
  title: "new user",
};
