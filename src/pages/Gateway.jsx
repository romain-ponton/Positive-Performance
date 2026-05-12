import FlipCard from "../components/FlipCard";
import AnimatedBackground from "../components/AnimateBackground";
import "../index.css";

import passionImg from "../assets/img/passion.png";
import ionosImg from "../assets/img/ionos.png";
import krummaiImg from "../assets/img/Krummai.png";
import coachingImg from "../assets/img/coaching.jpg";

const cards = [
  {
    title: "Application",
    subtitle: "Thrive To Perform",
    description:
      "Programme innovant d'optimisation de la performance et de développement des compétences psychosociales.",
    imageSrc: passionImg,
    onOpen: () => window.open("https://positive-performances.passion.io/", "_blank"),
  },
  {
    title: "Site Web",
    subtitle: "Positive Performances",
    description:
      "Découvrez l'univers Positive Performances avec toutes les informations nécessaires.",
    imageSrc: ionosImg,
    onOpen: () => window.open("https://www.positiveperformances.org/", "_blank"),
  },
  {
    title: "KrummÄi",
    subtitle: "Coach virtuel",
    description:
      "Coach virtuel intelligent qui vous aide à transformer votre façon de penser.",
    imageSrc: krummaiImg,
    onOpen: () => window.open("/krummai", "_blank"),
  },
  {
    title: "Coaching",
    subtitle: "24 semaines",
    description:
      "Parcours de coaching structuré accessible en ligne ou en présentiel.",
    imageSrc: coachingImg,
    onOpen: () => window.open("/coaching", "_blank"),
  },
];

export default function Gateway() {
  return (
    <div className="pp-shell">
      <AnimatedBackground />

      <header className="pp-header">
        <h1 className="pp-brand__title">Positive Performances</h1>
        <p className="pp-brand__subtitle">Choisissez votre expérience</p>
      </header>

      <main className="pp-grid">
        {cards.map((card) => (
          <FlipCard key={card.title} {...card} />
        ))}
      </main>
    </div>
  );
}
