import { format, parseISO } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

// eslint-disable-next-line import/prefer-default-export
export const formatDate = (date: string) => {
  return format(parseISO(date), 'dd/MM/yyyy', {
    locale: ptBR,
  });
};

export const formatTime = (date: string) => {
  return format(parseISO(date), 'HH:mm', {
    locale: ptBR,
  });
};
