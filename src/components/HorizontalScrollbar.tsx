import { Box, Typography } from "@mui/material";
import BodyPart from "./BodyPart";
import LeftArrow from "./../assets/icons/left-arrow.png";
import RightArrow from "./../assets/icons/right-arrow.png";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
//   document.querySelector('#')!.addEventListener('click', function () { -- TODO for a smooth scroll
//     this.scroll({
//         left: 0,
//         top: 0,
//         behavior: 'smooth'
//     })
// });
  return (
    <Box display="flex" alignItems="center" gap={2}>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() =>
          (document.getElementById("scrollable")!.scrollLeft -= 270)
        }
      >
        <img src={LeftArrow} alt="left" />
      </Typography>
      <Box
        id="scrollable"
        display="flex"
        overflow="auto"
        whiteSpace="nowrap"
        width="100%"
      >
        {data.map((item) => {
          return (
            <Box key={item.id || item} title={item.id || item} m="0 40px">
              <BodyPart
                item={item}
                bodyPart={bodyPart}
                setBodyPart={setBodyPart}
              />
            </Box>
          );
        })}
      </Box>
      <Typography
        sx={{ cursor: "pointer" }}
        onClick={() =>
          (document.getElementById("scrollable")!.scrollLeft += 270)
        }
      >
        {" "}
        <img src={RightArrow} alt="right" />
      </Typography>
    </Box>
  );
};

export default HorizontalScrollbar;
