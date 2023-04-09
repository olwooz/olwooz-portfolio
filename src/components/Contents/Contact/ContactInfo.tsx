import { ComponentType } from 'react';
import Link from 'next/link';
import { Icons } from '@Icons';
import { IconNames, IconProps } from '@Icons/types';
import { CONTACT_ICON_STYLE } from '@constants/styles';

interface Props {
  info: string;
  name: IconNames;
  link?: string;
}

const ContactInfo = ({ info, name, link }: Props) => {
  const Icon: ComponentType<IconProps> = Icons[name];

  const InfoElem = (
    <>
      <Icon style={CONTACT_ICON_STYLE} />
      <span className="ml-4 align-middle text-xl font-light">{info}</span>
    </>
  );

  return <div className="p-12">{link ? <Link href={link}>{InfoElem}</Link> : InfoElem}</div>;
};

export default ContactInfo;
