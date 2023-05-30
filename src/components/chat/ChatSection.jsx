import React, { useState } from 'react';
import { Box, Divider, FormControl, IconButton, InputAdornment, List, ListItem, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import chat from '../../assets/images/chat_icon.png';
import { user_list } from '../../dummy_data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import user from '../../assets/images/user1.png'
import OurChat from './OurChat';
import WithChat from './WithChat';
import InputForm from './InputForm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ChatSection = () => {
    const [data] = useState(user_list)
    const [list, setList] = useState(data)

    const [users, setUsers] = useState();
    const [inputStr, setInputStr] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [searchInput] = useState();

    const searchUser = (val) => {
        let matchUser = data.filter((user) => user.name.toLowerCase().includes(val.toLowerCase()));
        setList(matchUser)
    }

    const openChat = (user) => {
        setUsers(user);
        user?.id !== users?.id && setInputStr('');
        setShowPicker(showPicker && false);
    }

    return (
        <Box className='chat_wrapper'>
            <Box className={!users ? 'sidebar custom-scrollbar' : 'sidebar custom-scrollbar hide_sidebar'}>
                <Box className="he">
                    <h1>Chats</h1>
                    <FormControl fullWidth>
                        <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                            placeholder='search here'
                            className='search'
                            sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none !important' } }}
                            value={searchInput}
                            onChange={(e) => searchUser(e.target.value)}
                        />
                    </FormControl>
                </Box>
                <Box className="chat_user_wrapper">
                    <List>
                        {list && list?.map((user) =>
                            <ListItem sx={{ padding: '0' }}>
                                <Box className='chat_user_card' onClick={() => openChat(user)}>
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
            <Box className={!users ? "chat_main" : "chat_main show_chat"}>
                {!users ?
                    <Box className='chat_hiden'>
                        <img src={chat} alt="img" />
                        <p>Select a chat to view messages</p>
                    </Box> :
                    <Box className="chat_view">
                        <Box className='chat_header_main'>
                            <Box className="chat_header">
                                <Box className='header_detail'>
                                    <IconButton className={user ? 'show_icn' : 'show_icn'} onClick={()=>setUsers('')}><ArrowBackIcon /></IconButton>
                                    <Box className="img_wrapper"><img src={users.dp} alt="dp" /></Box>
                                    <h3 className="header_name">{users.name}</h3>
                                </Box>
                                <IconButton className="dlt_icn"> 
                                <DeleteOutlineIcon sx={{ color: '#FE5F7C' }} />
                                </IconButton>
                            </Box>
                        </Box>
                        <Divider />
                        <Box className="chat_body_main custom-scrollbar">
                            <Box className='msg_wrapper'>
                                <List>
                                    <OurChat />
                                    <WithChat />
                                </List>
                            </Box>
                        </Box>
                        <Box className="chat_footer_main">
                            <InputForm user={users}/>
                        </Box>
                    </Box>}
            </Box>
        </Box>
    );
}

export default ChatSection;
