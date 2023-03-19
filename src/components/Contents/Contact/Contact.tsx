import ContentWrapper from '@components/Contents/ContentWrapper';
import ContactInfo from '@Contact/ContactInfo';
import { EMAIL, PHONE } from '@Contact/data';

const Contact = () => {
  return (
    <ContentWrapper id="contact">
      <div className="m-auto text-center">
        <h1 className="pb-32 text-5xl font-thin">Contact</h1>
        <div className="pb-12 text-left sm:text-center">
          <ContactInfo info={PHONE} name="PhoneIcon" />
          <ContactInfo info={EMAIL} name="EmailIcon" link={`mailto:${EMAIL}`} />
          <ContactInfo info="kakaotalk" name="TalkIcon" />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Contact;
