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

export { FormatDate, SortContent, CapitiliseAndRemoveDash };
