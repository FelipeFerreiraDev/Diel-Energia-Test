import style from './styles.module.scss';

export default function Cadastrar() {
  return (
    <div className={style.container}>
      <h1>Cadastrar</h1>

      <form action="" method="post">
        <input type="text" name="nome" placeholder="Nome" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="senha" placeholder="Senha" />
        <input
          type="password"
          name="confirmarSenha"
          placeholder="Confirmar senha"
        />
      </form>
    </div>
  );
}
