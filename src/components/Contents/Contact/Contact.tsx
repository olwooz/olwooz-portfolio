import ContentWrapper from '../ContentWrapper';
import ContactInfo from './ContactInfo';

const Contact = () => {
  return (
    <ContentWrapper id="contact">
      <div className="m-auto text-center">
        <h1 className="pb-32 text-5xl font-thin">Contact</h1>
        <div className="pb-12 text-left sm:text-center">
          <ContactInfo info="010-1234-1234" name="PhoneIcon" />
          <ContactInfo info="email@email.com" name="EmailIcon" link="mailto:email@email.com" />
          <ContactInfo info="kakaotalk" name="TalkIcon" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Contact;
