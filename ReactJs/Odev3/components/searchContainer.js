import React, { Component } from "react";
import searchTodo from "../actions/searchTodo.js";
import addSearchTextChange from "../actions/addSearchTextChange";



class searchContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {searchText, dispatch} = this.props;

    return (
      <form className="form-container" onSubmit={e => e.preventDefault()}>
      <div>
        <input
          className="input-field"
          placeholder={"Search..."}
          value={searchText}
          onChange={e => addSearchTextChange(dispatch, e.target.value)}
        />
      </div>
        <div>
          <button
            className="add-task-btn"
            onClick={() => searchTodo(dispatch, searchText)}
          >
            {"Search Task"}
          </button>
        </div>
      </form>
    );
  }
}

export default searchContainer;
