import { useNavigate } from "react-router-dom";
import FlipCard from "../components/FlipCard";
import AnimatedBackground from "../components/AnimateBackground";
import "../index.css";

export default function Gateway() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Application",
      subtitle: "Thrive To Perform",
      description:
        "Programme innovant d’optimisation de la performance et développement des compétences psychosociales.",
      imageSrc: "/img/app.png",
      onOpen: () => window.open("https://ton-lien-app", "_blank"),
    },
    {
      title: "Site Web",
      subtitle: "Positive Performances",
      description:
        "Découvrez l’univers Positive Performances avec toutes les informations nécessaires.",
      imageSrc: "/img/site.png",
      onOpen: () => window.open("https://ton-site", "_blank"),
    },
    {
      title: "KrummÄi",
      subtitle: "Coach virtuel",
      description:
        "Coach virtuel intelligent qui vous aide à transformer votre façon de penser.",
      imageSrc: "/img/krummai.png",
      onOpen: () => navigate("/krummai"),
    },
    {
      title: "Coaching",
      subtitle: "24 semaines",
      description:
        "Parcours de coaching structuré accessible en ligne ou en présentiel.",
      imageSrc: "/img/coaching.png",
      onOpen: () => navigate("/coaching"),
    },
  ];

  return (
    <div className="pp-shell">
      <AnimatedBackground />

      <header className="pp-header">
        <h1 className="pp-brand__title">Positive Performances</h1>
        <p style={{ opacity: 0.75 }}>
          Choisissez votre expérience
        </p>
      </header>

      <main className="pp-grid">
        {cards.map((card) => (
          <FlipCard key={card.title} {...card} />
        ))}
      </main>
    </div>
  );
}
