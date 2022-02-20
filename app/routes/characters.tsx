import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";

import CharacterCard, { CharacterProps } from "~/components/characterCard";

type LoaderCharacter = {
  characters: CharacterProps[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://fedeperin-harry-potter-api-en.herokuapp.com/characters"
  );

  return {
    characters: await res.json(),
  };
};

export function ErrorBoundary() {
  return (
    <h1 className="text-red-500">
      Whoops this route characters.tsx have an error 💣
    </h1>
  );
}

export default function () {
  const { characters } = useLoaderData<LoaderCharacter>();

  return (
    <section className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-8">
      {characters.map((character) => (
        <Fragment key={`key-for-character-${character.id}`}>
          <CharacterCard {...character} />
        </Fragment>
      ))}
    </section>
  );
}
