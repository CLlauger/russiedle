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

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="How to play" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          Guess the <Worldle /> in 6 guesses.
        </div>
        <div>Each guess must be a valid oblast, republic, krai...</div>
        <div>
          After each guess, you will have the distance, the direction and the
          proximity from your guess to the target location.
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">Examples</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "PRIMORSKY KRAI",
                direction: "W",
                distance: 6_385_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your guess <span className="uppercase font-bold">Primorsky Krai</span> is{" "}
            {formatDistance(6385000, settingsData.distanceUnit)} away from the
            target location, the target location is in the West direction
            and you have only a 68% of proximity because it&apos;s quite far
            away!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "CHECHEN REPUBLIC",
                direction: "NW",
                distance: 2_072_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Your second guess{" "}
            <span className="uppercase font-bold">Chechen Republic</span> is getting
            closer! {formatDistance(2072000, settingsData.distanceUnit)} away,
            North-West direction and 89%!
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "LENINGRAD OBLAST",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            Next guess, <span className="uppercase font-bold">Leningrad Oblast</span>,
            it&apos;s the location to guess! Congrats!{" "}
            <Twemoji text="🎉" options={{ className: "inline-block" }} />
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        A new <Worldle /> will be available every day!
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> is a clone of <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> (with replaced datasets) which has been <span className="font-bold">heavily</span> inspired
        by{" "}
        <a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        created by{" "}
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
          <Worldle/> made by{" "}
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
            source code
          </a>
          )
        </div>
        <div>
        <span className="font-bold">WOR<span className="text-green-600">L</span>DLE</span> made by{" "}
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
            source code
          </a>
          )
        </div>
        <div>
          Want to support Worldle?{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twemoji
              text="Buy @teuteuf a coffee! ☕"
              options={{ className: "inline-block" }}
            />
          </a>
        </div>
      </div>
    </Panel>
  );
}
