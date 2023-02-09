import ContentWrapper from '../ContentWrapper';
import AboutText from './AboutText';

const IMG_WIDTH = 432;
const IMG_HEIGHT = 540;
const p1 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi nemo eos? Quod reiciendis, commodi unde vel ducimus voluptatem? Dignissimos velit hic, in id placeat perferendis corporis distinctio sunt cum.';
const p2 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore illum inventore repudiandae perferendis nesciunt, et, earum, quod alias corrupti reiciendis pariatur repellendus voluptates debitis modi dolor nobis ex soluta! Reiciendis eveniet ipsam veniam mollitia incidunt nisi consequuntur fugiat quis dicta quisquam. Nisi animi, ad quam alias voluptas perferendis blanditiis aut expedita repellendus voluptate doloremque in assumenda hic explicabo maiores corporis, fuga sapiente ratione magnam laboriosam non nulla error? Dolores, vero nesciunt esse soluta perspiciatis beatae rem neque officiis. Facilis veniam dolore blanditiis! Ducimus blanditiis officiis, nostrum soluta sequi maiores. Consequuntur perferendis hic alias ex nostrum dignissimos amet pariatur eligendi.';

const About = () => {
  return (
    <ContentWrapper style="flex justify-between">
      <div className="ml-[100px] mr-[100px]">
        <h1 className="mb-8 text-5xl font-thin">About</h1>
        <AboutText content={p1} />
        <AboutText content={p2} />
      </div>
      <div className={`mr-[100px] h-[${IMG_HEIGHT}px] min-w-[${IMG_WIDTH}px] border-2 border-dashed border-gray-400`}>Photo</div>
    </ContentWrapper>
  );
};

export default About;
