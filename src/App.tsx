import { CssBaseline, TextField , Autocomplete , useMediaQuery ,Grid , alpha, Radio, useColorScheme, Slider, Typography, FormControlLabel, RadioGroup, ThemeProvider, Stack, Container, Button, styled, type SliderProps, createTheme, } from '@mui/material'
import { red } from '@mui/material/colors'
import { blue } from '@mui/material/colors'
import { purple } from '@mui/material/colors'

type CustomSliderProps = SliderProps & {
  error?: boolean;
};


const CustomSlider = styled(Slider, {
  shouldForwardProp: (prop) => prop !== "error",
})<CustomSliderProps>(({ theme, error }) => ({
  // width:"80px",
  width: theme.spacing(10),
  color: theme.palette.success.main,

  "& .MuiSlider-thumb": {
    "&:hover, &.Mui-focusVisible": {
      backgroundColor: error ? "red" : "green",
    },
  },
  "& .MuiSlider-rail": {
    "&:hover, &.Mui-focusVisible": {
      backgroundColor: error ? "red" : "blue",
    },
  },



}));

const theme = createTheme({

  breakpoints:{
    // values:{
    //   mobile:0,
    //   tablet: 640,
    //   laptop: 1024,
    //   desktop: 1200,
    // },
  },



  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: "#543345"
        },
      },
    },
    light: {
      palette: {
        primary: {
          main: alpha('#ff0000', 0.5)
        },
        secondary: purple,
      },
    },
  },
  typography: {
    fontFamily: "Poppins",
  },

  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
      },

      styleOverrides: {
        root: {
          fontSize: "2rem",
          variants: [
            {
              props: {
                variant: "outlined",
                color: "secondary",
              },
              style: {
                fontSize: ".5rem",
              }
            },
            {
              props: { variant: "dashed" },
              style: { border: `4px dashed ${red[500]}` }
            },
            {
              props: (props) =>
                props.variant === "dashed" && props.color !== "secondary",
              style: {
                border: `2px dashed ${blue[500]}`,
              },
            },

          ],
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: (theme) => `

      h1{
      color:${theme.palette.success.main};
      }
      `
    }
  },
})


function ThemeToggle() {
  const { mode, setMode } = useColorScheme();
  if (!mode) return null;

  return (
    <RadioGroup value={mode} onChange={(e) => setMode(e.target.value as "system" | "light" | "dark")}>
      <FormControlLabel control={<Radio />} value="system" label="System" />
      <FormControlLabel control={<Radio />} value="light" label="Light" />
      <FormControlLabel control={<Radio />} value="dark" label="Dark" />

    </RadioGroup>
  )
}

function App() {

  const isTablet = useMediaQuery('(min-width:640px)');



  return (
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container
    //     sx={{
    //       display: 'flex',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       height: '100vh'
    //     }}
    //     maxWidth="xs">
    //     <Stack gap={2}>
    //       {/* <CssBaseline />
    //     <Slider
    //     disabled sx={{width:100,
    //        color:'success.main',
    //       //  ':hover':{
    //       //   backgroundColor:'yellow'
    //       //  },
    //       //  "& .MuiSlider-thumb" : {
    //       //   ":hover":{
    //       //     backgroundColor:"blue"
    //       //   },
    //       //   backgroundColor: "red",
    //       //  },
    //       // "&.Mui-disabled" : {
    //       //   ".MuiSlider-thumb" : {
    //       //     backgroundColor: "error.main",
    //       //   },
    //       //  },

    //     }}

    //     />

    //       <Button >Hover me</Button> */}
    //       <CustomSlider error />
    //       <Button >SUBMIT</Button>
    //       <Button variant='outlined' color='secondary'>OUTLINED</Button>
    //       <Button variant='dashed'>DASHED</Button>
    //       <Button 
    //       sx={[(theme) => ({backgroundColor: "red"}), (theme) => ({backgroundColor: theme.applyStyles("dark" ,{
    //         backgroundColor: "blue",
    //       })})]}
    //       >DARK/LIGHT</Button>
    //       <Typography variant='h1'>Hello World</Typography>
    //       <Typography variant='h2'>Hello World</Typography>
    //       <ThemeToggle />

    //     </Stack>
    //   </Container>
    // </ThemeProvider>

    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Grid container spacing={2}>
    //     <Grid size = {{ xs: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>1</Button>
    //     </Grid>
    //     <Grid size = {{ xs: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>2</Button>
    //     </Grid>
    //     {/* <Grid size = {{ xs: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>3</Button>
    //     </Grid> */}
    //     <Grid size ="grow">
    //     <Button fullWidth>3</Button>
    //     </Grid>
    //   </Grid>
    // </ThemeProvider>

    //  <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Container maxWidth="laptop">
    //   <Grid container spacing={2}>
    //     <Grid size = {{ desktop: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>1</Button>
    //     </Grid>
    //     <Grid size = {{ xs: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>2</Button>
    //     </Grid>
    //     {/* <Grid size = {{ xs: 12 , md: 6 , xl: 4}}>
    //     <Button fullWidth>3</Button>
    //     </Grid> */}
    //     <Grid size ="grow">
    //     <Button fullWidth>3</Button>
    //     </Grid>
    //   </Grid>
    //   </Container>
    // </ThemeProvider>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="md">
        <Button
        sx ={(theme) => ({
          backgroundColor: "green",
          [ theme.breakpoints.between('xs','lg')]: {
            backgroundColor: "cyan",
        }       })}
        >RESPONSIVE BUTTON</Button>

        <Autocomplete
        sx={{width:300}}
        renderInput = {(params) => <TextField {...params} label="User" />}
        options={[]}/>



      </Container>

      {isTablet ? <>tablet</> : <>not tablet</>}
    </ThemeProvider>
  )
}

export default App
