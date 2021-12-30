import React, {useState, useEffect} from 'react';
import './App.css';
import Post from './Post';
import { db } from './firebase';
import { Button, Modal } from '@mui/material';
import { makeStyles } from "@material-ui/core/styles";


function getModalStyle() {
  const top = 30;
  const left = 30;

  return {
    height: "300px",
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    height: 200,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function App() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect -> Runs a piece of code based on a specific conditions
  useEffect(() => {
    // where the code runs
    db.collection('posts').onSnapshot(snapshot => {
    // everytime a new post is added, this code fires
    setPosts(snapshot.docs.map(doc => ({
      id: doc.id, 
      post: doc.data()
    })));
    })
  }, []);

  const signUp = (event) => {

  }

  return (
    <div className="App">
      <Modal
       open={open}
       onClose={() => setOpen(false)}
      >
       <div style={modalStyle} className={classes.paper}>
         <h2>I am a Modal</h2>
       </div>
      </Modal>
      <div className='app__header'>
        <img className='app__headerImage'
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''>
        </img>
      </div>

      <Button onClick={() => setOpen(true)}>Sign Up</Button>
      <h1>Instagram Clone Built With React!</h1>

      {
        posts.map(({id, post}) => (
          <Post key={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }

    </div>
  );
}

export default App;
