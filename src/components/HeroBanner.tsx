import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative" // TODO: needed?
      p="20px"
    >
      <Typography color="#FF2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Smile
        <br /> and Repeat
      </Typography>
      <Typography mb={4} fontSize="22px" lineHeight="35px">
        Check out the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        color="error"
        variant="contained"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Explore exercises
      </Button>
      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
          fontSize: "200px",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
