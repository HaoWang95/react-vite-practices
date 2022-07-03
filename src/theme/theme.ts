import { blue, green } from "@mui/material/colors";
// WTF do you give me an example with mui/system? FUCK!!
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        // primary theme
        primary: {
            main: green[500]
        },
        // dark theme
        secondary: {
            main: blue[500]
        }
    }
});

export default theme;