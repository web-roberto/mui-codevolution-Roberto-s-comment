import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingButton = () => {
  return (
    <>
    <h2> ********** VIDEO 39- LOADING BUTTON ***********</h2>
      <h5>**** loading - aparece el simbolo de carga dentro del boton ***</h5>
      <h5>****** puedo poner icono dentro del botón **********</h5>
    <Stack direction='row' spacing={2}>
      <LoadingButton variant='outlined'>Submit</LoadingButton>
      <LoadingButton loading variant='outlined'>
        Submit
      </LoadingButton>
      <LoadingButton loadingIndicator='Loading...' variant='outlined'>
        Fetch data
      </LoadingButton>
      <LoadingButton loading loadingIndicator='Loading...' variant='outlined'>
        Fetch data
      </LoadingButton>
      <LoadingButton
        loadingPosition='start'
        startIcon={<SaveIcon />}
        variant='outlined'>
        Save
      </LoadingButton>
      <LoadingButton
        loading
        loadingPosition='start'
        startIcon={<SaveIcon />}
        variant='outlined'>
        Save
      </LoadingButton>
    </Stack>
    </>
  )
}
