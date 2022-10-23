import Textarea from '../../components/Textarea';
import TextInput from '../../components/TextInput';
import style from './styles.module.scss';

export default function CadastrarTask() {
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
          />
        </div>

        <div className={style.flexColumn}>
          Descrição:
          <Textarea
            name="descricao"
            placeholder="Digite a descrição da tarefa"
          />
        </div>

        <div className={style.flexColumn}>
          Dia e hora da realização:
          <TextInput name="Data" type="datetime-local" />
        </div>

        <div className={style.flexColumn}>
          Tempo de realização esperado:
          <TextInput name="runtime" type="time" />
        </div>

        <button type="button" className={style.button}>
          Confirmar
        </button>
      </form>
    </div>
  );
}
