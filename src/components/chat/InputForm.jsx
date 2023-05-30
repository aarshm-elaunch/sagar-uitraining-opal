import React, { useEffect, useState } from 'react';
import { Box, FormControl, IconButton, InputAdornment, OutlinedInput, Typography } from '@mui/material';
import Picker from 'emoji-picker-react';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachmentIcon from '@mui/icons-material/Attachment';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DescriptionIcon from '@mui/icons-material/Description';
import SendIcon from '@mui/icons-material/Send';

const InputForm = ({ user }) => {
    const [showPicker, setShowPicker] = useState(false);
    const [inputStr, setInputStr] = useState("");
    const [pre, setPre] = useState([]);

    const onEmojiClick = (event, emojiObject) => {
        setInputStr((prevInput) => prevInput + emojiObject.emoji);
        setShowPicker(false);
    };

    const previewFile = (e) => {
        var file = e.target.files[0];
        setPre([...pre, file]);
    }

    const removeImage = (image) => {
        const deleteImg = pre.filter((item) => item !== image);
        setPre(deleteImg);
    }

    useEffect(() => {
        setShowPicker(false);
        setInputStr('');
        setPre([]);
    }, [user])

    return (
        <Box className="input_wrapper">
            <FormControl fullWidth>
                {showPicker && <Picker onEmojiClick={onEmojiClick} className="picker" />}
                {pre.length ? <Box className="preview">
                    {pre?.map((img) =>
                        <Box sx={{ display: 'flex', gap: '12px' }}>
                            <Box className='img_wrapper'>
                                {img.type.includes("text") ?
                                    <Box>
                                        <DescriptionIcon className='icn' sx={{ fill: '#3B37DA' }} />
                                        <Typography sx={{ textAlign: 'center' }}>{img.name}</Typography>
                                    </Box> :
                                    img.type.includes("pdf") ?
                                        <Box>
                                            <PictureAsPdfIcon className='icn' sx={{ fill: '#DE0000' }} />
                                            <Typography sx={{ textAlign: 'center' }}>{img.name}</Typography>
                                        </Box> :
                                        <img src={URL.createObjectURL(img)} alt='img' />
                                }
                                <IconButton
                                    aria-label="toggle password visibility"
                                    edge="start"
                                    className='icn_close'
                                    onClick={() => removeImage(img)}
                                >
                                    <HighlightOffIcon sx={{ fill: '#3B37DA' }} />
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
                </Box> : ''}
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
                        (!inputStr && !pre.length) ? <InputAdornment position="end">
                            <IconButton
                                variant="contained"
                                component="label"
                            >
                                <AttachmentIcon sx={{ transform: 'rotate(-45deg)', fill: '#000' }} color='#000 !important' />
                                <input type="file" hidden onChange={(e) => previewFile(e)} />
                            </IconButton>
                        </InputAdornment> :
                            <InputAdornment position="end">
                                <IconButton
                                    variant="contained"
                                    component="label"
                                >
                                    <SendIcon sx={{ fill: '#3B37DA' }} />
                                </IconButton>
                            </InputAdornment>
                    }
                    className='input_massage'
                    sx={{ '& .MuiOutlinedInput-notchedOutline': { border: '1px solid #EFF3F9 !important' }, borderRadius: showPicker ? '0' : pre.length ? '0' : '24px' }}
                />
            </FormControl>
        </Box>
    );
}

export default InputForm;
