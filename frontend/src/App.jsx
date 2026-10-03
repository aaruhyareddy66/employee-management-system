import { useState, useEffect } from "react";
import { getEmployees, saveEmployee, deleteEmployee } from "./api";
import EmployeeForm from "./EmployeeForm";
import EmployeeList from "./EmployeeList";
import "./App.css";

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [selected, setSelected] = useState(null);

  const load = async () => {
    try {
      setEmployees(await getEmployees());
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSave = async (emp) => {
    await saveEmployee(emp);
    setSelected(null);
    load();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this employee?")) return;
    await deleteEmployee(id);
    load();
  };

  return (
    <div className="container">
      <h1>Employee Management System</h1>
      <EmployeeForm
        selected={selected}
        onSave={handleSave}
        onCancel={() => setSelected(null)}
      />
      <EmployeeList
        employees={employees}
        onEdit={setSelected}
        onDelete={handleDelete}
      />
    </div>
  );
}