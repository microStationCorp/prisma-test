"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

export default function NewTodo({
  users,
}: {
  users: { id: string; name: string }[];
}) {
  return (
    <Formik
      initialValues={{
        todo: "",
        userID: "",
      }}
      validationSchema={Yup.object().shape({
        todo: Yup.string().required(),
        userID: Yup.string().required(),
      })}
      onSubmit={async (values) => {
        console.log(values);
        const res = await fetch("/api/create/todo", {
          method: "POST",
          body: JSON.stringify(values),
        });

        console.log(await res.json());
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col items-center mt-2">
          <div className="flex flex-col mb-4">
            <Field
              type="text"
              placeholder="todo"
              name="todo"
              className="mb-2 p-1 rounded bg-slate-100"
            />
            <Field
              as="select"
              name="userID"
              className="mb-2 p-1 rounded bg-slate-100"
            >
              <option value="">Select User</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </Field>
            <button
              className={`border capitalize border-slate-700 px-2 rounded shadow ${
                isSubmitting
                  ? "bg-slate-700 text-slate-500"
                  : "bg-teal-500 hover:bg-slate-700 text-slate-100"
              } `}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "wait..." : "submit"}
            </button>
          </div>
          <div>
            <ErrorMsgComp name="todo" />
            <ErrorMsgComp name="userID" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

const ErrorMsgComp = ({ name }: { name: string }) => {
  return (
    <ErrorMessage name={name}>
      {(msg) => <div className="text-sm text-red-600">*{msg}</div>}
    </ErrorMessage>
  );
};
