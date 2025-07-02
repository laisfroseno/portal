import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import FaleConosco from './pages/FaleConosco';
import QuemSomos from './pages/QuemSomos';
import Parceiro from './pages/Parceiro';
import Noticia from './pages/Noticia';
import SubmeterReportagem from './pages/SubmeterReportagem';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faleconosco" element={<FaleConosco />} />
        <Route path="/quemsomos" element={<QuemSomos />} />
        <Route path="/parceiro" element={<Parceiro />} />
        <Route path="/noticia" element={<Noticia />} />
        <Route path="/submeterreportagem" element={<SubmeterReportagem />} />
      </Routes>
    </Router>
  );
}
