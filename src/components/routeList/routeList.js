import React from 'react';
import {sortableContainer, sortableElement} from 'react-sortable-hoc';

import RouteItemContainer from '../routeItem/routeItemContainer';

const SortableItem = sortableElement(({point}) => <RouteItemContainer 
                                          id={point.id} 
                                          name={point.name} />
                                    );

const SortableContainer = sortableContainer(({children}) => {
  return <div>{children}</div>;
});

const RouteList = (props) => {

  const onSortEnd = ({oldIndex, newIndex}) => {
    props.updatePositionPoints(oldIndex, newIndex)
  };

  return (
    <SortableContainer pressDelay={150} lockAxis={'y'} onSortEnd={onSortEnd}>
      {
        props.points.map((point, index) => {
          return <SortableItem  key={point.id} index={index} point={point}/>
        })
      }
    </SortableContainer>
  )
}

export default RouteList;