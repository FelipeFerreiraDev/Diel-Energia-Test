import style from './styles.module.scss';

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  placeholder?: string;
}

export default function Textarea({
  name,
  placeholder,
  ...rest
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={style.input}
      {...rest}
    />
  );
}
