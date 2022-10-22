import TextInput from '../../components/TextInput';
import style from './styles.module.scss';

export default function Cadastrar() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Cadastrar</h1>

      <form action="" method="post">
        <div className={style.flexColumn}>
          Nome:
          <TextInput name="nome" placeholder="Digite seu nome" type="text" />
        </div>
        <div className={style.flexColumn}>
          Endereço de e-mail:
          <TextInput name="email" placeholder="Digite seu e-mail" type="text" />
        </div>
        <div className={style.flexColumn}>
          Sua senha:
          <TextInput
            name="password"
            placeholder="Digite sua senha"
            type="password"
          />
          <TextInput
            name="password"
            placeholder="Confirme sua senha"
            type="password"
          />
        </div>
        <button type="button" className={style.button}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
