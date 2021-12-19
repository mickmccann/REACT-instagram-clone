import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';


function Post() {
    return (
        <div className='post'>
            <Avatar
            alt="Michael"
            src="/static/images/avatar/1.jpg"
            />
            <h3>Username</h3>
            {/* header -> avatar + username */}

            <img className='post__image' src='https://res.cloudinary.com/practicaldev/image/fetch/s--KXnc-eL7--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/j8dm03jh5qbmgxvq2an3.png' alt=''></img>

            <h4 className='post__text'><strong>michael_coder</strong> Coding makes you stronger!</h4>
        </div>
    )
}

export default Post
