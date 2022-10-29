export const formatedDate = (date: string) =>
  new Date(date).toDateString().split(' ').slice(1).join(' ');
