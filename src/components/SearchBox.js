import React, { useCallback } from 'react'

const SearchBox = (props) => {
  // Debounce with React: https://www.youtube.com/watch?v=DTeY9psVDDg
  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    }
  }

  // funcion with debounce
  const optimizedVersion = useCallback(debounce(props.onChangeGetMovieList), []);

  return (
    <div className="col col-sm-4">
        <input
            className="form-control" 
            type="text" 
            placeholder="SearchBox..."
            // value={props.searchValue}
            // onChange={(e) => props.setSearchValue(e.target.value)}
            onChange={(e) => optimizedVersion(e.target.value)}
        />
    </div>
  )
}

export default SearchBox;