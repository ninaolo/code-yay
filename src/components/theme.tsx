import { createMuiTheme } from '@material-ui/core/styles';
import colors from "@app/components/colors";

const theme = createMuiTheme({
    palette: {
        primary: colors.green,
        secondary: colors.yellow
    },
});

export default theme;
