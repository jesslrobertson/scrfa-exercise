import DataSVG from './Data-Research-Icon.svg'
import GeoSVG from './Geography-Icon.svg'
import ProgramSVG from './Programs-Icon.svg'
import LegislativeSVG from './Legislative-Icon.svg'

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
    svgImg: DataSVG
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
    svgImg: GeoSVG
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
    svgImg: ProgramSVG
  },
  {
    title: "Legislative Fiscal Impacts",
    className: "column1Bottom",
    links: [
      "Current General Assembly Session",
      "Previous General Assembly Sessoin",
      "Forms",
    ],
    svgImg: LegislativeSVG
  },
];

export default menuContent