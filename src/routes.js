/** 
  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

import RssFeedIcon from "@mui/icons-material/RssFeed";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";

// import Navbars from "layouts/sections/navigation/navbars";
// import Badges from "layouts/sections/elements/badges";

const routes = [
  {
    name: "About Us",
    icon: <Icon>dashboard</Icon>,
    columns: 1,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "landing pages",
        collapse: [
          {
            name: "about us",
            route: "/pages/landing-pages/about-us",
            component: <AboutUs />,
          },
          {
            name: "contact us",
            route: "/pages/landing-pages/contact-us",
            component: <ContactUs />,
          },
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
