
import { Link } from 'react-router-dom'; // Certifique-se de ter o React Router configurado

function Error404() {
  return (
    <main>
      <h1>Error 404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to = "/">Voltar para a página inicial</Link>
    </main>
  );
}

export default Error404;