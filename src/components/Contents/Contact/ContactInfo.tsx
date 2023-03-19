import { ComponentType } from 'react';
import Link from 'next/link';
import { Icons } from '@components/Icons';
import { IconNames, IconProps } from '@components/Icons/types';

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
      <span className="ml-4 align-middle text-lg font-bold">{info}</span>
    </>
  );

  return <div className="p-12">{link ? <Link href={link}>{InfoElem}</Link> : InfoElem}</div>;
};

export default ContactInfo;
