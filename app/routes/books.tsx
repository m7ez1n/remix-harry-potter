import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";

import BookCard, { BookProps } from "~/components/bookCard";

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
    <>
      {books.map((book) => (
        <BookCard key={`key-for-book-${book.id}`} {...book} />
      ))}
    </>
  );
}
