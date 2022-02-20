import { Fragment } from "react";
import { LoaderFunction, useLoaderData } from "remix";

type SpellProps = {
  id: number;
  spell: string;
  use: string;
};

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
    <section className="container grid gap-8 pt-6 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {spells.map((spell) => (
        <Fragment key={`key-for-character-${spell.id}`}>
          <p>{spell.spell}</p>
        </Fragment>
      ))}
    </section>
  );
}
