import { ReactNode, useReducer } from "react";
import CategoryContext from "./catogoryContext";


const CategoryProvider = ({ children }: { children: ReactNode }) => {
  // let userName = "Prosonjit"

  const [categoryState, categoryDispatch] = useReducer(categoryReducer, categoryInitialState);
  

  

  return (
    <CategoryContext
      value={{

      }}
    >
      {children}
    </CategoryContext>
  );
};

export default CategoryProvider;
