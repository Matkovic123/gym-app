import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState } from "react";
import { Exercise } from "../utils/fetchData";

const Home = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState<string>("all");
  const [exercises, setExercises] = useState<Exercise[]>([]);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises  // TODO: CONVERT THIS INTO CONTEXT
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        selectedBodyPart={selectedBodyPart}
        setSelectedBodyPart={setSelectedBodyPart}
      />
    </Box>
  );
};

export default Home;
