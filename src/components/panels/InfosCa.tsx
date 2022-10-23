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

export function InfosCa({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="Com es juga" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          {" "}
          Endevina el <Worldle /> en 6 intents.
        </div>
        <div>
          Cada intent ha de ser un óblast, república, krai... vàlid.
        </div>
        <div>
          Després de cada intent, tindràs la distància, la direcció i la
          proximitat del teu intent cap a l&apos;objectiu.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Exemples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "TERRITORI DE PRIMÓRIE",
                direction: "W",
                distance: 6_385_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            El teu intent <span className="uppercase font-bold">Territori de Primórie</span> està a{" "}
            {formatDistance(6385000, settingsData.distanceUnit)} de l&apos;objectiu,
            que està en direcció Oest i només t&apos;hi has aproximat un 68% perquè està
            prou lluny!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "REPÚBLICA DE TXETXÈNIA",
                direction: "NW",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            El teu segon intent{" "}
            <span className="uppercase font-bold">República de Txetxènia</span> s&apos;hi està
            acostant més! A {formatDistance(2072000, settingsData.distanceUnit)}, al Nord-Oest i
            una proximitat del 89%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "PROVÍNCIA DE LENINGRAD",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            El següent intent, <span className="uppercase font-bold">Província de Leningrad</span>,
            és el subjecte federal a endevinar! Enhorabona!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        Un nou <Worldle /> està disponible cada dia!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> és un clon del <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> (amb unes altres dades) que s&apos;ha inspirat <span className="font-bold">fortament</span>
        {" "}en el{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        creat per{" "}
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
          <Worldle/> fet per{" "}
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
            codi font
          </a>
          )
        </div>
        <div>
        <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> fet per{" "}
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
            codi font
          </a>
          )
        </div>
        <div>
          Vols ajudar al Worldle?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Compra a en @teuteuf un cafè! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
