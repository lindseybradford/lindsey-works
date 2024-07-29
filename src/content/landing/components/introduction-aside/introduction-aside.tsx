import { MetaLabel } from 'src/components/ui/meta-label';
import { Paragraph } from 'src/components/ui/paragraph';

export const IntroductionAside = () => {
  return (
    <aside className="flex flex-col items-center justify-center space-y-4">
      <ul className="">
        <li>
          <Paragraph>12</Paragraph>
        </li>
      </ul>
      <MetaLabel>Years experience</MetaLabel>
      <ul className="">
        <li>
          <Paragraph>Vue</Paragraph>
        </li>
        <li>
          <Paragraph>React</Paragraph>
        </li>
        <li>
          <Paragraph>NextJS</Paragraph>
        </li>
        <li>
          <Paragraph>TypeScript</Paragraph>
        </li>
        <li>
          <Paragraph>GraphQL</Paragraph>
        </li>
        <li>
          <Paragraph>Node.js</Paragraph>
        </li>
        <li>
          <Paragraph>CSS/HTML/JS</Paragraph>
        </li>
      </ul>
      <MetaLabel>Languages</MetaLabel>
      <ul className="">
        <li>
          <Paragraph>Web apps</Paragraph>
        </li>
        <li>
          <Paragraph>Design systems</Paragraph>
        </li>
        <li>
          <Paragraph>Websites</Paragraph>
        </li>
      </ul>
      <MetaLabel>Mediums</MetaLabel>
    </aside>
  );
};
