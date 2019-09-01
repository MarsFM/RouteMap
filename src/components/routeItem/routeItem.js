import React from 'react';

import style from './routeItem.module.css';

const RouteItem = (props) => {

  return (
    <div onDragEnd={(e) => {console.log(e)}} className={style.routeItem}>
      <div className={style.routeItem__item} >{props.name}</div>
      <div onClick={props.deletePoint} className={style.routeItem__btn} >X</div>
    </div>
  )

}

export default RouteItem;