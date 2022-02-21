export type BookProps = {
  id: number;
  title: string;
  releaseDay: string;
  author: string;
  description: string;
};

const SpellCard = ({
  author,
  description,
  releaseDay,
  title,
}: Omit<BookProps, "id">) => (
  <div className="relative bg-white border rounded">
    <div className="p-4">
      <h3 className="text-lg font-bold">
        <p className="stretched-link">{title}</p>
      </h3>
      <div className="flex justify-between px-2 py-4">
        <p className="text-sm font-bold text-gray-900">Author</p>
        <p className="text-sm text-gray-600">{author}</p>
      </div>
      <div className="flex justify-between px-2 py-4">
        <p className="text-sm font-bold text-gray-900">Release Day</p>
        <p className="text-sm text-gray-600">{releaseDay}</p>
      </div>
      <div className="flex flex-col px-2 py-4">
        <p className="text-sm font-bold text-black">Description</p>
        <p className="pt-2 text-sm text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

export default SpellCard;
