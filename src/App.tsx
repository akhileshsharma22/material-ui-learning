import { CssBaseline, Slider, ThemeProvider, Stack, Container, Button, styled, type SliderProps, createTheme } from '@mui/material'


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
}));

const theme = createTheme({

  typography: {
    fontFamily: "Poppins",
  },
})

function App() {



  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
        maxWidth="xs">
        <Stack >
          {/* <CssBaseline />
        <Slider
        disabled sx={{width:100,
           color:'success.main',
          //  ':hover':{
          //   backgroundColor:'yellow'
          //  },
          //  "& .MuiSlider-thumb" : {
          //   ":hover":{
          //     backgroundColor:"blue"
          //   },
          //   backgroundColor: "red",
          //  },
          // "&.Mui-disabled" : {
          //   ".MuiSlider-thumb" : {
          //     backgroundColor: "error.main",
          //   },
          //  },
          
        }}
        
        />

          <Button >Hover me</Button> */}
          <CustomSlider error />
          <Button >SUBMIT</Button>

        </Stack>
      </Container>
    </ThemeProvider>
  )
}

export default App
