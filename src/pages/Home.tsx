import { Box } from "@mui/material";
import Exercises from "../components/Exercises";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import { useState } from "react";
import { Exercise } from "../utils/fetchData";
import { ExercisesContext, SelectedBodyPartContext } from "../utils/contexts";

const Home = () => {
  const selectedBodyPartHook = useState<string>("all");
  const exercisesHook = useState<Exercise[]>([]);

  return (
    <Box>
      <HeroBanner />
      <ExercisesContext.Provider value={exercisesHook}>
        <SelectedBodyPartContext.Provider value={selectedBodyPartHook}>
          <SearchExercises/>
          <Exercises/>
        </SelectedBodyPartContext.Provider>
      </ExercisesContext.Provider>
    </Box>
  );
};

export default Home;
