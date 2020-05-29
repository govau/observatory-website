const months: Array<string> = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const FormatDate: (date: string) => string = (date) => {
  const date_obj: Date = new Date(date);
  const month: any = date_obj.getMonth();
  const year: any = date_obj.getFullYear();
  return `${date_obj.getDate()} ${months[month]} ${year}`;
};

const SortContent = (PageOne: any, PageTwo: any) => {
  return (
    new Date(PageTwo.frontmatter.date).getTime() -
    new Date(PageOne.frontmatter.date).getTime()
  );
};

const CapitiliseAndRemoveDash: (word: string) => string = (word) => {
  const capitialised = word.charAt(0).toUpperCase() + word.slice(1);
  return capitialised.replace(/-/g, " ");
};

const ABNValidation: (abn: string) => boolean = (abn) => {
  const weights: Array<number> = [10, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  if (abn.length !== 11) return false;

  const abnNum: number = parseInt(abn);

  if (isNaN(abnNum)) return false;

  let sum = 0;
  weights.forEach((weight: number, position: number) => {
    const digit: any = abnNum[position] - (position !== 0 ? 0 : 1);
    sum += weight * digit;
  });
  return sum % 89 == 0;
};

export { FormatDate, SortContent, CapitiliseAndRemoveDash, ABNValidation };
