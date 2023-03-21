import DataSVG from "./Data-Research-Icon.svg";
import GeoSVG from "./Geography-Icon.svg";
import ProgramSVG from "./Programs-Icon.svg";
import LegislativeSVG from "./Legislative-Icon.svg";

const menuContent = [
  {
    title: "Data & Research",
    className: "column1Top",
    links: [
      "Economy",
      "State Finances",
      "Education",
      "Healthcare",
      "Local Government",
      "Population and Demographics",
      "State Register Calculations",
      "Presentations",
    ],
    svgImg: DataSVG,
    altProp: "Stylized portrayal of infographic",
  },
  {
    title: "Geography & Mapping",
    className: "column2",
    links: [
      "Transportation Carrier Network (Uber)",
      "SC Real Time Network",
      "SC State GIS",
      "Maps",
      "Interactive Mapping",
      "Statewide Aerial Imagery",
    ],
    svgImg: GeoSVG,
    altProp:
      "Globe with outline of the state of South Carolina superimposed over it",
  },
  {
    title: "Programs & Services",
    className: "column3",
    links: [
      "Precinct Demographics and Redistricting",
      "State 911 Program",
      "Data Services and Online Solutions",
      "Geodetic Survey",
      "Fiscal Analysis",
      "2020 Census",
    ],
    svgImg: ProgramSVG,
    altProp: "Stylized portrayal of informational documents",
  },
  {
    title: "Legislative Fiscal Impacts",
    className: "column1Bottom",
    links: [
      "Current General Assembly Session",
      "Previous General Assembly Sessoin",
      "Forms",
    ],
    svgImg: LegislativeSVG,
    altProp: "A bag of money and a calculator",
  },
];

export default menuContent;
