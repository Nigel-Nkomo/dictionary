import { useEffect, useState } from "react";
import axios from "axios";
import Dictionary from "./components/Dictionary";
import { getStorageTheme } from "./getStorageTheme";

export default function App() {
  //state
  const [wordData, setWordData] = useState(null);
  const [initialSound, setInitialSound] = useState(
    "https://media.merriam-webster.com/audio/prons/en/us/mp3/j/juice001.mp3"
  );
  const [word, setWord] = useState("juice");
  const [typedValue, setTypedValue] = useState(word);
  const [theme, setTheme] = useState(getStorageTheme());

  //api
  const apiKey = "fd7f0c41-22a9-4981-bfe8-0bc968f204db";
  const requestURL = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`;

  //effects
  useEffect(() => {
    const getData = () => {
      axios.get(requestURL).then((response) => {
        setWordData(response.data);
        console.log(requestURL);
      });
    };
    getData();
  }, [requestURL]);

  useEffect(() => {
    if (wordData) {
      const requestSoundURL = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${wordData[0].hwi.prs[0].sound.audio.slice(
        0,
        1
      )}/${wordData[0].hwi.prs[0].sound.audio}.mp3`;

      setInitialSound(requestSoundURL);
    }
  }, [wordData]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  return (
    <>
      <Dictionary
        wordData={wordData}
        word={word}
        setWord={setWord}
        sound={initialSound}
        typedValue={typedValue}
        setTypedValue={setTypedValue}
        toggleTheme={toggleTheme}
        theme={theme}
      />
    </>
  );
}
