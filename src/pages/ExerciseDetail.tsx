import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import Detail from "./Detail";
import ExerciseVideos from "./ExerciseVideos";
import SimilarExercises from "./SimilarExercises";

const ExerciseDetail = () => {
  return;
  <Box>
    <Detail />
    <ExerciseVideos />
    <SimilarExercises />
  </Box>;
};

export default ExerciseDetail;
