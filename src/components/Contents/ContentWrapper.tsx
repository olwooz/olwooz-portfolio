interface Props {
  id: string;
  children: React.ReactNode;
  style?: string;
}

const ContentWrapper = ({ id, children, style }: Props) => {
  return (
    <div
      id={id}
      className={`min-h-screen px-[50px] py-[50px] transition dark:bg-slate-800 dark:text-slate-200 sm:px-[100px] sm:py-[100px] xl:px-[200px] xl:py-[200px] ${style}`}
    >
      {children}
    </div>
  );
};

export default ContentWrapper;
