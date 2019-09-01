import arrayMove from 'array-move';

const ADD_POINT = 'ADD_POINT';
const DELETE_POINT = 'DELETE_POINT';
const CHANGE_PLACE = 'CHANGE_PLACE';
const ADD_YMAPS = 'ADD_YMAPS';
const ADD_CENTER_MAP = 'ADD_CENTER_MAP';
const UPDATE_POINT = 'UPDATE_POINT';
const UPADTE_INDEX_POINTS = 'UPADTE_POSITION_POINTS';
const FINISH_LOADING = 'FINISH_LOADING';

const initialState = {
  points: [],
  place: '',
  center: [55.760241, 37.611347],
  ymaps: null,
  isLoading: true
}

const mapReducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_POINT:
      return {
        ...state,
        points: [...state.points, action.point],
        place: ''
      }

    case DELETE_POINT: 
      return {
        ...state,
        points: [
          ...state.points.slice(0, action.idx), 
          ...state.points.slice(action.idx + 1)
        ]
      }

    case UPDATE_POINT: 
      return {
        ...state,
        points: [
          ...state.points.slice(0, action.idx),
          action.point,
          ...state.points.slice(action.idx + 1),
        ]
      }

    case CHANGE_PLACE: 
      return {
        ...state,
        place: action.place
      }
    
    case ADD_YMAPS: 
      return {
        ...state,
        ymaps: action.ymaps
      }
    
    case ADD_CENTER_MAP: 
      return {
        ...state,
        center: action.center
      }

    case UPADTE_INDEX_POINTS:
      return {
        ...state,
        points: arrayMove(state.points, action.oldIndex, action.newIndex),
      }
    
    case FINISH_LOADING: 
      return {
        ...state,
        isLoading: action.payload
      }

    default: 
      return {
        ...state
      }
  }
}

export const addPoint = (point) => {
  return {
    type: ADD_POINT,
    point
  }
}

export const deletePoint = (idx) => {
  return {
    type: DELETE_POINT,
    idx
  }
}

export const changePlace = (place) => {
  return {
    type: CHANGE_PLACE,
    place
  }
}

export const addYmaps = (ymaps) => {
  return {
    type: ADD_YMAPS,
    ymaps
  }
}

export const addCenterMap = (center) => {
  return {
    type: ADD_CENTER_MAP,
    center
  }
}

export const updateCoordsFromPoint = (point, idx) => {
  return {
    type: UPDATE_POINT,
    point,
    idx,
  }
}

export const updateIndexPoints = (oldIndex, newIndex) => {
  return {
    type: UPADTE_INDEX_POINTS,
    oldIndex,
    newIndex
  }
}

export const finishLoading = (payload) => {
  return {
    type: FINISH_LOADING,
    payload
  }
}

export default mapReducer;