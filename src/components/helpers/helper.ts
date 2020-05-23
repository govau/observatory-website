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

const SortBlog = (blogA: any, blogB: any) => {
  return (
    new Date(blogB.frontmatter.date).getTime() -
    new Date(blogA.frontmatter.date).getTime()
  );
};

export { FormatDate, SortBlog };
