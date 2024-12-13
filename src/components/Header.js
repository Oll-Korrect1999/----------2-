import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>技術ブログ</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/Referernce">参考</Link>
          </li>
          <li>
            <Link to="/Note">ノート</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
