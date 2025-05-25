import type { Character } from './Character';

type CharacterCardProps = {
  character: Character;
};

export const CharacterCard = (props: CharacterCardProps) => {
  return (
    <>
      <div className="w-75 h-100 bg-green-400 border border-black border-3 rounded-lg shadow-sm  mx-auto">
        <a href={props.character.url}>
          <img
            className="rounded-t-lg mx-auto mt-5 size-48 border-black border-3"
            src={props.character.image}
            alt={props.character.name}
          />
        </a>

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black text-center">
            {props.character.name}
          </h5>

          <span className="mb-3 pr-3 text-xl font-normal text-black ">
            {props.character.id}
          </span>
          <span className="mb-3 pr-3  text-xl font-normal text-black ">
            {props.character.gender}
          </span>
          <span className="mb-3 pr-3  text-xl font-normal text-black ">
            {props.character.status}
          </span>
          <span className="mb-3 pr-3  text-xl font-normal text-black">
            {props.character.species}
          </span>
          <br />
          <span className=" mb-3 pr-3  text-xl font-normal text-black">
            {props.character.location.name}
          </span>
        </div>
      </div>
    </>
  );
};
