import React from "react";
import PropTypes from "prop-types";

function PokemonDetail({ name, picture, abilitiesArray }) {
  return (
    <div>
      <div>name: {name}</div>
      <div>
        picture: <img src={picture} alt="pokemon" />
      </div>
      <div>
        <ul>
          {abilitiesArray.map(({ ability: { name } }, index) => {
            return (
              <li key={name}>
                Abilitiy {index + 1}: {name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

PokemonDetail.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  abilitiesArray: PropTypes.array.isRequired,
};

export default PokemonDetail;
