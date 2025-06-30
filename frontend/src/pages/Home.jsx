import Header from '../components/Header'
import Footer from '../components/Footer'
import NoticiaCard from '../components/NoticiaCard'
import PatrocinadoresBar from '../components/PatrocinadoresBar'
import { useEffect, useState } from 'react'

export default function Home() {
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/noticias')
      .then(res => res.json())
      .then(data => setNoticias(data))
  }, [])

  return (
    <>
      <Header />
      <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {noticias.map(n => <NoticiaCard key={n.id} noticia={n} />)}
      </main>
      <Footer />
      <PatrocinadoresBar />
    </>
  )
}
