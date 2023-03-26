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
}) {
  return (
    <header className="header">
      <HeaderTop toggleTheme={toggleTheme} theme={theme} />
      <HeaderSearch
        word={word}
        setWord={setWord}
        typedValue={typedValue}
        setTypedValue={setTypedValue}
      />
    </header>
  );
}

function HeaderTop({ toggleTheme, theme }) {
  return (
    <div className="header__top">
      <Book />
      <div className="header__fontAndTheme">
        <select className="header__font">
          <option>Sans Serif</option>
          <option>Serif</option>
          <option>Mono</option>
        </select>
        <div className="header__line"></div>
        <button className="header__themeButton" onClick={toggleTheme}>
          <div
            className={
              theme === "light-theme"
                ? "header__circle"
                : "header__circleTranslated"
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
