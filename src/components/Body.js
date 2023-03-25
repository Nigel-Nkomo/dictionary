import Play from "./Play";
import Loading from "./Loading";
import "./Body.css";

export default function Body({ wordData, sound, word }) {
  return (
    <>
      <section className="body">
        <Word wordData={wordData} sound={sound} />
        <WordInfo wordData={wordData} />
      </section>
    </>
  );
}

function Word({ wordData, sound }) {
  function handleClick() {
    const audio = new Audio(sound);
    audio.play();
  }

  return (
    <div className="body__word">
      <div>
        <h1 className="word">{wordData[0].meta.stems[0]}</h1>
        <p className="body__ipa">/ {wordData[0].hwi.prs[0].ipa} /</p>
      </div>
      <button className="body__play" onClick={handleClick}>
        <Play />
      </button>
    </div>
  );
}

function WordInfo({ wordData }) {
  return (
    <div>
      <p>
        {wordData[0].ins[0].il} : {wordData[0].ins[0].if}
      </p>
      <div className="body__partOfSpeech">
        <h3>{wordData[0].fl}</h3>
        <div className="line">
          <div className="line__top"></div>
          <div className="line__bottom"></div>
        </div>
      </div>
      <div className="meaning">
        <p className="meaning__heading">Meaning</p>
        <ul className="meaning__list">
          {wordData[0].shortdef.map((shortdef) => {
            return <li className="meaning__item">{wordData[0].shortdef}</li>;
          })}
        </ul>
      </div>
      <div className="body__synonyms">
        <p className="meaning__heading">
          Other forms<span className="meaning__synonym">other_word</span>
        </p>
      </div>
    </div>
  );
}
