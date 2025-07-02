export default function QuemSomos() {
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Quem Somos</h1>
        <p className="text-lg mb-4">Somos uma organização comprometida com a preservação do meio ambiente...</p>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Missão</h2>
          <p className="text-lg">Nossa missão é...</p>
          <h2 className="text-2xl font-bold">Visão</h2>
          <p className="text-lg">Nossa visão é...</p>
          <h2 className="text-2xl font-bold">Valores</h2>
          <ul className="list-disc pl-6">
            <li>Responsabilidade ambiental</li>
            <li>Transparência</li>
            <li>Inovação</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
