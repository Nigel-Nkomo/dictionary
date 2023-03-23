import Book from "./Book";
import Moon from "./Moon";
import Search from "./Search";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <HeaderTop />
      <HeaderSearch />
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

function HeaderSearch() {
  return (
    <div className="header__search">
      <input
        type="text"
        className="header__input"
        placeholder="Search for any word..."
      />
      <Search />
    </div>
  );
}
