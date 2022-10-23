/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import Textarea from '../../components/Textarea';
import TextInput from '../../components/TextInput';
import api from '../../services/api';
import style from './styles.module.scss';

export default function CadastrarTask() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [runtime, setRuntime] = useState('');

  async function handleSubmit() {
    await api.post(
      '/tasks',
      {
        title: title.toLocaleLowerCase(),
        description,
        date,
        runtime,
      },
      {
        headers: {
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }
    );

    window.location.href = '/list-tasks';
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Cadastrar tarefas</h1>

      <form action="" method="post">
        <div className={style.flexColumn}>
          Titulo da tarefa:
          <TextInput
            name="Titulo"
            placeholder="Digite o titulo da tarefa"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className={style.flexColumn}>
          Descrição:
          <Textarea
            name="descricao"
            placeholder="Digite a descrição da tarefa"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className={style.flexColumn}>
          Dia e hora da realização:
          <TextInput
            name="Data"
            type="datetime-local"
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className={style.flexColumn}>
          Tempo de realização esperado:
          <TextInput
            name="runtime"
            type="time"
            onChange={(e) => setRuntime(e.target.value)}
          />
        </div>

        <button type="button" className={style.button} onClick={handleSubmit}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
