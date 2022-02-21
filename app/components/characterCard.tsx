export type CharacterProps = {
  id: number;
  character: string;
  hogwartsHouse: string;
  interpretedBy: string;
  image: string;
  nickname: string;
  hogwartsStudent: boolean;
};

const CharacterCard = ({
  character,
  hogwartsHouse,
  interpretedBy,
  image,
  hogwartsStudent,
  nickname,
}: Omit<CharacterProps, "id">) => (
  <div className="max-w-xs">
    <div className="relative bg-white border rounded">
      <div className="p-2 photo-wrapper">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src={image}
          alt={character}
        />
      </div>

      <div className="p-2">
        <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
          {character}
        </h3>
        <div className="text-xs font-semibold text-center text-gray-400">
          <p>{interpretedBy}</p>
        </div>

        <table className="my-3 text-xs">
          <tbody>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Hogwarts House
              </td>
              <td className="px-2 py-2">{hogwartsHouse}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Nickname
              </td>
              <td className="px-2 py-2">{nickname}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Hogwarts Student
              </td>
              <td className="px-2 py-2">{hogwartsStudent ? "Yes" : "No"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default CharacterCard;
