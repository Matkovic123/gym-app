import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from '../assets/images/banner.png'
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
      >
        Sweat, Smile
        <br /> and Repeat
      </Typography>
      <Typography mb={3} fontSize='22px' lineHeight='35px'>Check out the most effective exercises</Typography>
      <Button href="#exercises" color="error" variant="contained">Explore exercises</Button>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
