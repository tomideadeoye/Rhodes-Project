/* eslint-disable no-lone-blocks */
import Icon from "@mui/material/Icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import MKBox from "components/MKBox";
import MKAvatar from "components/MKAvatar";
import MKTypography from "components/MKTypography";
import profilePicture from "assets/images/tobi.jpg";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 22vw",
    [theme.breakpoints.down("md")]: {
      padding: "0 9vw",
      flexDirection: "column",
      justifyContent: "center",
      textAlign: "left",
    },
  },

  headers: {
    "& > *": {},
  },
  contentBox: {
    "& > *": {
      fontSize: "1vw",
      [theme.breakpoints.down("md")]: {
        fontSize: "2.5vw",
      },
    },
  },
}));

function Profile() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <MKBox
        mt={-9}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MKAvatar src={profilePicture} alt="tobi adeoye" size="xxl" shadow="xl" />
      </MKBox>
      <Box container justifyContent="center" py={6}>
        <MKBox display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Box className={classes.headers}>
            <MKTypography variant="h3">Tobi Adeoye </MKTypography>
            <MKTypography variant="h5" color="text">
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

        <Box className={classes.contentBox}>
          <Box component="p" fontWeight="light" color="text">
            I am a seasoned media-savvy storyteller and content strategist with years of experience
            in drawing up strategies to communicate the essence of brands to their target audience.
            I use media as a tool to help brands reach their goals.
            <br /> <br />
            tobbyrhodes@gmail .com
            <br />
            +2348139207076 <br />
            <Box
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
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Profile;

{
  /* <Grid container spacing={3} mb={3}>
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
        </Grid> */
}
