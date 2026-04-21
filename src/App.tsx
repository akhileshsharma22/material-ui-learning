import { CssBaseline, Slider, Stack, Container, Button , styled , type SliderProps } from '@mui/material'


const CustomSlider = styled(Slider)<SliderProps>(({theme}) =>({
  // width:"80px",
  width:theme.spacing(10),
  color:theme.palette.success.main,
  
  "& .MuiSlider-thumb" : {
    "&:hover, &.Mui-focusVisible" : {
      backgroundColor:"red",
    },
  },
}));

function App() {



  return (
    <Container
    sx = {{
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
          <CustomSlider />

      </Stack>
    </Container>
  )
}

export default App
