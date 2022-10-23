/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Textarea from '../../components/Textarea';
import TextInput from '../../components/TextInput';
import api from '../../services/api';
import style from './styles.module.scss';

export default function EditarTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [runtime, setRuntime] = useState('');

  const { task_id } = useParams();

  useEffect(() => {
    api
      .get(`/tasks/${task_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        setTitle(response.data.title);
        setDescription(response.data.description);
        setDate(response.data.date);
        setRuntime(response.data.runtime);
      });
  }, []);

  async function handleEditTask() {
    const data = {};

    if (title) {
      Object.assign(data, { title });
    }

    if (description) {
      Object.assign(data, { description });
    }

    if (date) {
      Object.assign(data, { date });
    }

    if (runtime) {
      Object.assign(data, { runtime });
    }

    await api.put(`/tasks/${task_id}`, data, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });
  }

  async function handleDelete() {
    await api.delete(`/tasks/${task_id}`, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    window.location.href = '/list-tasks';
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Editar tarefa</h1>

      <form action="" method="post">
        <div className={style.flexColumn}>
          Titulo da tarefa:
          <TextInput
            name="Titulo"
            placeholder="Digite o titulo da tarefa"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className={style.flexColumn}>
          Descrição:
          <Textarea
            name="descricao"
            placeholder="Digite a descrição da tarefa"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>

        <div className={style.flexColumn}>
          Dia e hora da realização:
          <TextInput
            name="Data"
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
            defaultValue={date}
          />
        </div>

        <div className={style.flexColumn}>
          Tempo de realização esperado:
          <TextInput
            name="runtime"
            type="time"
            onChange={(e) => setRuntime(e.target.value)}
            value={runtime}
          />
        </div>

        <button type="button" className={style.button} onClick={handleEditTask}>
          Confirmar
        </button>
        <button type="button" className={style.delete} onClick={handleDelete}>
          Deletar Sala
        </button>
      </form>
    </div>
  );
}
