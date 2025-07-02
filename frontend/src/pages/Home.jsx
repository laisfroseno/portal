import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import NoticiaCard from './NoticiaCard';
import PatrocinadoresBar from './PatrocinadoresBar';

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const [patrocinadores, setPatrocinadores] = useState([]);
  const [menuAberto, setMenuAberto] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data));
    fetch('http://localhost:8000/patrocinadores')
      .then(res => res.json())
      .then(data => setPatrocinadores(data));
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-between items-center px-4 py-2 bg-white shadow-md sticky top-0 z-50">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <button className="text-xl font-bold" onClick={() => setMenuAberto(!menuAberto)}>☰ Menu</button>
      </div>

      {menuAberto && (
        <div className="absolute right-4 bg-white border shadow-md rounded-md p-4 z-50">
          <ul className="flex flex-col gap-2">
            <li><button onClick={() => navigate('/quemsomos')}>Quem Somos</button></li>
            <li><button onClick={() => navigate('/faleconosco')}>Fale Conosco</button></li>
            <li><button onClick={() => navigate('/parceiro')}>Parceiro</button></li>
            <li><button onClick={() => navigate('/noticia')}>Notícias</button></li>
            <li><button onClick={() => navigate('/submeterreportagem')}>Submeter Reportagem</button></li>
          </ul>
        </div>
      )}

      <main className="p-4">
        <h2 className="text-2xl font-bold mb-4 text-center">📰 Últimas Notícias</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 animate-pulse">
          {noticias.map(n => <NoticiaCard key={n.id} noticia={n} />)}
        </div>
        <PatrocinadoresBar patrocinadores={patrocinadores} />
      </main>

      <Footer />
    </>
  );
}
