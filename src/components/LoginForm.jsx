import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user_standard");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, role);
    navigate("/");
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Connexion</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="user_standard">Utilisateur Standard</option>
          <option value="user_premium">Utilisateur Premium</option>
          <option value="admin">Administrateur</option>
        </select>

        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
}
