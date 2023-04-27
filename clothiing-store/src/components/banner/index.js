import { Button, Typography } from "@mui/material";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../../style/banner";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerImage src="https://images.pexels.com/photos/45982/pexels-photo-45982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
      <BannerContent>
        <Typography variant="h6">Top Jeans is Hiring</Typography>
        <BannerTitle variant="h2">New Designs</BannerTitle>

        <BannerDescription variant="subtitle">
          dasas asfasf ffjkg gkhasfk, gvhklsfas klkgvaskfkv klgvaskf amcaskflh
          sfc
        </BannerDescription>

        <BannerShopButton color="secondary">Look Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
