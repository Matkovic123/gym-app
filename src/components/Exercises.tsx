/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { ChangeEvent, useContext, useEffect, useRef, useState } from "react";
import { ExercisesContext, SelectedBodyPartContext } from "../utils/contexts";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loading from "./Loading";

const Exercises = () => {
  const [exercises, setExercises] = useContext(ExercisesContext);
  const [selectedBodyPart] = useContext(SelectedBodyPartContext);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isFirstRender = useRef(true);

  useEffect(() => {
    setIsLoading(true);
    const fetchExercisesForBodyPart = async () => {
      let data;
      if (selectedBodyPart === "all") {
        data = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises?limit=100&offset=0",
          exerciseOptions,
        );
      } else {
        data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedBodyPart}`,
          exerciseOptions,
        );
      }
      setIsLoading(false);
      setExercises(data);
      if (!isFirstRender.current) {
        setTimeout(() => {
          window.scrollTo({ top: 1800, behavior: "smooth" });
        }, 100);
      }
      isFirstRender.current = false;
    };
    fetchExercisesForBodyPart();
  }, [selectedBodyPart]);

  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise,
  );
  const paginate = (_: ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default Exercises;
