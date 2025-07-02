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
      <div className="flex">
        {/* Menu Lateral */}
        {menuAberto && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
            <div className="bg-white p-4 w-3/4 h-full">
              <button onClick={() => setMenuAberto(false)} className="text-2xl font-bold">✖ Fechar</button>
              <ul className="flex flex-col gap-4 mt-4">
                <li><button onClick={() => navigate('/quemsomos')}>Quem Somos</button></li>
                <li><button onClick={() => navigate('/faleconosco')}>Fale Conosco</button></li>
                <li><button onClick={() => navigate('/parceiro')}>Parceiro</button></li>
                <li><button onClick={() => navigate('/noticia')}>Notícias</button></li>
                <li><button onClick={() => navigate('/submeterreportagem')}>Submeter Reportagem</button></li>
              </ul>
            </div>
          </div>
        )}

        {/* Conteúdo Principal */}
        <main className="flex-1 p-4">
          <h2 className="text-2xl font-bold mb-4 text-center">📰 Últimas Notícias</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {noticias.map(n => <NoticiaCard key={n.id} noticia={n} />)}
          </div>
        </main>

        {/* Barra de Patrocinadores */}
        <aside className="w-1/4 p-4 bg-gray-200">
          <h3 className="text-lg font-bold mb-2">Patrocinadores</h3>
          <div className="space-y-4">
            {patrocinadores.map(patrocinador => (
              <div key={patrocinador.id} className="flex items-center gap-2">
                <img src={patrocinador.logo_url} alt={patrocinador.nome} className="h-12" />
                <a href={patrocinador.link} target="_blank" className="text-blue-600">{patrocinador.nome}</a>
              </div>
            ))}
          </div>
        </aside>
      </div>

      <Footer />
    </>
  );
}
