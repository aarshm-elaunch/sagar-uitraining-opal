import React, { useState } from 'react';
import { Avatar, Box, Divider, FormControl, InputAdornment, List, ListItem, ListItemAvatar, ListItemText, OutlinedInput, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import user1 from '../../assets/images/user1.png';
import DoneIcon from '@mui/icons-material/Done';
import chat from '../../assets/images/chat_icon.png';
import { user_list } from '../../dummy_data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ChatSection = () => {
    const [users, setUsers] = useState();
    console.log(users)
    return (
        <Box className='chat_wrapper'>
            <Box className='sidebar custom-scrollbar'>
                <Box className="he">
                    <h1>Chats</h1>
                    <FormControl fullWidth>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            placeholder='search here'
                            className='search'
                            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none !important' } }}
                        />
                    </FormControl>
                </Box>
                <Box className="chat_user_wrapper">
                    <List>
                        {user_list.map((user)=>
                        <ListItem sx={{ padding: '0' }}>
                            <Box className='chat_user_card' onClick={()=>setUsers(user)}>
                                <Box className="user_dp"><img src={user.dp} alt="dp" /></Box>
                                <Box className="user_name">
                                    <Box className="title">
                                        <h3>{user.name}</h3>
                                        <p>{user.time}</p>
                                    </Box>
                                    <Box className="detail">
                                        <h3>{user.meaage}</h3>
                                        <DoneIcon sx={{ height: '18px', width: '18px' }} />
                                    </Box>
                                </Box>
                            </Box>
                        </ListItem>
                        )}
                    </List>
                </Box>
            </Box>
            <Box className="chat_main">
                {!users ? 
                <Box className='chat_hiden'>
                    <img src={chat} alt="img" />
                    <p>Select a chat to view messages</p>
                </Box>:
                <Box className="chat_view">
                    <Box className='chat_header_main'>
                        <Box className="img_wrapper"><img src={users.dp} alt="dp" /></Box>
                        <Box className="chat_header">
                            <h3 className="header_name">{users.name}</h3>
                            <Box className="dlt_icn"><DeleteOutlineIcon sx={{color: '#FE5F7C'}} /></Box>
                        </Box>
                    </Box>
                    <Divider />
                    <Box className="chat_body_main">
                        Skj
                    </Box>
                    <Box className="chat_footer_main">
                        SDSD
                    </Box>
                </Box>}
            </Box>
        </Box>
    );
}

export default ChatSection;
