import { LoaderFunction, useLoaderData } from "remix";

import CharacterCard, { CharacterProps } from "~/components/characterCard";

type LoaderCharacter = {
  characters: CharacterProps[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch("http://hp-api.herokuapp.com/api/characters ");

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
    <>
      {characters.map((character) => (
        <CharacterCard
          {...character}
          key={`key-for-character-${character.id}`}
        />
      ))}
    </>
  );
}
