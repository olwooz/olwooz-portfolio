interface Props {
  text: string;
}

const HeaderButton = ({ text }: Props) => {
  return <button className="px-4">{text}</button>;
};

export default HeaderButton;
