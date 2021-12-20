import React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';

export function InfoPopper(props) {

  const anchorEl = props.anchorEl
  const setAnchorEl = props.setAnchorEl;
  const contents = props.contents;

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (<>

    <div className={`back-drop ${open? "active" : ""}`}  onClick={()=>setAnchorEl(null)}></div>

    <Popper
      id={id}
      open={open}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
        {contents ? contents : "Popover 입니다!"}
      </Box>
    </Popper>

  </>);
}
