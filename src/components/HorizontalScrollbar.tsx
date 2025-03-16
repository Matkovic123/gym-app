import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import LeftArrow from "./../assets/icons/left-arrow.png";
import RightArrow from "./../assets/icons/right-arrow.png";
import { useEffect } from "react";

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
  useEffect(() => {
    let left = 0;
    document.querySelector("#left")!.addEventListener("click", function () {
      left = left < 270 ? 0 : left - 270;
      document.querySelector("#scrollable")!.scroll({
        left: left,
        top: 0,
        behavior: "smooth",
      });
    });
    document.querySelector("#right")!.addEventListener("click", function () {
      left += 270;
      console.log(left);
      document.querySelector("#scrollable")!.scroll({
        left: left,
        top: 0,
        behavior: "smooth",
      });
    });

  }, []);
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
