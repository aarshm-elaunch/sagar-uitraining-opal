import React, { useState } from 'react';
import { Box, Button, Divider, FormControl, IconButton, InputAdornment, List, ListItem, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DoneIcon from '@mui/icons-material/Done';
import chat from '../../assets/images/chat_icon.png';
import { user_list } from '../../dummy_data';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Picker from 'emoji-picker-react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import user from '../../assets/images/user1.png'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import OurChat from './OurChat';
import WithChat from './WithChat';
import InputForm from './InputForm';

const ChatSection = () => {
    const [data, setdata] = useState(user_list)
    const [list, setList] = useState(data)

    const [users, setUsers] = useState();
    const [inputStr, setInputStr] = useState("");
    const [showPicker, setShowPicker] = useState(false);
    const [searchInput] = useState();
    const [pre, setPre] = useState([]);

    const searchUser = (val) => {
        let matchUser = data.filter((user) => user.name.toLowerCase().includes(val.toLowerCase()));
        setList(matchUser)
    }

    const openChat = (user) => {
        setUsers(user);
        user?.id !== users?.id && setInputStr('');
        setShowPicker(showPicker && false);
    }

    const onEmojiClick = (event, emojiObject) => {
        console.log(emojiObject)
        setInputStr((prevInput) => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const previewFile = (e) => {
        var file = e.target.files[0];
        setPre([...pre, URL.createObjectURL(file)]);
    }

    const removeImage = (image) => {
        const deleteImg = pre.filter((item)=>item !== image);

        setPre(deleteImg);
    }

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
            <Box className="chat_main">
                {!users ?
                    <Box className='chat_hiden'>
                        <img src={chat} alt="img" />
                        <p>Select a chat to view messages</p>
                    </Box> :
                    <Box className="chat_view">
                        <Box className='chat_header_main'>
                            <Box className="chat_header">
                                <Box className='header_detail'>
                                    <Box className="img_wrapper"><img src={users.dp} alt="dp" /></Box>
                                    <h3 className="header_name">{users.name}</h3>
                                </Box>
                                <Box className="dlt_icn"><DeleteOutlineIcon sx={{ color: '#FE5F7C' }} /></Box>
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
                            {/* <Box className="input_wrapper">
                                <FormControl fullWidth>
                                    {showPicker && <Picker onEmojiClick={onEmojiClick} className="picker" />}
                                    {pre.length ? <Box className="preview">
                                        {pre.map((img) =>
                                            <Box sx={{ display: 'flex', gap: '12px' }}>
                                                <Box className='img_wrapper'>
                                                    <img src={img} alt='img' />
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        edge="start"
                                                        className='icn_close'
                                                        onClick={() => removeImage(img)}
                                                    >
                                                        <HighlightOffIcon sx={{ fill: '#fff' }} />
                                                    </IconButton>
                                                </Box>
                                                <Box >
                                                </Box>
                                            </Box>
                                        )}
                                        <IconButton
                                            variant="contained"
                                            component="label"
                                            className='icn_pluse'
                                        >
                                            <AddOutlinedIcon sx={{ fill: '#000' }} />
                                            <input type="file" hidden onChange={(e) => previewFile(e)} />
                                        </IconButton>
                                    </Box>: ''}
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type='text'
                                        placeholder='Type here...'
                                        value={inputStr}
                                        onChange={(e) => setInputStr(e.target.value)}
                                        startAdornment={
                                            <InputAdornment position="start">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    edge="start"
                                                    onClick={() => setShowPicker(!showPicker)}
                                                >
                                                    <InsertEmoticonIcon sx={{ fill: '#000' }} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        endAdornment={
                                            !inputStr && <InputAdornment position="end">
                                                <IconButton
                                                    variant="contained"
                                                    component="label"
                                                >
                                                    <AttachmentIcon sx={{ transform: 'rotate(-45deg)', fill: '#000' }} color='#000 !important' />
                                                    <input type="file" hidden onChange={(e) => previewFile(e)} />
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        className='input_massage'
                                        sx={{ '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #EFF3F9 !important' }, borderRadius: showPicker ? '0' : pre.length ? '0' : '24px' }}
                                    />
                                </FormControl>
                            </Box> */}
                            <InputForm user={users}/>
                        </Box>
                    </Box>}
            </Box>
        </Box>
    );
}

export default ChatSection;
