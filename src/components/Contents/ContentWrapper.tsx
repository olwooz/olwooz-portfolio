interface Props {
  children: React.ReactNode;
  style: string;
}

const ContentWrapper = ({ children, style }: Props) => {
  return <div className={`min-h-screen p-[200px] ${style}`}>{children}</div>;
};

export default ContentWrapper;
