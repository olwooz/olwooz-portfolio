import ContentWrapper from '@components/Contents/ContentWrapper';
import ContactInfo from '@Contact/ContactInfo';
import { EMAIL } from '@Contact/data';

const Contact = () => {
  return (
    <ContentWrapper id="contact">
      <div className="m-auto text-center">
        <h1 className="pb-32 text-5xl font-light">Contact</h1>
        <div className="pb-12 text-left sm:text-center">
          <ContactInfo info={EMAIL} name="EmailIcon" link={`mailto:${EMAIL}`} />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Contact;
