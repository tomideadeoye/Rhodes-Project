// @mui material components
import Icon from "@mui/material/Icon";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";

// import Navbars from "layouts/sections/navigation/navbars";
// import Badges from "layouts/sections/elements/badges";

const routes = [
  {
    name: "About Me",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "Tobi Adeoye",
        collapse: [
          {
            name: "Rhodetails Proposition",
            route: "/proposition",
            component: <AboutUs />,
          },
          // {
          //   name: "contact me",
          //   route: "/contact-me",
          //   component: <ContactUs />,
          // },
        ],
      },
    ],
  },
  // {
  //   name: "Proejcts",
  //   icon: <Icon>view_day</Icon>,
  //   collapse: [
  //     {
  //       name: "navigation",
  //       description: "See all navigations",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "navbars",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //       ],
  //     },

  //     {
  //       name: "Projects",
  //       description: "See all 32 examples",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "badges",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    name: "Blog",
    icon: <RssFeedIcon />,
    href: "rhodetails.com",
  },
];

export default routes;
