import React from "react";

import Habilidades from '../Habilidades';
import AtributeField from '../AtributeField';

import "./styles.css";

const SheetData = () => {
const atributos = [
  { name: "Strength" },
  { name: "Dexterity" },
  { name: "Constitution" },
  { name: "Intelligence" },
  { name: "Wisdom" },
  { name: "Charisma" }
];


  return (
    <div className="dados-sheet">
      <div className="coluna-um">
        <div className="linha-um">
          <div className="atributos">
            {/* {atributos.map(atributo => (<AtributeField label={atributo.name} />))} */}
            {/* {atributos.filter(atributo => atributo.name === "Strength").map(atributo => (<AtributeField label={atributo.name} />))} */}

            <AtributeField label="Strength" />
            <AtributeField label="Dexterity" />
            <AtributeField label="Constitution" />
            <AtributeField label="Intelligence" />
            <AtributeField label="Wisdom" />
            <AtributeField label="Charisma" />
          </div>
          <div className="skills-attr">
            <Habilidades />
          </div>
        </div>
        <div className="proeficiencias-languages"></div>
      </div>
      <div className="coluna-dois"></div>
      <div className="coluna-tres"></div>
    </div>
  );
};

export default SheetData;
