import Image from 'next/image';
import Link from 'next/link';

interface Props {
  info: string;
  image: string;
  link?: string;
}

const ContactInfo = ({ info, image, link }: Props) => {
  const InfoElem = (
    <>
      <Image src={image} alt={info} width="20" height="20" className="mr-4 inline-block" />
      <p className="inline-block align-middle text-lg font-bold">{info}</p>
    </>
  );

  return <div className="inline-block w-[18vw] p-12 text-center">{link ? <Link href={link}>{InfoElem}</Link> : InfoElem}</div>;
};

export default ContactInfo;
