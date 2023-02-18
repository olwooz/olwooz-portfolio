import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { IconNames } from '@/components/Icons/types';

interface Props {
  info: string;
  name: IconNames;
  link?: string;
}

const ContactInfo = ({ info, name, link }: Props) => {
  const Icon = Icons[name];

  const InfoElem = (
    <>
      <Icon />
      <p className="ml-4 inline-block align-middle text-lg font-bold">{info}</p>
    </>
  );

  return <div className="inline-block w-[18vw] p-12 text-center">{link ? <Link href={link}>{InfoElem}</Link> : InfoElem}</div>;
};

export default ContactInfo;
