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
  theme,
  selectedFont,
  setSelectedFont,
  //handleFont,
  dictClassName,
}) {
  return (
    <div className={`dictionary ${dictClassName}`}>
      <Header
        word={word}
        setWord={setWord}
        typedValue={typedValue}
        setTypedValue={setTypedValue}
        toggleTheme={toggleTheme}
        theme={theme}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        // handleFont={handleFont}
      />
      <Body wordData={wordData} sound={sound} word={word} />
    </div>
  );
}
