/* eslint-disable react/no-array-index-key */
import React from "react";
// import styles from "../css/Home.module.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const footerNav = [
  {
    id: "Products",
    link: "/products",
  },
  {
    id: "Careers",
    link: "/products",
  },
  {
    id: "Blog",
    link: "/products",
  },
  {
    id: "Legal",
    link: "/Help",
  },
];

const content = {
  receiveMoney: {
    receiveMoney:
      "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem  accusantium doloremque laudantium, totam rem aperiam eaque ipsa,  quae ab illo inventore veritatis et quasi architecto beatae vitae  dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas    sit, aspernatur aut odit",
  },
  appStoreLink: {
    link: "/xxxx",
  },
  googlePlayLink: {
    link: "/sfdfhgjhkjnd",
  },

  noteToYoungLinkPaystack: "https://paystack.com/pay/rhodetails",
  noteToYoungLinkEpok: "",
};

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    color: "#fff",
    width: "100%",
    padding: "3vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#14243b",

    "& > hr": {
      backgroundColor: "#f4f6ff",
      width: "100%",
      margin: "2vw 0",
    },
  },

  footerLineBreak: {
    height: "1px",
    width: "100%",
    backgroundColor: "#F4F6FF",
    margin: "2vw 0",
  },

  helpDocuments: {
    marginTop: "-3vw",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "1vw 0",
    alignItems: "flex-end",

    "& > img": {
      width: "7vw",
    },
  },

  faqBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    fontSize: "1.5vw",
    "& > img": { width: "5vw", marginBottom: "2vw" },
  },

  footerNav: {
    display: "flex",
    flexDirection: "row",

    "& > li": {
      listStyleType: "none",
      fontSize: "1vw",
      margin: "0 2vw",
      cursor: "pointer",

      "&:hover": {
        borderBottom: "1px solid #f1962c",
      },
    },
  },

  socialAndFooter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",

    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },

  socialIconsBox: {
    [theme.breakpoints.down("md")]: {
      margin: "2vw 0",
    },
    "& *": {
      fontSize: "2vw",
    },
  },

  socialIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 1vw",
    color: "#fff",
    "& > div": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      height: "2.3vw",
      width: "2.3vw",

      borderRadius: "100%",
      border: "0.1vw solid white",
      padding: "0.5vw",

      "& > img": { width: "100%", height: "100%" },
    },
  },

  storeDetails: {
    "& > p": {
      color: "#14243b",
      margin: "0 0.5vw",
    },

    "& img": {
      width: "1.5vw",
      padding: ".1vw",
    },
  },

  copyright: {
    display: "flex",
    flexDirection: "row",
    margin: "4vw 0",
    justifyContent: "space-between",
    width: "100%",

    "& > p": { fontSize: "1vw", fontWeight: "400" },
  },

  downloadBox: {
    border: "0.5vw solid #fff",
    borderRadius: "3vw",
    width: "60vw",
    margin: "-10vw 0 1vw 0",
    background: "#14243b",
    padding: "2vw",

    "& > *": {
      fontSize: "2vw",
    },
  },

  downloadIconBox: {
    cursor: "pointer",
    flexDirection: "column",
    // width: "11vw",
    height: "3vw",
    backgroundColor: "#fff",
    borderRadius: "0.9vw",
    margin: "2vw",
    padding: "2vw",
    "&  > img": { width: "90vw" },
    "& > *": {
      color: "#14243b",
      fontSize: "0.8vw",
      fontWeight: "300",
    },
  },

  downloadLogo: {
    height: "3.75vw",
    margin: "0vw 2vw",
  },
}));

export default function Footer() {
  const classes = useStyles();

  const iconsArray = [
    <LinkedInIcon />,
    <InstagramIcon />,
    <FacebookIcon />,
    <TwitterIcon />,
    <YouTubeIcon />,
  ];

  const rowBoxStyling = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  };

  const colBoxStyling = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div className={classes.footerContainer}>
      <div className={classes.downloadBox}>
        <Box sx={rowBoxStyling}>
          <img src="/images/whiterhodetails.png" alt="" className={classes.downloadLogo} />
        </Box>
        <Box sx={rowBoxStyling}>
          <a href={content.noteToYoungLinkPaystack} target="_blank" rel="noopener noreferrer">
            <Box sx={colBoxStyling} className={classes.downloadIconBox}>
              <p>Download Book</p>
              <Box sx={rowBoxStyling} className={classes.storeDetails}>
                <AutoStoriesIcon /> <p>Note to younger self</p>
              </Box>
            </Box>
          </a>
          {/* <Link to={content.googlePlayLink}>
            <Box sx={colBoxStyling} className={classes.downloadIconBox}>
              <p>Download from</p>
              <Box sx={rowBoxStyling} className={classes.storeDetails}>
                <Box component="img" src="/vectors/playstore-dark.svg" /> <p>Play Store</p>
              </Box>
            </Box>
          </Link> */}
        </Box>
      </div>

      <Box className={classes.helpDocuments}>
        <img src="/images/whiterhodetails.png" alt="Rhodetails logo" />
        <Box className={classes.faqBox}>
          <Box sx={rowBoxStyling} className={classes.socialIconsBox}>
            {iconsArray.map((item, index) => (
              <Link key={index} to="/something" className={classes.socialIcons}>
                {item}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className={classes.footerLineBreak} />

      <Box className={classes.socialAndFooter}>
        <nav className={classes.footerNav}>
          {footerNav.map((item, index) => (
            <li key={index} id={item.id}>
              {item.id}
            </li>
          ))}
        </nav>
      </Box>

      <Box className={classes.copyright}>
        <p>
          © 2022-2023 Rhodetails, Inc. <br />
          Rhodetails by Tobi Adeoye
        </p>
        <p> Building a strong connection with your customers through storytelling. </p>
      </Box>
    </div>
  );
}
