import { ContentSectionLayout } from '@src/constants';
import { Paragraph } from '@src/components/ui/paragraph';
import { Heading } from '@src/components/ui/heading';

type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorFallback = (props: ErrorFallbackProps) => {
  const { button } = ContentSectionLayout();

  return (
    <div className="min-h-screen flex justify-center">
      <div className="flex items-center justify-center">
        <div className="text-center">
          <Heading className="mb-2" level={2} isFlush>
            Something went wrong
          </Heading>

          <Paragraph className="mb-4" isFlush>
            <b className="bg-white p-1">{props.error.message}</b>
          </Paragraph>
          <button onClick={props.resetErrorBoundary} className={button()}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};
