import { useState, useEffect } from "react";

const empty = { name: "", email: "", department: "", salary: "" };

export default function EmployeeForm({ selected, onSave, onCancel }) {
  const [form, setForm] = useState(empty);

  useEffect(() => {
    setForm(selected || empty);
  }, [selected]);

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    onSave({ ...form, salary: Number(form.salary) });
    setForm(empty);
  };

  return (
    <form onSubmit={submit} className="form">
      <input name="name" placeholder="Name" value={form.name} onChange={change} required />
      <input name="email" type="email" placeholder="Email" value={form.email} onChange={change} required />
      <input name="department" placeholder="Department" value={form.department} onChange={change} required />
      <input name="salary" type="number" placeholder="Salary" value={form.salary} onChange={change} required />
      <button type="submit">{form.id ? "Update" : "Add"}</button>
      {form.id && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}