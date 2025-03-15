import { Box } from "@mui/material";
import BodyPart from "./BodyPart";

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <Box display="flex" alignItems="center">
      <button onClick={() => document.getElementById('scrollable').scrollLeft -= 200}>{"<"}</button>
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
      <button onClick={() => document.getElementById('scrollable').scrollLeft += 200}>{">"}</button>
    </Box>
  );
};

export default HorizontalScrollbar;
