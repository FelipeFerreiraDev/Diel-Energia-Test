import style from './styles.module.scss';

interface TextareaProps {
  name: string;
  placeholder?: string;
}

export default function Textarea({ name, placeholder }: TextareaProps) {
  return (
    <textarea name={name} placeholder={placeholder} className={style.input} />
  );
}
