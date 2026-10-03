export default function EmployeeList({ employees, onEdit, onDelete }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>{e.salary}</td>
              <td>
                <button onClick={() => onEdit(e)}>Edit</button>
                <button onClick={() => onDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))}
          {employees.length === 0 && (
            <tr>
              <td colSpan="6">No employees found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}