/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link } from 'react-router-dom';
import { formatDate, formatTime } from '../../utils/date';
import { limitDescription } from '../../utils/limitDescription';
import style from './style.module.scss';

interface Tasks {
  id: string;
  title: string;
  description: string;
  date: Date;
  runtime: string;
}

export default function CardTasks({
  id,
  title,
  description,
  date,
  runtime,
}: Tasks) {
  const titleUpper = title[0].toUpperCase() + title.slice(1);
  return (
    <div className={style.card}>
      <h1>{titleUpper}</h1>
      <hr />
      <div className={style.description}>
        <p>{limitDescription(description)}</p>
      </div>
      <div className={style.info}>
        <p className={style.date}>
          Data de realização: <span>{formatDate(date.toString())}</span>
        </p>
        <p className={style.date}>
          Horário de realização: <span>{formatTime(date.toString())}</span>
        </p>
        <p>
          Tempo de execução: <span>{runtime}</span>
        </p>
        <Link to={`/editar-task/${id}`}>Ver mais</Link>
      </div>
    </div>
  );
}
