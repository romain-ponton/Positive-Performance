// src/components/FlipCard.jsx
import { useMemo, useState } from "react";

export default function FlipCard({
  title,
  subtitle,
  description,
  imageSrc,
  iconSrc,
  onOpen,
  accent = "#e7c7a7",
}) {
  const [flipped, setFlipped] = useState(false);

  const styleVars = useMemo(() => ({
    "--pp-accent": accent,
  }), [accent]);

  const toggle = () => setFlipped(v => !v);

  return (
    <article
      className={`pp-card ${flipped ? "is-flipped" : ""}`}
      style={styleVars}
      onClick={toggle}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") toggle();
      }}
      aria-label={`${title} - ouvrir les détails`}
    >
      <div className="pp-card__inner">
        {/* FRONT */}
        <div className="pp-card__face pp-card__front">
          <div className="pp-card__media">
            <img className="pp-card__img" src={imageSrc} alt={title} />
            {iconSrc ? (
              <img className="pp-card__icon" src={iconSrc} alt="" aria-hidden />
            ) : null}
          </div>

          <div className="pp-card__frontText">
            <h3 className="pp-card__title">{title}</h3>
            {subtitle ? <p className="pp-card__subtitle">{subtitle}</p> : null}
            <p className="pp-card__hint">Clique pour retourner</p>
          </div>
        </div>

        {/* BACK */}
        <div className="pp-card__face pp-card__back">
          <h3 className="pp-card__title">{title}</h3>
          <p className="pp-card__desc">{description}</p>

          <div className="pp-card__actions">
            <button
              className="pp-btn"
              type="button"
              onClick={(e) => {
                e.stopPropagation(); // évite de re-retourner
                onOpen?.();
              }}
            >
              Open
            </button>

            <button
              className="pp-btn pp-btn--ghost"
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setFlipped(false);
              }}
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
