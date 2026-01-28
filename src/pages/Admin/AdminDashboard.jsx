
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const { user, logout } = useAuth();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>
      <p>Bienvenue, {user.email}</p>

      <div style={{ marginTop: "20px" }}>
        <Link to="/admin/users">📋 Gérer les utilisateurs</Link>
      </div>

      <button onClick={logout} style={{ marginTop: "20px" }}>
        Déconnexion
      </button>
    </div>
  );
}
