import style from './styles.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  placeholder?: string;
  type: string;
}

export default function TextInput({
  name,
  placeholder,
  type,
  ...rest
}: TextInputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className={style.input}
      {...rest}
    />
  );
}
