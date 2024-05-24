import React from "react";
import { RiSearchLine } from "@remixicon/react";
import { TextInput } from "@tremor/react";
import "./Header.css";

function Header({ search, setSearch }) {
  return (
    <div className="header">
      <h4>WeatherHood</h4>
      <div>
        <TextInput
          icon={RiSearchLine}
          placeholder="Search Location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Header;
