import { createContext } from "react";
import { Exercise } from "./fetchData";

export const ExercisesContext = createContext<
  [Exercise[], React.Dispatch<React.SetStateAction<Exercise[]>>]
>([[], () => {}]);

export const SelectedBodyPartContext = createContext<
  [string, React.Dispatch<React.SetStateAction<string>>]
>(["all", () => {}]);
