import { Link } from 'react-router-dom';

function Error() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>404</h1>
        <p className="error-message">
          Oups! La page que vous demandez n'existe pas.
        </p>
        <Link to="/" className="edit-button">
          Retourner sur la page d'accueil
        </Link>
      </div>
    </main>
  );
}

export default Error;