export default function NoticiaCard({ noticia }) {
  return <div><img src={noticia.imagem_url} alt="" /><h2>{noticia.titulo}</h2></div>
}