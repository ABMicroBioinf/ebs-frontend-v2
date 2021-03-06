/**
 * @author Jongil Yoon
 * @email jiysait@gmail.com
 * @create date 2021-09-02 10:07:30
 * @modify date 2021-09-02 10:07:30
 * @desc [description]
 */

import React, { useCallback, useReducer, useState } from "react";
import { Grid, Input } from "semantic-ui-react";

/**
 * Search
 * @param param - keyword, setKeyword
 * @returns - Search Component
 */
function Search({ keyword, setKeyword }): JSX.Element {
  const initialSearchState = {
    loading: false,
    searchValue: "",
  };
  const [searchInput, setSearchInput] = useState<string>(null)

  function searchReducer(state, action) {
    switch (action.searchType) {
      case "CLEAN_QUERY":
        return initialSearchState;
      case "START_SEARCH":
        return { ...state, loading: true, searchValue: action.searchQuery };
      case "FINISH_SEARCH":
        return { ...state, loading: false, searchValue: action.searchQuery };
      case "NOT_FOUND":
        return { ...state, loading: false };

      default:
        throw new Error();
    }
  }
 
  const [searchState, dispatchSearch] = useReducer(
    searchReducer,
    initialSearchState
  );
  const { searchValue } = searchState;
  
  const handleSearchInputChange = useCallback((e, data) => {
    dispatchSearch({ searchType: "START_SEARCH", searchQuery: data.value });

    if (data.value.length === 0) {
      dispatchSearch({ searchType: "CLEAN_QUERY" });
      //setKeyword("");
      setSearchInput("")
      return;
    }

    dispatchSearch({
      searchType: "FINISH_SEARCH",
      searchQuery: data.value,
    });

    //setKeyword(data.value);
    setSearchInput(data.value)
  }, []);
  
  const submitSearch = (e, data) =>{
    console.log("search.................................")  
    console.log(data)
    setKeyword(searchInput)
  }
  return (
    <Input
      onChange={handleSearchInputChange}
      value={searchValue}
      placeholder="Search..."
      type="text"
      action={{ icon: 'search', onClick: submitSearch}}
    />
  );
}

/**
 * JIYTableCustomHead
 * @param param0 - title, search, isLoading, setSearch, setLoading
 * @returns - Custom Head Component
 */
function JIYTableCustomHead({
  title,
  search,
  isLoading,
  setSearch,
  setLoading,
}): JSX.Element {
  return (
    <>
      <Grid.Column width={8} textAlign="left">
        <h2>{title}</h2>
      </Grid.Column>
      <Grid.Column width={8} textAlign="right">
        <Search keyword={search} setKeyword={setSearch} />
      </Grid.Column>
    </>
  );
}
export default JIYTableCustomHead;
