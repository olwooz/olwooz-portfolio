interface Props {
  id: string;
  children: React.ReactNode;
  style?: string;
}

const ContentWrapper = ({ id, children, style }: Props) => {
  return (
    <div id={id} className={`min-h-screen px-[200px] py-[200px] dark:bg-slate-800 dark:text-slate-200 ${style}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
