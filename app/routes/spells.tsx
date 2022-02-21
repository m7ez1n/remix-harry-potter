import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";

import SpellCard, { SpellProps } from "~/components/spellCard";

type LoaderSpells = {
  spells: SpellProps[];
};

export const loader: LoaderFunction = async () => {
  const res = await fetch(
    "https://fedeperin-harry-potter-api-en.herokuapp.com/spells"
  );

  return {
    spells: await res.json(),
  };
};

export function ErrorBoundary() {
  return (
    <h1 className="text-red-500">
      Whoops this route spells.tsx have an error 💣
    </h1>
  );
}

export default function () {
  const { spells } = useLoaderData<LoaderSpells>();

  return (
    <>
      {spells.map((spell) => (
        <SpellCard {...spell} key={`key-for-spell-${spell.id}`} />
      ))}
    </>
  );
}
