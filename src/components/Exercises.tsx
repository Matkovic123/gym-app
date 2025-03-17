import { Exercise } from "../utils/fetchData";
import { ChangeEvent, useEffect, useState } from "react";
import { Box, Pagination, Stack, Typography } from "@mui/material";
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
        "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0",
        exerciseOptions,
      );
      setExercises(data);
    };
    getExercisesData();
  }, []);

  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)
  const paginate = (e: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };

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
        {currentExercises.map((exercise) => {
          return <ExerciseCard key={exercise.id} exercise={exercise} />;
        })}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
