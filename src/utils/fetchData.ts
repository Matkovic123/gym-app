export type Exercise = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  secondaryMuscles: string[];
  instructions: string[];
};

export const exerciseOptions = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    "x-rapidapi-key": import.meta.env.VITE_RAPID_KEY,
  },
};

export const fetchData = async (url: string, options: object) => {
  const res = await fetch(url, options);
  const data = await res.json();
  return data;
};
