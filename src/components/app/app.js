import React from 'react';
import MapContainer from '../map';
import RouteListContainer from '../routeList';

import style from './app.module.css'
import FieldContainer from '../field';
import ErrorBoundary from '../error/ErrorBoundary';
import Loader from '../loader';

const App = (props) => {
  const { isLoading } = props;

  return (
    <div className={style.app}>
      <div className={style.app__wrapper}>
        {isLoading ? 
          <ErrorBoundary>
            <div className={style.app__left} >
              <FieldContainer />
              <RouteListContainer />
            </div>
            <div className={style.app__right}>
              <MapContainer  />
            </div>
          </ErrorBoundary>
          :
          <Loader />
        }
      </div>
    </div>
  );
}

export default App;
