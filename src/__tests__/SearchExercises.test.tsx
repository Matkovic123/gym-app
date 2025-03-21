import { act, fireEvent, render, waitFor } from "@testing-library/react";
import { expect, test, vi } from "vitest";
import createFetchMock from "vitest-fetch-mock";
import SearchExercises from "../components/SearchExercises";

const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

const mockResponseData = [
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/ZaM-eZE-e3fSp-",
    id: "0001",
    name: "3/4 sit-up",
    target: "abs",
    secondaryMuscles: ["hip flexors", "lower back"],
    instructions: [
      "Lie flat on your back with your knees bent and feet flat on the ground.",
      "Place your hands behind your head with your elbows pointing outwards.",
      "Engaging your abs, slowly lift your upper body off the ground, curling forward until your torso is at a 45-degree angle.",
      "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
      "Repeat for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/AP--aArrhbD-q0",
    id: "0002",
    name: "45° side bend",
    target: "abs",
    secondaryMuscles: ["obliques"],
    instructions: [
      "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
      "Keeping your back straight and your core engaged, slowly bend your torso to one side, lowering your hand towards your knee.",
      "Pause for a moment at the bottom, then slowly return to the starting position.",
      "Repeat on the other side.",
      "Continue alternating sides for the desired number of repetitions.",
    ],
  },
  {
    bodyPart: "waist",
    equipment: "body weight",
    gifUrl: "https://v2.exercisedb.io/image/qYFPUF3GgY0qgn",
    id: "0003",
    name: "air bike",
    target: "abs",
    secondaryMuscles: ["hip flexors"],
    instructions: [
      "Lie flat on your back with your hands placed behind your head.",
      "Lift your legs off the ground and bend your knees at a 90-degree angle.",
      "Bring your right elbow towards your left knee while simultaneously straightening your right leg.",
      "Return to the starting position and repeat the movement on the opposite side, bringing your left elbow towards your right knee while straightening your left leg.",
      "Continue alternating sides in a pedaling motion for the desired number of repetitions.",
    ],
  },
];

test("Can search for exercises", async () => {
  fetchMocker.mockResponseOnce(JSON.stringify([]));
  const screen = render(<SearchExercises />);

  await waitFor(() => {
    expect(fetchMock.requests().length).toBe(1);
    expect(fetchMock.requests()[0].url).toBe(
      "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
    );
  });

  fetchMocker.mockResponseOnce(JSON.stringify(mockResponseData));
  const input = screen.getByPlaceholderText(
    "Search Exercises",
  ) as HTMLInputElement;
  fireEvent.change(input, { target: { value: "back" } });

  const btn = screen.getByRole("button", { name: "Search" });

  fireEvent.click(btn);
  await waitFor(() => expect(input.value).toBe(""));
  await waitFor(() => {
    expect(fetchMock.requests().length).toBe(2);
    expect(fetchMock.requests()[1].url).toBe(
      "https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0",
    );
  });
});
