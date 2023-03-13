import ContentWrapper from '../ContentWrapper';
import AboutText from './AboutText';

const IMG_WIDTH = 'w-[216px] sm:w-[324px] 2xl:min-w-[432px]';
const IMG_HEIGHT = 'h-[270px] sm:h-[405px] 2xl:h-[540px]';

const p1 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis nisi nemo eos? Quod reiciendis, commodi unde vel ducimus voluptatem? Dignissimos velit hic, in id placeat perferendis corporis distinctio sunt cum.';
const p2 =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore illum inventore repudiandae perferendis nesciunt, et, earum, quod alias corrupti reiciendis pariatur repellendus voluptates debitis modi dolor nobis ex soluta! Reiciendis eveniet ipsam veniam mollitia incidunt nisi consequuntur fugiat quis dicta quisquam. Nisi animi, ad quam alias voluptas perferendis blanditiis aut expedita repellendus voluptate doloremque in assumenda hic explicabo maiores corporis, fuga sapiente ratione magnam laboriosam non nulla error? Dolores, vero nesciunt esse soluta perspiciatis beatae rem neque officiis. Facilis veniam dolore blanditiis! Ducimus blanditiis officiis, nostrum soluta sequi maiores. Consequuntur perferendis hic alias ex nostrum dignissimos amet pariatur eligendi.';

const About = () => {
  return (
    <ContentWrapper id="about" style="2xl:flex 2xl:justify-between">
      <div className="2xl:ml-[100px] 2xl:mr-[100px]">
        <h1 className="mb-8 text-5xl font-thin">About</h1>
        <AboutText content={p1} />
        <AboutText content={p2} />
      </div>
      <div className={`mx-auto 2xl:mr-[100px] ${IMG_HEIGHT} ${IMG_WIDTH} border-2 border-dashed border-gray-400`}>Photo</div>
    </ContentWrapper>
  );
};

export default About;
