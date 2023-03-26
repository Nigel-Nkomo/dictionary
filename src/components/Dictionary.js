import Header from "./Header";
import Body from "./Body";
import "./Dictionary.css";

export default function Dictionary({
  wordData,
  word,
  setWord,
  sound,
  typedValue,
  setTypedValue,
  toggleTheme,
}) {
  return (
    <div className="dictionary">
      <Header
        word={word}
        setWord={setWord}
        typedValue={typedValue}
        setTypedValue={setTypedValue}
        toggleTheme={toggleTheme}
      />
      <Body wordData={wordData} sound={sound} word={word} />
    </div>
  );
}
