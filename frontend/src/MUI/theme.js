import { createTheme } from "@mui/material";

export const theme = createTheme({
    shape: {
        borderRadius: 10
    },
    palette: {
        background: {
            paper: "#EEEEEE"
        },
        primary: {
            main: "#00ADB5",
            light: "#33bdc3",
            dark: "#00797e",
            contrastText: "#fff"
        },
        secondary: {
            main: "#EEEEEE",
            light: "#f1f1f1",
            dark: "#a6a6a6"
        }
    },
    typography: {
        fontFamily: "'Fredoka','Roboto','Helvetica','Arial','sans-serif'",
        button: {
            textTransform: 'none'
        }
    }
});