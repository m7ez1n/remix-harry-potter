export type CharacterProps = {
  id: number;
  name: string;
  house: string;
  ancestry: string;
  image: string;
  actor: string;
  dateOfBirth: string;
  hogwartsStudent: boolean
};

const CharacterCard = ({
  name,
  house,
  actor,
  image,
  hogwartsStudent,
  ancestry,
  dateOfBirth
}: Omit<CharacterProps, "id">) => (
  <div className="max-w-xs">
    <div className="relative bg-white border rounded">
      <div className="p-2 photo-wrapper">
        <img
          className="w-32 h-32 mx-auto rounded-full"
          src={image}
          alt={name}
        />
      </div>

      <div className="p-2">
        <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
          {name}
        </h3>
        <div className="text-xs font-semibold text-center text-gray-400">
          <p>{actor}</p>
        </div>

        <table className="my-3 text-xs">
          <tbody>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Hogwarts House
              </td>
              <td className="px-2 py-2">{house}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Ancestry
              </td>
              <td className="px-2 py-2">{ancestry}</td>
            </tr>
            <tr>
              <td className="px-2 py-2 font-semibold text-gray-500">
                Date of Birth
              </td>
              <td className="px-2 py-2">{dateOfBirth}</td>
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
