import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";

const BarItems = [
  {
    id: 1,
    heading: "Home",
    description: " ",
    icon: <WorkIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 2,
    heading: "Why Recruit Us",
    description: "Vote too already existing poll.",
    icon: <WorkIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 3,
    heading: "Brochure",
    description: "View Responses to the polls created by you.",
    icon: <SchoolIcon className="tabIcon" />,
    route: "/",
  },
  {
    id: 4,
    heading: "Contact Us",
    description: "Login to create new polls or to submit a response.",
    route: "https://iiitr.ac.in/contact",
  },
];

export default BarItems;
