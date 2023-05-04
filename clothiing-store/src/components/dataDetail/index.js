import { Button, Typography } from "@mui/material";
import {
  CustomizedText,
  DetailContainer,
  ImageContainer,
  ImageSlide,
  InfoContainer,
} from "../../style/data";

const DataDetail = () => {
  return (
    <DetailContainer>
      <ImageContainer>
        <ImageSlide src="https://images.pexels.com/photos/6758033/pexels-photo-6758033.jpeg" />
      </ImageContainer>
      <InfoContainer>
        <span>
          <CustomizedText>Bibek Lama</CustomizedText> is looking for :
        </span>
        <Typography variant="h5">UnderWear Designer</Typography>
        <span>
          Categories : <CustomizedText>Long, Short, Oneline</CustomizedText>
        </span>
        <span>
          Starting Price : <CustomizedText>$AUD 50</CustomizedText>
        </span>

        <span>
          Location : <CustomizedText>Kathmandu Nepal</CustomizedText>
        </span>
        <span>
          Applied Users :<CustomizedText> 5</CustomizedText>
        </span>
        <span>
          Status :
          <CustomizedText> InterViewing - 2 , Pending - 3</CustomizedText>
        </span>
        <span>
          Description :{" "}
          <CustomizedText>
            sasfdsfsdfsdf saffasfasfas as vasfasfce
          </CustomizedText>
        </span>
        <Button>Apply Now</Button>
      </InfoContainer>
    </DetailContainer>
  );
};

export default DataDetail;
