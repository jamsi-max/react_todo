import React from "react";

import "./search-panel.css";


const SearchPanel = ({searchItems}) => {
    return (
        <div className="search">
            <input 
                className="form-control search-input"
                onChange={(e)=>searchItems(e.target.value)}
                placeholder="search" />
        </div>
    );
};

export default SearchPanel;


