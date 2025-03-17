import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import LeftArrow from "./../assets/icons/left-arrow.png";
import RightArrow from "./../assets/icons/right-arrow.png";
import { useEffect, useRef } from "react";

type Props = {
  bodyParts: string[];
  selectedBodyPart: string;
  setSelectedBodyPart: (param: string) => void;
};

const HorizontalScrollbar = ({
  bodyParts,
  selectedBodyPart,
  setSelectedBodyPart,
}: Props) => {
  const left = useRef(0);
  useEffect(() => {
    document.querySelector("#left")!.addEventListener("click", handleLeftClick);
    document
      .querySelector("#right")!
      .addEventListener("click", handleRightClick);
    return () => {
      document
        .querySelector("#left")!
        .removeEventListener("click", handleLeftClick);
      document
        .querySelector("#right")!
        .removeEventListener("click", handleRightClick);
    };
  }, []);

  const scroll = (amount: number) => {
    if (amount > 0) {
      left.current += amount;
    } else {
      left.current = left.current < 270 ? 0 : left.current - 270;
    }
    document.querySelector("#scrollable")!.scroll({
      left: left.current,
      top: 0,
      behavior: "smooth",
    });
  };
  const handleLeftClick = () => scroll(-270);
  const handleRightClick = () => scroll(270);
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography id="left" sx={{ cursor: "pointer" }}>
        <img src={LeftArrow} alt="left" />
      </Typography>
      <Box
        id="scrollable"
        display="flex"
        overflow="auto"
        whiteSpace="nowrap"
        width="100%"
        sx={{ overflowY: "hidden" }}
      >
        {bodyParts.map((bodyPartItem) => {
          return (
            <Box key={bodyPartItem} title={bodyPartItem} m="0 40px">
              <BodyPart
                bodyPart={bodyPartItem}
                selectedBodyPart={selectedBodyPart}
                setSelectedBodyPart={setSelectedBodyPart}
              />
            </Box>
          );
        })}
      </Box>
      <Typography id="right" sx={{ cursor: "pointer" }}>
        {" "}
        <img src={RightArrow} alt="right" />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;
