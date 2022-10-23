import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";
import { Twemoji } from "@teuteuf/react-emoji-render";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function InfosEs({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Cómo se juega" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Adivina el <Worldle /> en 6 intentos.
        </div>
        <div>
          Cada intento tiene que ser un óblast, república, krai... válido.
        </div>
        <div>
          Después de cada intento, tendrás la distancia, la dirección y la
          proximidad de tu intento hacia el objetivo.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Ejemplos</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "KRAI DE PRIMORIE",
                direction: "W",
                distance: 6_385_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Tu intento <span className="uppercase font-bold">Krai de Primorie</span> está a{" "}
            {formatDistance(6385000, settingsData.distanceUnit)} del objetivo,
            que está en dirección Oeste y sólo te has aproximado un 68% porque está
            bastante lejos!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "REPÚBLICA DE CHECHENIA",
                direction: "NW",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Tu segundo intento{" "}
            <span className="uppercase font-bold">República de Chechenia</span> se está
            acercando más! A {formatDistance(2072000, settingsData.distanceUnit)}, al Noroeste y
            una proximidad del 89%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "ÓBLAST DE LENINGRADO",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            El siguiente intento, <span className="uppercase font-bold">Óblast de Leningrado</span>,
            es el sujeto federal a adivinar! Felicidades!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nuevo <Worldle /> está disponible cada día!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> es un clon del <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> (con otros datos) que se ha inspirado <span className="font-bold">fuertemente</span>
        {" "}en el{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        creado por{" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>
        .
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          <Worldle/> hecho por{" "}
          <a
            className="underline"
            href="https://github.com/CLlauger"
            target="_blank"
            rel="noopener noreferrer"
          >
            @CLlauger
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/cllauger/russiedle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            código fuente
          </a>
          )
        </div>
        <div>
        <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> hecho por{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>{" "}
          - (
          <a
            className="underline"
            href="https://github.com/teuteuf/worldle/"
            target="_blank"
            rel="noopener noreferrer"
          >
            código fuente
          </a>
          )
        </div>
        <div>
          Quieres ayudar al Worldle?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Cómprale a @teuteuf un café! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
