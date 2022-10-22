import CardTasks from '../../components/CardTasks';
import style from './styles.module.scss';

export default function ListTasks() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Tarefas cadastradas</h1>
      <div className={style.containerTasks}>
        <CardTasks />
        <CardTasks />
        <CardTasks />
        <CardTasks />
      </div>
    </div>
  );
}
