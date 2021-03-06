import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route, Switch} from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );    
  };

  return (
    <div>
      <SavedList list={savedList} />      
      
      <Switch>
        <Route path="/movies/:id">
          <Movie />          
        </Route>

        <Route path="/">
          <MovieList />
        </Route>
      </Switch>

    </div>   
  );
};

export default App;


//   - [ ] Inside your App file add two routes.
//   - [ ] one route for `/` that loads the `MovieList` component.
//   - [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.
