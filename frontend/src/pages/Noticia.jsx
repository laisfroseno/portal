export default function Noticia() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Título da Notícia</h1>
        <img src="/imagem-da-noticia.jpg" alt="Imagem da Notícia" className="w-full h-64 object-cover mb-4" />
        <p className="text-lg">Conteúdo completo da notícia...</p>
      </main>
      <Footer />
    </>
  );
}
