import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import style from './styles.module.scss';

export default function Header() {
  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token') || '');
  }, []);

  function handleLogout() {
    localStorage.removeItem('token');
    setToken('');
  }

  return (
    <header className={style.header}>
      <Link to="/">
        <div className={style.logo}>
          <h1>
            diel <span>Tasks</span>
          </h1>
        </div>
      </Link>
      {token ? (
        <div className={style.menu}>
          <Link to="/list-tasks">Listar tarefas</Link>
          <Link to="/cadastrar-task">Cadastrar tarefa</Link>
        </div>
      ) : null}

      {token ? (
        // eslint-disable-next-line react/jsx-no-bind
        <Link to="/login" className={style.login} onClick={handleLogout}>
          logout
        </Link>
      ) : (
        <Link to="/login" className={style.login}>
          login
        </Link>
      )}
    </header>
  );
}
