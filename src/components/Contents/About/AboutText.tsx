import { useTranslation } from 'next-i18next';
interface Props {
  index: number;
}

const AboutText = ({ index }: Props) => {
  const { t } = useTranslation('common');

  return <p className="mb-8 text-xl font-thin">{t(`about.pArray.${index}`)}</p>;
};

export default AboutText;
