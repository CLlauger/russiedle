import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

export const translations = {
  ru: {
    translation: {
      placeholder: "Country, territory...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      showOnWikipedia: "📚 on Wikipedia",
      welldone: "Well done!",
      unknownCountry: "Unknown country!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        language: "Language",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide country image for more of a challenge.",
        rotationMode: "Randomly rotate country image.",
        updateNotificationDisabled: "Disable update notifications.",
        showScale: "Replace proximity percent by size percent.",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        averageBestDistance: "Best Distances Average",
        guessDistribution: "Guess distribution:",
      },
      install: {
        title: "Worldle",
        descritpionTitle: "App Install:",
        description: "Add Worldle to Home Screen to play it easily!",
        instructionTitle: "Instructions:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancel",
        instructionActionInstall: "Install",
        instructionFirefoxAction1: "- open browser options ",
        instructionFirefoxAction2: "- add to Home Screen",
        instructionFirefoxNewAction1: "- open browser options ",
        instructionFirefoxNewAction2: '- select "Install"',
        instructionIdeviceAction1: "- on Safari, open the Share menu ",
        instructionIdeviceAction2: '- select "Add to Home Screen"',
        instructionOperaAction1: "- press the menu button ",
        instructionOperaAction2: "- add to Home Screen",
        instructionNotSupported: "Not supported by this browser.",
      },
      support: {
        UA: "Support the Ukrainian Red Cross",
      },
      newVersion: "New version available!",
      update: "Update",
      or: "or",
      ignore: "Ignore",
      buyMeACoffee: "Buy me a ☕!",
      news: {
        newsNotifications: "News notifications system added!",
      },
    },
  },
  ca: {
    translation: {
      placeholder: "Óblasts, repúbliques, krais...",
      guess: "Endevinar",
      share: "Compartir",
      showOnGoogleMaps: "👀 a Google Maps",
      showOnWikipedia: "📚 a Viquipèdia",
      welldone: "Ben fet!",
      unknownCountry: "Subjecte desconegut!",
      copy: "Resultats copiats al porta-retalls",
      showCountry: "🗺️ Mostra en un mapa!",
      cancelRotation: "🌀 Cancel·lar rotació",
      settings: {
        title: "Configuració",
        distanceUnit: "Unitat de distància",
        theme: "Tema",
        dark: "Fosc",
        light: "Clar",
        km: "Quilòmetres",
        miles: "Milles",
        language: "Idioma",
        difficultyModifiers: "Modificadors de dificultat",
        startingNextDay: "Començant l'endemà!",
        noImageMode: "Amaga la imatge del subjecte per un repte més gran.",
        rotationMode: "Rotar aleatòriament la imatge del subjecte.",
        updateNotificationDisabled: "Deshabilitar notificacions d'actualització.",
        showScale: "Substituir el percentatge de proximitat per un percentatge de la mida.",
      },
      stats: {
        title: "Estadístiques",
        played: "Jugades",
        win: "% de Victòries",
        currentStreak: "Ratxa Actual",
        maxStreak: "Ratxa Màxima",
        averageBestDistance: "Mitjana de les millors distàncies",
        guessDistribution: "Distribució d'encerts:",
      },
      install: {
        title: "Russiedle",
        descritpionTitle: "Instal·lar l'Aplicació:",
        description: "Afegeix Russiedle a la Pantalla d'Inici per jugar-hi fàcilment!",
        instructionTitle: "Instruccions:",
        instructionActionOk: "D'ACORD",
        instructionActionCancel: "Cancel·lar",
        instructionActionInstall: "Instal·lar",
        instructionFirefoxAction1: "- obre les opcions del navegador ",
        instructionFirefoxAction2: "- afegir a la Pantalla d'Inici",
        instructionFirefoxNewAction1: "- obre les opcions del navegador ",
        instructionFirefoxNewAction2: '- selecciona "Instal·lar"',
        instructionIdeviceAction1: "- a Safari, obre el menú de Compartir ",
        instructionIdeviceAction2: '- selecciona "Afegir a la Pantalla d\'Inici"',
        instructionOperaAction1: "- prem el botó del menú ",
        instructionOperaAction2: "- afegir a la Pantalla d'Inici",
        instructionNotSupported: "No suportat per aquest navegador.",
      },
      support: {
        UA: "Ajuda a la Creu Roja Ucraïnesa",
      },
      newVersion: "Nova versió disponible!",
      update: "Actualitzar",
      or: "o",
      ignore: "Ignorar",
      buyMeACoffee: "Compra'm un ☕!",
      news: {
        newsNotifications: "Nou sistema de notificacions afegit!",
      },
    },
  },
  en: {
    translation: {
      placeholder: "Oblasts, republics, krais...",
      guess: "Guess",
      share: "Share",
      showOnGoogleMaps: "👀 on Google Maps",
      showOnWikipedia: "📚 on Wikipedia",
      welldone: "Well done!",
      unknownCountry: "Unknown subject!",
      copy: "Copied results to clipboard",
      showCountry: "🗺️ Show map!",
      cancelRotation: "🌀 Cancel rotation",
      settings: {
        title: "Settings",
        distanceUnit: "Unit of distance",
        theme: "Theme",
        dark: "Dark",
        light: "Light",
        km: "KM",
        miles: "Miles",
        language: "Language",
        difficultyModifiers: "Difficulty modifiers",
        startingNextDay: "Starting the next day!",
        noImageMode: "Hide subject image for more of a challenge.",
        rotationMode: "Randomly rotate subject image.",
        updateNotificationDisabled: "Disable update notifications.",
        showScale: "Replace proximity percent by size percent.",
      },
      stats: {
        title: "Statistics",
        played: "Played",
        win: "Win %",
        currentStreak: "Current Streak",
        maxStreak: "Max Streak",
        averageBestDistance: "Best Distances Average",
        guessDistribution: "Guess distribution:",
      },
      install: {
        title: "Russiedle",
        descritpionTitle: "App Install:",
        description: "Add Russiedle to Home Screen to play it easily!",
        instructionTitle: "Instructions:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancel",
        instructionActionInstall: "Install",
        instructionFirefoxAction1: "- open browser options ",
        instructionFirefoxAction2: "- add to Home Screen",
        instructionFirefoxNewAction1: "- open browser options ",
        instructionFirefoxNewAction2: '- select "Install"',
        instructionIdeviceAction1: "- on Safari, open the Share menu ",
        instructionIdeviceAction2: '- select "Add to Home Screen"',
        instructionOperaAction1: "- press the menu button ",
        instructionOperaAction2: "- add to Home Screen",
        instructionNotSupported: "Not supported by this browser.",
      },
      support: {
        UA: "Support the Ukrainian Red Cross",
      },
      newVersion: "New version available!",
      update: "Update",
      or: "or",
      ignore: "Ignore",
      buyMeACoffee: "Buy me a ☕!",
      news: {
        newsNotifications: "News notifications system added!",
      },
    },
  },
  es: {
    translation: {
      placeholder: "Óblasts, repúblicas, krais...",
      guess: "Adivinar",
      share: "Compartir",
      showOnGoogleMaps: "👀 en Google Maps",
      showOnWikipedia: "📚 en Wikipedia",
      welldone: "Bien hecho!",
      unknownCountry: "Sujeto desconocido!",
      copy: "Resultados copiados al portapapeles",
      showCountry: "🗺️ Muestra el mapa!",
      cancelRotation: "🌀 Cancelar rotación",
      settings: {
        title: "Ajustes",
        distanceUnit: "Unidad de distancia",
        theme: "Tema",
        dark: "Oscuro",
        light: "Claro",
        km: "Kilómetros",
        miles: "Millas",
        language: "Lenguaje",
        difficultyModifiers: "Modificadores de dificultad",
        startingNextDay: "Empezando el siguiente día!",
        noImageMode: "Esconde la imagen del sujeto para un reto mayor.",
        rotationMode: "Rota aleatoriamente la imagen del sujeto.",
        updateNotificationDisabled: "Deshabilitar las notificaciones de actualización.",
        showScale: "Sustituye el porcentaje de proximidad por el porcentaje de tamaño.",
      },
      stats: {
        title: "Estadísticas",
        played: "Jugadas",
        win: "% de Victorias",
        currentStreak: "Racha Actual",
        maxStreak: "Racha Máxima",
        averageBestDistance: "Promedio de Mejores Distancias",
        guessDistribution: "Distribución de aciertos:",
      },
      install: {
        title: "Russiedle",
        descritpionTitle: "Instalar la Aplicación:",
        description: "Añada Russiedle a la Pantalla de Inicio para jugar fácilmente!",
        instructionTitle: "Instrucciones:",
        instructionActionOk: "OK",
        instructionActionCancel: "Cancelar",
        instructionActionInstall: "Instalar",
        instructionFirefoxAction1: "- abrir opciones del navegador ",
        instructionFirefoxAction2: "- añadir a la Pantalla de Inicio",
        instructionFirefoxNewAction1: "- abrir opciones del navegador ",
        instructionFirefoxNewAction2: '- seleccione "Instalar"',
        instructionIdeviceAction1: "- en Safari, abra el Menú de Compartir ",
        instructionIdeviceAction2: '- seleccione "Añadir a la Pantalla de Inicio"',
        instructionOperaAction1: "- apriete el botón de menú ",
        instructionOperaAction2: "- añadir a la Pantalla de Inicio",
        instructionNotSupported: "No soportado por este navegador.",
      },
      support: {
        UA: "Ayuda a la Cruz Roja Ucraniana",
      },
      newVersion: "Nueva versión disponible!",
      update: "Actualizar",
      or: "o",
      ignore: "Ignorar",
      buyMeACoffee: "Cómprame un ☕!",
      news: {
        newsNotifications: "Nuevo sistema de notificaciones añadido!",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    interpolation: {
      escapeValue: false,
    },
    fallbackLng: "en",
  });

export default i18n;
