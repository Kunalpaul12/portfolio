export const getYears = (date: string): string => {
  const startDate: any = new Date(date);
  const newDate: any = new Date();
  const diffDate: any = new Date(newDate - startDate);
  return (
    diffDate.toISOString().slice(0, 4) -
    1970 +
    '.' +
    diffDate.getMonth() +
    ' Yrs'
  );
};
