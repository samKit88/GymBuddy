import { createContext, useReducer } from "react"

//create context
export const WorkoutContext = createContext();

//Reducer function the state is current state
export const workoutsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_WORKOUTS': 
         return {
            workouts: action.payload
         }
        case 'CREATE_WORKOUT': 
         return {
            workouts: [action.payload, ...state.workouts]
         }
        case 'DELETE_WORKOUT': 
          return {
            workouts: state.workouts.filter((w) => w._id !== action.payload._id)
          }    
         default: 
           return state     
    };
};

//return tamplate
export const WorkoutContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    //initial value for the state
    workouts: null
  });  

  return (
    //Context component 
    <WorkoutContext.Provider value={{...state, dispatch}}>
        { children }
    </WorkoutContext.Provider>
  )
}

 