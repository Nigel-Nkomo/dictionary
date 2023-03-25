import Book from "./Book";
import Moon from "./Moon";
// import Search from "./Search";
import "./Header.css";
import { useState } from "react";

export default function Header({ word, setWord }) {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderSearch word={word} setWord={setWord} />
    </header>
  );
}

function HeaderTop() {
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
        <form className="header__themeButton">
          <div className="header__circle"></div>
        </form>
        <Moon />
      </div>
    </div>
  );
}

function HeaderSearch({ word, setWord }) {
  const [typedValue, setTypedValue] = useState(word);

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
