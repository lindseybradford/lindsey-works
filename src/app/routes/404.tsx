import { Link } from '@src/components/ui/link';

export const NotFoundRoute = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <article className="prose lg:prose-xl">
          <h1>404: Not Found</h1>

          <p>Sorry, we couldn't find the page you were looking for.</p>
          <Link to="/" replace>
            Go to Home
          </Link>
        </article>
      </div>
    </>
  );
};
