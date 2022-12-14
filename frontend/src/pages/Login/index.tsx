/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useState } from 'react';
import TextInput from '../../components/TextInput';
import api from '../../services/api';
import style from './styles.module.scss';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit() {
    const data = await api.post('/sessions', {
      email,
      password,
    });

    localStorage.setItem('token', data.data.token);
    localStorage.setItem('user', JSON.stringify(data.data.user));

    window.location.href = '/list-tasks';
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Login</h1>

      <form action="" method="post">
        <div className={style.flexColumn}>
          Endereço de e-mail:
          <TextInput
            name="email"
            placeholder="Digite seu e-mail"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={style.flexColumn}>
          Sua senha:
          <TextInput
            name="password"
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" className={style.button} onClick={handleSubmit}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
