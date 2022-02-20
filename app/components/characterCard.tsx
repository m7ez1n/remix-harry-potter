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
    <div className="bg-white shadow-xl rounded-lg py-3">
      <div className="photo-wrapper p-2">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src={image}
          alt={character}
        />
      </div>

      <div className="p-2">
        <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
          {character}
        </h3>
        <div className="text-center text-gray-400 text-xs font-semibold">
          <p>{interpretedBy}</p>
        </div>

        <table className="text-xs my-3">
          <tbody>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">
                Hogwarts House
              </td>
              <td className="px-2 py-2">{hogwartsHouse}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">
                Nickname
              </td>
              <td className="px-2 py-2">{nickname}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 text-gray-500 font-semibold">
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
