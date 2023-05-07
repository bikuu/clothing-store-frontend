import { Box, Button, Grid, Typography } from "@mui/material";
import {
  CustomizedText,
  DetailContainer,
  ImageContainer,
  ImageSlide,
  InfoContainer,
} from "../../style/data";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJob } from "./../../api/index";
const DataDetail = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  const user = useSelector((redux_store) => {
    return redux_store.user.data;
  });

  function fetchDataDetail() {
    getJob(id).then((res) => {
      console.log(res);
      // setData(res.data?.data);
    });
  }

  useEffect(() => {
    fetchDataDetail();
  }, []);

  return (
    <>
      <DetailContainer>
        <ImageContainer>
          {data?.images?.map((image, index) => (
            <ImageSlide src={image} />
          ))}
        </ImageContainer>
        <InfoContainer>
          <span>
            <CustomizedText>{data?.posted_by}</CustomizedText> is looking for :
          </span>
          <Typography variant="h5">{data?.title}</Typography>
          <span>
            Categories :{" "}
            <CustomizedText>
              {" "}
              {data.categories?.map((category) => `${category}, `)}
            </CustomizedText>
          </span>
          <span>
            Starting Price : <CustomizedText>$AUD {data?.price}</CustomizedText>
          </span>

          <span>
            Location :{" "}
            <CustomizedText>
              {
                (data?.location.state,
                data?.location.city,
                data?.location.postalcode)
              }
            </CustomizedText>
          </span>
          <span>
            Applied Users :
            <CustomizedText> {data?.totalQuotation}</CustomizedText>
          </span>
          <span>
            Status :
            <CustomizedText> InterViewing - 2 , Pending - 3</CustomizedText>
          </span>
          <span>
            Description : <CustomizedText>{data?.description}</CustomizedText>
          </span>
          <Button>Apply Now</Button>
          <Button>Edit</Button>
        </InfoContainer>
      </DetailContainer>
      <Grid sx={12}>
        <Box>hello</Box>
        <Box>hello</Box>
        <Box>hello</Box>
        <Box>hello</Box>
        <Box>hello</Box>
      </Grid>
    </>
  );
};

export default DataDetail;
