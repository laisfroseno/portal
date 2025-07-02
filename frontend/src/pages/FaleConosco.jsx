export default function FaleConosco() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Fale Conosco</h1>
        <form className="space-y-4">
          <div>
            <label className="block text-lg" htmlFor="nome">Nome</label>
            <input type="text" id="nome" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-lg" htmlFor="email">E-mail</label>
            <input type="email" id="email" className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-lg" htmlFor="mensagem">Mensagem</label>
            <textarea id="mensagem" className="w-full p-2 border border-gray-300 rounded-md" rows="5"></textarea>
          </div>
          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">Enviar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
