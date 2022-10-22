import { Link } from 'react-router-dom';
import Ilustration from '../../components/Ilustration';
import style from './styles.module.scss';

export default function Home() {
  return (
    <div className={style.container}>
      <div>
        <h1 className={style.title}>✌ Olá, seja bem-vindo!</h1>
        <h2 className={style.subtitle}>
          Vamos juntos buscar uma <span>produtividade </span>
          maior!!
        </h2>
        <div className={style.containerLogin}>
          Cadastre e gerencie suas tarefas
          <Link to="/cadastrar">Cadastre-se</Link>
        </div>
      </div>
      <div>
        <Ilustration />
      </div>
    </div>
  );
}
