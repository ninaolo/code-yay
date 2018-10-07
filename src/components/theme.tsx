import { createMuiTheme } from '@material-ui/core/styles';
import colors from "@app/components/colors";

const theme = createMuiTheme({
    palette: {
        primary: colors.theme.green,
        secondary: colors.theme.yellow
    },
});

export default theme;
