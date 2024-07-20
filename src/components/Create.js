import {React} from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyTextField from './forms/MyTextField'
import MyMultiLineField from './forms/MyMultilineField'
import {useForm} from 'react-hook-form'
import AxiosInstance from './Axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {

  const navigate = useNavigate()


  const {handleSubmit, reset, setValue, control} = useForm()
  const submission = (data) => {
    AxiosInstance.post( 'project/',{
      name: data.name,
      instructions: data.instructions,
      ingredients: data.ingredients,
    })

    .then((res) => {
      navigate('/posts')
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit(submission)}>
      <Box sx={{display:'flex', width:'100%', backgroundColor:"#00003F", marginBottom:'10px'}}>
        <Typography sx={{marginLeft:'20px', color:'#fff'}}>
          Create Recipe
        </Typography>
      </Box>

      <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>
      <Box sx={{display:'flex', justifyContent:'space-around'}}>
          <MyTextField
            label="Name"
            name="name"
            control={control}
            placeholder="Provide a recipe name"
            width= {'30%'}
          />
          <MyMultiLineField
          label="Instructions"
          name="instructions"
          control={control}
          placeholder="What are the steps?"
          width= {'30%'}
          />
          <MyMultiLineField
          label="Ingredients"
          name="ingredients"
          control={control}
          placeholder="What are the ingredients?"
          width= {'30%'}
          />
        </Box>
        <Box sx={{display:'flex', padding:4, flexDirection:'column'}}>
          <Button variant="contained" type="submit" sx={{width:"20%"}}>
            Submit
          </Button>
        </Box>
      </Box>
      </form>
    </div>
  )
}

export default Create