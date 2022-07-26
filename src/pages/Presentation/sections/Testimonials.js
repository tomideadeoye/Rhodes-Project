/* eslint-disable react/no-array-index-key */
// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";
import { Box, Chip } from "@mui/material";

const skills = ["Presentation", " Content Strategy ", "Content Creation", "Public Speaking"];
const interests = ["Conversations", "Social Media", "Networking", "Touring"];

function Information() {
  return (
    <MKBox component="section" py={12} mt="-10rem">
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2">Experience</MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 4 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="CREATIVE DIRECTOR  |   RHODETAILS"
              review="Leveraging all forms of media to tell stories that connect with organizations' target audience."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="CONTENT STRATEGIST  |   FLERI HEALTH"
              review="Drawing up strategies to tell the Fleri-Partnerships stories in a way that connects with the target audience."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="TWITTER SPACE HOST  |   DEEP DIVE CONVERSATION"
              review="Hosting in-depth conversations with the brightest minds across disciplines to inspire Africans in navigating their career and personal challenges."
            />
          </Grid>
        </Grid>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography mt={7} mb={5} variant="h3">
            Skills & Interests
          </MKTypography>
        </Grid>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          {skills.map((skill, index) => (
            <Chip key={index} label={skill} variant="outlined" />
          ))}
          {interests.map((skill, index) => (
            <Chip key={index} label={skill} color="info" />
          ))}
        </Box>
        <Divider sx={{ my: 6 }} />
      </Container>
    </MKBox>
  );
}

export default Information;
