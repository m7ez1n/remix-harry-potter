import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";

type BookProps = {
  id: number;
  title: string;
  releaseDay: string;
  author: string;
  description: string;
};

type LoaderBooks = {
  books: BookProps[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://fedeperin-harry-potter-api-en.herokuapp.com/books"
  );

  return {
    books: await res.json(),
  };
};

export function ErrorBoundary() {
  return (
    <h1 className="text-red-500">
      Whoops this route books.tsx have an error 💣
    </h1>
  );
}

export default function () {
  const { books } = useLoaderData<LoaderBooks>();

  return (
    <section className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {books.map((book) => (
        <Fragment key={`key-for-character-${book.id}`}>
          <p>{book.title}</p>
        </Fragment>
      ))}
    </section>
  );
}
