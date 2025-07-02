import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function SubmeterReportagem() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [titulo, setTitulo] = useState('');
  const [texto, setTexto] = useState('');
  const [imagem, setImagem] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  
  // Função para validação do login
  const handleLogin = (e) => {
    e.preventDefault();
    if (login === 'teste' && senha === '123') {
      setIsLoggedIn(true);
      setErrorMessage('');
    } else {
      setErrorMessage('Login ou senha incorretos!');
    }
  };

  // Função para lidar com o envio do formulário de reportagem
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo || !texto || !imagem) {
      setErrorMessage('Todos os campos são obrigatórios.');
      return;
    }

    // Aqui você pode incluir a lógica de envio dos dados (ex: usando fetch ou axios)
    console.log({ titulo, texto, imagem });

    // Limpeza do formulário
    setTitulo('');
    setTexto('');
    setImagem(null);
    alert('Reportagem enviada com sucesso!');
  };

  // Formulário de login
  if (!isLoggedIn) {
    return (
      <>
        <Header />
        <main className="p-8">
          <h1 className="text-3xl font-bold mb-4">Acesse sua conta</h1>
          {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="login" className="block text-lg">Login</label>
              <input
                type="text"
                id="login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="senha" className="block text-lg">Senha</label>
              <input
                type="password"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
                required
              />
            </div>
            <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
              Entrar
            </button>
          </form>
        </main>
        <Footer />
      </>
    );
  }

  // Formulário de Submissão de Reportagem
  return (
    <>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-4">Submeter Reportagem</h1>
        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="titulo" className="block text-lg">Título</label>
            <input
              type="text"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              maxLength={100}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            <p className="text-sm text-gray-500">Máximo de 100 caracteres.</p>
          </div>

          <div>
            <label htmlFor="texto" className="block text-lg">Texto</label>
            <textarea
              id="texto"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              maxLength={6000}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="6"
              required
            />
            <p className="text-sm text-gray-500">Máximo de 6.000 caracteres.</p>
          </div>

          <div>
            <label htmlFor="imagem" className="block text-lg">Imagem (PNG, MP4, PDF)</label>
            <input
              type="file"
              id="imagem"
              accept=".png,.mp4,.pdf"
              onChange={(e) => setImagem(e.target.files[0])}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
            {imagem && <p className="text-sm text-gray-500">Arquivo selecionado: {imagem.name}</p>}
          </div>

          <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md">
            Enviar Reportagem
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}
