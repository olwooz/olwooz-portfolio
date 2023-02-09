interface Props {
  content: string;
}

const AboutText = ({ content }: Props) => {
  return <p className="mb-8">{content}</p>;
};

export default AboutText;
