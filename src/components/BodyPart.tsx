import { Stack, Typography } from "@mui/material";

import Icon from "../assets/icons/gym.png";
import { useContext } from "react";
import { SelectedBodyPartContext } from "../utils/contexts";

type Props = {
  bodyPart: string;
};

const BodyPart = ({
  bodyPart
}: Props) => {
  const [selectedBodyPart, setSelectedBodyPart] = useContext(
    SelectedBodyPartContext,
  );
  return (
    <Stack
      typography="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: selectedBodyPart === bodyPart ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setSelectedBodyPart(bodyPart);
      }}
    >
      <img src={Icon} alt="Dumbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3a1212"
        textTransform="capitalize"
      >
        {bodyPart}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
