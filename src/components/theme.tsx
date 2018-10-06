import { createMuiTheme } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import colors from "@app/components/colors";

const theme = createMuiTheme({
    palette: {
        primary: colors.green,
        secondary: amber
    },
});

export default theme;
