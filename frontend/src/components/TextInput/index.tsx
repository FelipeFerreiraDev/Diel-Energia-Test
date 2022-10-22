import style from './styles.module.scss';

interface TextInputProps {
  name: string;
  placeholder: string;
  type: string;
}

export default function TextInput({ name, placeholder, type }: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style.input}
    />
  );
}
