import { Suspense, useEffect, useState } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Dictionary from "./components/Dictionary";

export default function App() {
  //state
  const [wordData, setWordData] = useState(null);
  const [word, setWord] = useState("annoy");

  //api
  const apiKey = "fd7f0c41-22a9-4981-bfe8-0bc968f204db";
  const requestURL = `https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`;

  useEffect(() => {
    axios.get(requestURL).then((response) => {
      setWordData(response.data);
    });
  }, []);

  console.log(wordData);

  return (
    <>
      <Dictionary />
      {wordData ? (
        <div>
          <h1>{word}</h1>
          <p>{wordData[0].shortdef}</p>
        </div>
      ) : (
        <Loading />
      )}
    </>
  );
}
