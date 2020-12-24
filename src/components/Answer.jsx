import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles(() =>
  createStyles({
    "button":{
      borderColor:'pink',
      color:'pink',
      fontWeight: 'bold',
      marginBottom: '8px',
      "&:hover": {
        backgroundColor:'pink',
        color: "#fff"
      }
    }
  })
)

const Answer = ({answer, select}) =>{
  const classes = useStyles();

  return (
    <Button
      className={classes.button}
      variant="outlined"
      onClick={() => select(answer.content, answer.nextId)}>
      {answer.content}
    </Button>
  );
}


export default Answer;
