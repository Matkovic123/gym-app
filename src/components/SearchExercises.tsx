import { useState, useEffect, FormEvent } from "react";
import { Typography, Box, Button, Stack, TextField } from "@mui/material";
import { fetchData, exerciseOptions, Exercise } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

type Props = {
  setExercises: (param1: Exercise[]) => void;
  selectedBodyPart: string;
  setSelectedBodyPart: (param: string) => void;
};

const SearchExercises = ({
  setExercises,
  selectedBodyPart,
  setSelectedBodyPart,
}: Props) => {
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions,
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions,
      );
      const searchedExercises = exercisesData.filter((exercise: Exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
        );
      });
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <form onSubmit={handleSearch}>
          <TextField
            // height='76px' TODO: not working
            sx={{
              input: { fontWeight: "700", border: "none", borderRadius: "4px" },
              width: { lg: "800px", xs: " 350px" },
              backgroundColor: "#fff",
              borderRadius: "40px",
            }}
            value={search}
            onChange={(e) => setSearch(e.target.value.toLowerCase())}
            placeholder="Search Exercises"
            type="text"
          />
          <Button
            type="submit"
            className="search-btn"
            sx={{
              bgcolor: "#ff2625",
              color: "#fff",
              textTransform: "none",
              width: { lg: "175px", xs: "80px" },
              fontSize: { lg: "20px", xs: "14px" },
              height: "56px",
              position: "absolute",
              right: 0,
            }}
          >
            Search
          </Button>
        </form>
      </Box>
      <Box sx={{ position: "relative", width: "100%", padding: "20px" }}>
        <HorizontalScrollbar
          bodyParts={bodyParts}
          selectedBodyPart={selectedBodyPart}
          setSelectedBodyPart={setSelectedBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
