import { useState } from 'react';
import TextInput from '../../components/TextInput';
import api from '../../services/api';
import style from './styles.module.scss';

export default function Cadastrar() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmationPasssword, setConfirmationPassword] = useState('');

  async function handleCreateAccount() {
    const a = await api.post('/users', {
      name,
      email,
      password,
    });
  }

  return (
    <div className={style.container}>
      <h1 className={style.title}>Cadastrar</h1>

      <form className={style.form}>
        <div className={style.flexColumn}>
          Nome:
          <TextInput
            name="nome"
            placeholder="Digite seu nome"
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={style.flexColumn}>
          Endereço de e-mail:
          <TextInput
            name="email"
            placeholder="Digite seu e-mail"
            type="text"
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
          <TextInput
            name="password"
            placeholder="Confirme sua senha"
            type="password"
            onChange={(e) => setConfirmationPassword(e.target.value)}
          />
        </div>
        <button
          type="button"
          className={style.button}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleCreateAccount}
        >
          Confirmar
        </button>
      </form>
    </div>
  );
}
