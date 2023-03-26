import Book from "./Book";
import Moon from "./Moon";
// import Search from "./Search";
import "./Header.css";
import Sun from "./Sun";

export default function Header({
  word,
  setWord,
  typedValue,
  setTypedValue,
  toggleTheme,
  theme,
  selectedFont,
  setSelectedFont,
  handleFont,
}) {
  return (
    <header className="header">
      <HeaderTop
        toggleTheme={toggleTheme}
        theme={theme}
        selectedFont={selectedFont}
        setSelectedFont={setSelectedFont}
        //handleFont={handleFont}
      />
      <HeaderSearch
        word={word}
        setWord={setWord}
        typedValue={typedValue}
        setTypedValue={setTypedValue}
      />
    </header>
  );
}

function HeaderTop({
  toggleTheme,
  theme,
  selectedFont,
  setSelectedFont,
  handleFont,
}) {
  return (
    <div className="header__top">
      <Book />
      <div className="header__fontAndTheme">
        <select
          className="header__font"
          value={selectedFont}
          onChange={(e) => {
            setSelectedFont(e.target.value);
            //handleFont();
          }}
        >
          <option value="Ubuntu">Ubuntu</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Roboto Mono">Roboto Mono</option>
        </select>
        <div className="header__line"></div>
        <button className="header__themeButton" onClick={toggleTheme}>
          <div
            className={
              theme === "dark-theme"
                ? "header__circleTranslated"
                : "header__circle"
            }
          ></div>
        </button>
        {theme === "light-theme" ? <Moon /> : <Sun />}
      </div>
    </div>
  );
}

function HeaderSearch({ word, setWord, typedValue, setTypedValue }) {
  return (
    <div className="header__search">
      <input
        value={typedValue}
        onChange={(e) => setTypedValue(e.target.value)}
        type="text"
        className="header__input"
        placeholder="Search for any word..."
      />
      {/* <Search /> */}
      <button className="searchButton" onClick={() => setWord(typedValue)}>
        Search
      </button>
    </div>
  );
}
