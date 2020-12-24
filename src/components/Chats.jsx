import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import { Chat } from './';

const useStyles = makeStyles(() =>
  createStyles({
    "chats":{
      height:400,
      padding:'0',
      overflow: 'scroll'
    }
  })
)

const Chats = ({chats}) => {
  const classes = useStyles();
  return (
    <List className={classes.chats} id={"scroll-area"} >
      {chats.map((chat, index) => (
        <Chat chat={chat} key={index.toString()} />
      ))}
    </List>
  );
}

export default Chats;
