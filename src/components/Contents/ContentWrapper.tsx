interface Props {
  children: React.ReactNode;
  style?: string;
}

const ContentWrapper = ({ children, style }: Props) => {
  return <div className={`min-h-screen px-[300px] py-[200px] ${style}`}>{children}</div>;
};

export default ContentWrapper;
