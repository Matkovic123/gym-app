import { Exercise } from "../utils/fetchData";

type Props = {
  setExercises: (param1: Exercise[])=> void;
  selectedBodyPart: string;
  setSelectedBodyPart: (param1: string) => void;
};
const Exercises = ({ setExercises, selectedBodyPart, setSelectedBodyPart }: Props) => {
  return <div>Exercises</div>;
};

export default Exercises;
