/*
Rhodetails
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import NotesOutlinedIcon from "@mui/icons-material/NotesOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import PartyModeOutlinedIcon from "@mui/icons-material/PartyModeOutlined";
import MicExternalOnOutlinedIcon from "@mui/icons-material/MicExternalOnOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Material Kit 2 React examples
import RotatingCard from "examples/Cards/RotatingCard";
import RotatingCardFront from "examples/Cards/RotatingCard/RotatingCardFront";
import RotatingCardBack from "examples/Cards/RotatingCard/RotatingCardBack";
import DefaultInfoCard from "examples/Cards/InfoCards/DefaultInfoCard";

// Images
import bgFront from "assets/images/rotating-card-bg-front.jpeg";
import bgBack from "assets/images/rotating-card-bg-back.jpeg";

function Information() {
  return (
    <MKBox component="section" py={6} my={6}>
      <Container>
        <Grid container item xs={11} spacing={3} alignItems="center" sx={{ mx: "auto" }}>
          <Grid item xs={12} lg={4} sx={{ mx: "auto" }}>
            <RotatingCard>
              <RotatingCardFront
                image={bgFront}
                icon="touch_app"
                title={<>Rhodetails</>}
                description="Rhodetails is a trans-media storytelling agency helping brands
                connect better with their target audience using the right
                communication tools across various social platforms."
              />
              <RotatingCardBack
                image={bgBack}
                title="Rhodetails"
                description="We leverage on effective communication strategies and contents in
                telling brand stories in a way that is relatable and impressionable in
                the hearts of their customers and prospects.
                Storytelling has the potential to transform how consumers think
                and feel about abrand which reflects on value perception and
                loyalty, hence our commitment in helping individuals and
                businesses tell better stories that connect and cause growth"
                action={{
                  type: "internal",
                  route: "/sections/page-sections/page-headers",
                  label: "start with header",
                }}
              />
            </RotatingCard>
          </Grid>
          <Grid item xs={12} lg={7} sx={{ ml: "auto" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<NotesOutlinedIcon fontSize="large" />}
                  title="Writing..."
                  description={
                    <ul>
                      <li>Newsletters</li>
                      <li>Blog posts</li>
                      <li>Web pages</li>
                      <li>Print articles</li>
                      <li>Ebooks</li>
                      <li>Magazines</li>
                      <li>Scripts</li>
                    </ul>
                  }
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<VideoCameraFrontOutlinedIcon fontSize="large" />}
                  title="Videos creation..."
                  description={
                    <ul>
                      <li>Documentaries</li>
                      <li>Reels</li>
                      <li>Youtube episodes</li>
                      <li>Reality show</li>
                      <li> Podcast</li>
                      <li>Recordings/cuts</li>
                      <li>Video edits</li>
                    </ul>
                  }
                />
              </Grid>
            </Grid>

            <Grid container spacing={3} sx={{ mt: { xs: 0, md: 6 } }}>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<PartyModeOutlinedIcon fontSize="large" />}
                  title="Visual Creation..."
                  description={
                    <ul>
                      <li>Photobooks</li>
                      <li>Photoshoots</li>
                      <li>Events coverage</li>
                    </ul>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <DefaultInfoCard
                  icon={<MicExternalOnOutlinedIcon fontSize="large" />}
                  title="Audio creation..."
                  description={
                    <ul>
                      <li>Voiceovers</li>
                      <li>Full podcast</li>
                      <li>Audiobooks</li>
                    </ul>
                  }
                />
              </Grid>
              <Grid item xs={12} md={6} style={{ marginTop: 40 }}>
                <DefaultInfoCard
                  icon={<InterestsOutlinedIcon fontSize="large" />}
                  title="Social Media..."
                  description={
                    <ul>
                      <li>Flyers</li>
                      <li>FCarousels</li>
                    </ul>
                  }
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
