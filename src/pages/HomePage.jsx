// import SidebarMenu from "../components/SidebarMenu";
import "../App.css";

function HomePage() {
  return (
    <div className="main-layout">
      {/* Sidebar */}
      {/* <SidebarMenu /> */}

      {/* Contenu principal */}
      <div className="content">
        <h1 className="title">Bienvenue sur Positive Performances</h1>

        <p className="subtitle">
          Accédez aux formations, ressources, évènements et contenus éducatifs
          conçus pour booster vos performances positives.
        </p>

        <div className="home-cards">
          <div className="card">
            <h2>Signature Programs</h2>
            <p>Retrouvez toutes les formations Thrive to Perform.</p>
          </div>

          <div className="card">
            <h2>Resources & Surveys</h2>
            <p>
              Accédez aux masterclasses, outils d’auto-évaluation et contenus
              exclusifs.
            </p>
          </div>

          <div className="card">
            <h2>Events & Media</h2>
            <p>Articles, interviews, interventions médiatiques.</p>
          </div>

          <div className="card">
            <h2>Education</h2>
            <p>Parcours éducatifs créés par Positive Performances.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HomePage;
