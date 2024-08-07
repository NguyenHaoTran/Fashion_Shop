import "./search.scss"; // Đảm bảo rằng CSS tương ứng cũng được cập nhật
// import { useState } from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CloseIcon from '@mui/icons-material/Close';

const Search = ({ isVisible, onClose }) => {
  return (
    <div className={`search-modal ${isVisible ? "visible" : "hidden"}`}>
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="search-icon" />
        </div>
      </div>
    </div>
  );
};

export default Search;

