export default function NoticiaCard({ noticia }) {
  return (
    <div className="border p-4 rounded-md shadow-md">
      <img src={noticia.imagem_url} alt={noticia.titulo} className="w-full h-40 object-cover rounded-md" />
      <h3 className="mt-2 text-xl font-bold">{noticia.titulo}</h3>
      <p>{noticia.descricao}</p>
    </div>
  );
}
