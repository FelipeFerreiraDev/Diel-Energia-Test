import { Routes, Route } from 'react-router-dom';
import Cadastrar from './pages/Cadastrar';
import CadastrarTask from './pages/Cadastrar Tasks';
import Home from './pages/Home';
import ListTasks from './pages/ListTasks';
import Login from './pages/Login';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cadastrar" element={<Cadastrar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/list-tasks" element={<ListTasks />} />
      <Route path="/cadastrar-task" element={<CadastrarTask />} />
    </Routes>
  );
}
