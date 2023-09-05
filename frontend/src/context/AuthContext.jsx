import { createContext, useReducer } from "react"

//create context
export const AuthContext = createContext();

//Reducer function the state is current state
export const AuthReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN': 
         return {
            user: action.payload
         }
        case 'LOGOUT': 
         return {
            user: null
         }  

         default: 
           return state     
    };
};

//return tamplate
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, {
    //initial value for the state
    user: null
  });  

  return (
    //Context component 
    <AuthContext.Provider value={{...state, dispatch}}>
        { children }
    </AuthContext.Provider>
  )
}

 