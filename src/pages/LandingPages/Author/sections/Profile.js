// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";

// Images
import profilePicture from "assets/images/tobi.jpg";
import { Box } from "@mui/material";

function Profile() {
  return (
    <MKBox component="section" py={{ xs: 6, sm: 12 }}>
      <Container>
        <Grid container item xs={12} justifyContent="center" mx="auto">
          <MKBox mt={-21} textAlign="center">
            <MKAvatar src={profilePicture} alt="Burce Mars" size="xxl" shadow="xl" />
          </MKBox>
          <Grid container justifyContent="center" py={6}>
            <Grid item xs={12} md={7} mx={{ xs: "auto", sm: 6, md: 1 }}>
              <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Box>
                  <MKTypography variant="h2">Tobi Adeoye </MKTypography>
                  <MKTypography
                    variant="h4"
                    color="text"
                    sx={{
                      margin: "0.5rem 0",
                    }}
                  >
                    Media/Content Strategist
                  </MKTypography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    "& > *": {
                      marginRight: "1rem",
                    },
                  }}
                >
                  <a
                    href="https://www.linkedin.com/in/tobi-adeoye-03808181/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon fontSize="medium" color="info" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tobi-adeoye-03808181/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <TwitterIcon fontSize="medium" color="info" />
                  </a>
                </Box>
              </MKBox>
              <Grid container spacing={3} mb={3}>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    323&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Posts
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    3.5k&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Followers
                  </MKTypography>
                </Grid>
                <Grid item>
                  <MKTypography component="span" variant="body2" fontWeight="bold">
                    260&nbsp;
                  </MKTypography>
                  <MKTypography component="span" variant="body2" color="text">
                    Following
                  </MKTypography>
                </Grid>
              </Grid>

              <Box>
                <MKTypography variant="body1" fontWeight="light" color="text">
                  I am a seasoned media-savvy storyteller and content strategist with years of
                  experience in drawing up strategies to communicate the essence of brands to their
                  target audience. I use media as a tool to help brands reach their goals.
                  <br /> <br />
                  tobbyrhodes@gmail .com
                  <br />
                  +2348139207076 <br />
                  <MKTypography
                    component="a"
                    href="https://rhodetails.com"
                    target="_blank"
                    variant="body1"
                    fontWeight="light"
                    color="info"
                    mt={3}
                    sx={{
                      width: "max-content",
                      display: "flex",
                      alignItems: "center",

                      "& .material-icons-round": {
                        transform: `translateX(3px)`,
                        transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
                      },

                      "&:hover .material-icons-round, &:focus .material-icons-round": {
                        transform: `translateX(6px)`,
                      },
                    }}
                  >
                    Visit my blog
                    <Icon sx={{ fontWeight: "bold", marginRight: "1rem" }}>arrow_forward</Icon>
                  </MKTypography>
                </MKTypography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Profile;
