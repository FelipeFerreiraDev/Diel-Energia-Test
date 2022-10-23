/* eslint-disable @typescript-eslint/no-floating-promises */
import { FilePlus, PlusCircle } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CardTasks from '../../components/CardTasks';
import TextInput from '../../components/TextInput';
import api from '../../services/api';
import style from './styles.module.scss';

interface Tasks {
  id: string;
  title: string;
  description: string;
  date: Date;
  runtime: string;
  user_id: string;
}

export default function ListTasks() {
  const [tasks, setTasks] = useState<Tasks[]>([]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    api
      .get('/tasks', {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTasks(response.data);
      });
  }, []);

  async function handleSearch(text: string) {
    await api
      .post(
        '/tasks/title',
        {
          title: text.toLowerCase(),
        },
        {
          headers: {
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      )
      .then((response) => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        setTasks(response.data);
      });
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Tarefas cadastradas</h1>
      <div className={style.busca}>
        <TextInput
          name="busca"
          placeholder="Digite o nome da tarefa"
          type="text"
          onChange={(e) => {
            handleSearch(e.target.value);
          }}
        />
        <Link to="/cadastrar-task">
          <PlusCircle size={30} />
        </Link>
      </div>
      <div className={style.containerTasks}>
        {tasks.map((task) => {
          return (
            <CardTasks
              key={task.id}
              id={task.id}
              date={task.date}
              runtime={task.runtime}
              title={task.title}
              description={task.description}
            />
          );
        })}
      </div>
    </div>
  );
}
