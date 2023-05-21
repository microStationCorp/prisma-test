"use client";

import { useFormik } from "formik";

export default function NewUser() {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      const res = await fetch("/api/create/user", {
        method: "POST",
        body: JSON.stringify(values),
      });
      console.log(await res.json());
      resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          className="bg-slate-100 border-2 rounded-md"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        <button
          className={
            formik.isSubmitting
              ? "bg-slate-400  px-3 py-1 rounded-md"
              : "bg-teal-500 px-3 py-1 rounded-md"
          }
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "waiting..." : "submit"}
        </button>
      </form>
    </div>
  );
}
