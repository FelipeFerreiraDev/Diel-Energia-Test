import { Routes, Route } from 'react-router-dom';
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
    </Routes>
  );
}
