import Header from "./Header";
import Body from "./Body";
import "./Dictionary.css";

export default function Dictionary({ wordData, word, setWord, sound }) {
  return (
    <div className="dictionary">
      <Header word={word} setWord={setWord} />
      {word && <Body wordData={wordData} sound={sound} word={word} />}
    </div>
  );
}
