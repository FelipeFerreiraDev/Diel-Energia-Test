import style from './styles.module.scss';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.copyright}>
        <p>© 2022 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}
