import { Link } from 'react-router-dom';
import { limitDescription } from '../../utils/limitDescription';
import style from './style.module.scss';

export default function CardTasks() {
  return (
    <div className={style.card}>
      <h1>Lavar o cabelo</h1>
      <hr />
      <div className={style.description}>
        <p>
          {limitDescription(
            'Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido Eu tenho que lavar o cabelo, pois ele está sujo e fedido'
          )}
        </p>
      </div>
      <div className={style.info}>
        <p className={style.date}>
          Data de realização: <span>10/10/2021</span>
        </p>
        <p className={style.date}>
          Horário de realização: <span>20h32min</span>
        </p>
        <p>
          Tempo de execução: <span>2 horas</span>
        </p>
        <Link to="/">Ver mais</Link>
      </div>
    </div>
  );
}
