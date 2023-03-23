import Book from "./Book";
import Moon from "./Moon";
import Search from "./Search";

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
        <div className="header__themeButton">
          <input type="checkbox" />
          <span></span>
        </div>
        <Moon />
      </div>
    </div>
  );
}

function HeaderSearch() {
  return (
    <div className="header__search">
      <input type="text" />
      <Search />
    </div>
  );
}
