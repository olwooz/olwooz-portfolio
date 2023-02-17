import ContentWrapper from '../ContentWrapper';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <ContentWrapper id="contact" style="flex item-center">
      <div className="m-auto text-center">
        <h1 className="pb-48 text-5xl font-thin">Contact</h1>
        <div className="pb-12">
          <ContactInfo info="010-1234-1234" image="/icons/phone.png" />
          <ContactInfo info="email@email.com" image="/icons/email.png" link="mailto:email@email.com" />
          <ContactInfo info="kakaotalk" image="/icons/talk.svg" />
        </div>
        <p className="text-sm font-light">연락 주세용 *^^*</p>
      </div>
    </ContentWrapper>
  );
};

export default Contact;
