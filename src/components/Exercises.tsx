import { Exercise } from "../utils/fetchData";
import { useEffect, useState } from "react";
import { Pagination } from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";

type Props = {
  exercises: Exercise[];
  setExercises: (param1: Exercise[]) => void;
  selectedBodyPart: string;
};
const Exercises = ({ exercises, setExercises, selectedBodyPart }: Props) => {
  useEffect(() => {
    const getExercisesData = async () => {
      const data = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=10&offset=0",
        exerciseOptions,
      );
      setExercises(data);
    };
    getExercisesData();
  }, []);
  return (
    <Box id="exercises" sx={{ mt: { lg: "110px" } }} mt="50px" p="20px">
      <Typography variant="h3" mb="46px">
        Showing results
      </Typography>
      <Stack
        direction="row"
        sx={{
          gap: {
            lg: "110px",
            xs: "50px",
          },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise) => {
          return <ExerciseCard key={exercise.id} exercise={exercise} />;
        })}
      </Stack>
    </Box>
  );
};

export default Exercises;
