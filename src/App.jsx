import "./App.css";
import skyrim from "./assets/skyrim.png";
import sky from "./assets/sky.png";
import strongEnough from "./assets/strongEnough.png";
import deSims from "./assets/deSims.png";
import mines from "./assets/mines.png";
import goti from "./assets/goti.png";
import sense from "./assets/sense.png";
import retsuko from "./assets/retsuko.png";
import aang from "./assets/aang.png";
import avatara from "./assets/avatar.png";
import decem from "./assets/decem.png";
import derain from "./assets/derain.png";
import foph from "./assets/foph.png";
import katara from "./assets/katara.webp";
import korra from "./assets/korra.webp";
import lasanha from "./assets/lasanha.png";
import mel from "./assets/mel.png";
import todi from "./assets/todi.gif";
import { useState } from "react";

function App() {
  const [iterator, setIterator] = useState(0);
  const tastes = [
    {
      name: "TOPH",
      img: foph,
    },
    {
      name: "KATARA",
      img: katara,
    },
    {
      name: "TODI",
      img: todi,
    },
    {
      name: "AANG",
      img: aang,
    },
    {
      name: "SKYRIM",
      img: skyrim,
    },

    {
      name: "SKY",
      img: sky,
    },

    {
      name: "THE SIMS",
      img: deSims,
    },

    {
      name: "MINE",
      img: mines,
    },

    {
      name: "GOT",
      img: goti,
    },

    {
      name: "SENSE8",
      img: sense,
    },

    {
      name: "AGGRETSUKO",
      img: retsuko,
    },

    {
      name: "AVATAR",
      img: avatara,
    },

    {
      name: "KORRA",
      img: korra,
    },

    {
      name: "THE 100",
      img: decem,
    },

    {
      name: "STROGONOFF",
      img: strongEnough,
    },

    {
      name: "MEL",
      img: mel,
    },

    {
      name: "LASANHA",
      img: lasanha,
    },
    {
      name: "TOPH",
      img: foph,
    },
    {
      name: "KATARA",
      img: katara,
    },
    {
      name: "TODI",
      img: todi,
    },
    {
      name: "AANG",
      img: aang,
    },
    {
      name: "SKYRIM",
      img: skyrim,
    },

    {
      name: "SKY",
      img: sky,
    },

    {
      name: "THE SIMS",
      img: deSims,
    },

    {
      name: "MINE",
      img: mines,
    },

    {
      name: "GOT",
      img: goti,
    },

    {
      name: "SENSE8",
      img: sense,
    },

    {
      name: "AGGRETSUKO",
      img: retsuko,
    },

    {
      name: "AVATAR",
      img: avatara,
    },

    {
      name: "KORRA",
      img: korra,
    },

    {
      name: "THE 100",
      img: decem,
    },

    {
      name: "STROGONOFF",
      img: strongEnough,
    },

    {
      name: "MEL",
      img: mel,
    },

    {
      name: "LASANHA",
      img: lasanha,
    },
    {
      name: "TOPH",
      img: foph,
    },
    {
      name: "KATARA",
      img: katara,
    },
    {
      name: "TODI",
      img: todi,
    },
    {
      name: "AANG",
      img: aang,
    },
    {
      name: "SKYRIM",
      img: skyrim,
    },

    {
      name: "SKY",
      img: sky,
    },

    {
      name: "THE SIMS",
      img: deSims,
    },

    {
      name: "MINE",
      img: mines,
    },

    {
      name: "GOT",
      img: goti,
    },

    {
      name: "SENSE8",
      img: sense,
    },

    {
      name: "AGGRETSUKO",
      img: retsuko,
    },

    {
      name: "AVATAR",
      img: avatara,
    },

    {
      name: "KORRA",
      img: korra,
    },

    {
      name: "THE 100",
      img: decem,
    },

    {
      name: "STROGONOFF",
      img: strongEnough,
    },

    {
      name: "MEL",
      img: mel,
    },

    {
      name: "LASANHA",
      img: lasanha,
    },
  ];

  const popups = [
    {
      text: "Feliz desanivers??rio meu bem ????",
    },
    {
      text: "Aproveita seu dia",
    },
    {
      text: "com pessoas especiais e que voc?? ama.",
    },
    {
      text: "Voc?? ?? uma pessoa incr??vel",
    },
    {
      text: "que merece o mundo inteirinho s?? pra voc??.",
    },
    {
      text: "Eu falo muito isso ultimamente",
    },
    {
      text: "mas voc?? passou e passa por muita coisa ainda",
    },
    {
      text: "mas agora voc?? est?? mais forte e segura de si",
    },
    {
      text: "e eu amo ver essa evolu????o",
    },
    {
      text: "e voc?? tamb??m viu isso",
    },
    {
      text: "e se orgulha de tudo que voc?? fez.",
    },
    {
      text: "Voc?? chegou at?? aqui pelo seu esfor??o e dedica????o",
    },
    {
      text: "voc?? foi e ?? muito forte",
    },
    {
      text: "assim como voc??",
    },
    {
      text: "eu tenho muito orgulho",
    },
    {
      text: "de tudo que voc?? conquistou",
    },
    {
      text: "estarei sempre na torcida por vc",
    },
    {
      text: "e pelos seus sonhos.",
    },
    {
      text: "Hoje ?? o seu dia",
    },
    {
      text: "um dia para marcar",
    },
    {
      text: "todas essas conquistas",
    },
    {
      text: "e a sua evolu????o",
    },
    {
      text: "parab??ns Luma ????????????????????????????????",
    },
  ];

  

  return (
    <div className="App">
      <div className="wrapper">
        {tastes.map((item) => (
          <div
            style={{
              position: "absolute",
              bottom: Math.floor(Math.random() * 900),
              left: Math.floor(Math.random() * 1800),
              // transform: "translate(-50%, -50%)",
              // backgroundColor: "white",
              // borderRadius: "500px",
              // padding: "30px",
              // display: "flex",
              // justifyContent: 'center',
              // alignItems: 'center',
              transition: "all 1.3s ease-in-out",
              opacity: 0.1,
            }}
          >
            <img
              style={{
                filter: "drop-shadow(0px 0px 4px rgba(0 0 0 / 90%))",
              }}
              width={100}
              src={item.img}
            />
          </div>
        ))}
      </div>

      <div className="popup">
        <div className="title">
          <div className="title-text">Desanivers??rio</div>
          <div className="close">???</div>
        </div>
        <div className="text">
          <div>????</div>
          <h1>{popups[iterator].text}</h1>
        </div>
        <div className="buttons">
          <button
            onClick={() =>
              setIterator(iterator === 23 ? setIterator(0) : iterator + 1)
            }
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
