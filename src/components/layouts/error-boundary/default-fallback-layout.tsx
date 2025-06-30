import { useEffect, useState } from 'react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import { ContentSectionLayout } from '@src/constants';
import { Paragraph } from '@src/components/ui/paragraph';
import { Heading } from '@src/components/ui/heading';

export const DefaultErrorFallback = () => {
  const error = useRouteError();
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (error instanceof Error) {
      setErrorMsg(error.message);
    }
  }, [error]);

  const { button } = ContentSectionLayout();

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md">
        <article className="prose lg:prose-xl pb-8 mb-12 border-black border-b-2 ">
          <Heading level={1}>
            {isRouteErrorResponse(error) ? error.status : 'Error'}
          </Heading>
          <Heading level={2}>The projector is down</Heading>
          {errorMsg && (
            <Paragraph isFlush>
              <u>Problem:</u> {errorMsg}
            </Paragraph>
          )}
        </article>
        <button onClick={() => window.location.reload()} className={button()}>
          Retry
        </button>
      </div>
    </div>
  );
};
