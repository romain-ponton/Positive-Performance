import React from "react";

const mockUsers = [
  { id: 1, email: "alpha@mail.com", role: "user_standard" },
  { id: 2, email: "beta@mail.com", role: "user_premium" },
  { id: 3, email: "admin@mail.com", role: "admin" },
];

export default function UserManagement() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Gestion des Utilisateurs</h1>

      <table border="1" cellPadding="10" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Email</th>
            <th>Rôle</th>
            <th>Modifier</th>
          </tr>
        </thead>

        <tbody>
          {mockUsers.map((u) => (
            <tr key={u.id}>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button>Modifier</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
