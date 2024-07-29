import { Paragraph } from '@src/components/ui/paragraph';
export const IntroductionMain = () => {
  return (
    <div>
      <h1 className="text-5xl font-mono max-w-xxl">
        Hi, I’m Lindsey aka{' '}
        <span className="text-technicolor-orange">UI/UX Projectionist.</span>
      </h1>
      <Paragraph>
        With 12+ years experience in Brand and Product, I’ve used my frontend
        expertise to craft beautiful, performant and highly-functional digital
        interfaces.
      </Paragraph>
      <Paragraph>
        I believe in leaving things better than I found them, making clarity
        before haste, and that our future is best made together.
      </Paragraph>
    </div>
  );
};
