import React from 'react';
import useDebounce from '../hooks/use-debounce';

const SearchBox = (props: any) => {
  const debounce = useDebounce();
  const optimizedVersion = debounce(props.onChangeGetMovieList);

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
