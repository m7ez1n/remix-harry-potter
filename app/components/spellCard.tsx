export type SpellProps = {
  id: number;
  spell: string;
  use: string;
};

const SpellCard = ({ spell, use }: Omit<SpellProps, "id">) => (
  <div className="relative bg-white border rounded">
    <div className="p-4">
      <h3 className="text-lg font-bold">
        <p className="stretched-link">{spell}</p>
      </h3>
      <p>{use}</p>
    </div>
  </div>
);

export default SpellCard;
