import { data } from "resources";
//import styles from "./styles";
import { withMockData } from "libraries";
//import withResponsiveContainer from "../withResponsiveContainer";
import SeasonalityChart from "./SeasonalityChart";

const { seasonalityData } = data;

export default withMockData(seasonalityData)(SeasonalityChart);
