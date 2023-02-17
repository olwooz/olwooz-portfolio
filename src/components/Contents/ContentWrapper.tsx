interface Props {
  id: string;
  children: React.ReactNode;
  style?: string;
}

const ContentWrapper = ({ id, children, style }: Props) => {
  return (
    <div id={id} className={`min-h-screen px-[200px] py-[200px] ${style}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
