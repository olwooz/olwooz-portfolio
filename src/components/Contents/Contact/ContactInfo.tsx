import Link from 'next/link';
import { Icons } from '@/components/Icons';
import { IconNames, IconProps } from '@/components/Icons/types';
import { ComponentType } from 'react';

interface Props {
  info: string;
  name: IconNames;
  link?: string;
}

const iconStyle = 'transition-color inline-block dark:fill-slate-300 dark:hover:fill-slate-100';

const ContactInfo = ({ info, name, link }: Props) => {
  const Icon: ComponentType<IconProps> = Icons[name];

  const InfoElem = (
    <>
      <Icon style={iconStyle} />
      <p className="ml-4 inline-block align-middle text-lg font-bold">{info}</p>
    </>
  );

  return <div className="inline-block w-[18vw] p-12 text-center">{link ? <Link href={link}>{InfoElem}</Link> : InfoElem}</div>;
};

export default ContactInfo;
