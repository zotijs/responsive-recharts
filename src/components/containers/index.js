import styles from "./styles";
import withContainer from "./withContainer";

const { flexbox, grid } = styles;

const FlexContainer = withContainer(flexbox);
const GridContainer = withContainer(grid);

export { FlexContainer, GridContainer };
