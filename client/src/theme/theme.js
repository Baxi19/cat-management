import { createTheme } from '@material-ui/core/styles';

const themeLight = createTheme({
    palette: { 
        type: "light", 
        secondary:{
            main: "#3f51b5"
        },
    },
});

const themeDark = createTheme({
    palette: { 
        type: "dark",
        primary: {
            main: "#222222",
        },
        secondary:{
            main: "#44b700"
        },
    },
});

export const theme =  {
    light: themeLight,
    dark: themeDark,
}