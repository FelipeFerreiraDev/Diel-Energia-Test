import { Link } from 'react-router-dom';
import style from './styles.module.scss';

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>
          diel <span>Tasks</span>
        </h1>
      </div>
      <Link to="/" className={style.login}>
        login
      </Link>
    </header>
  );
}
