import React from 'react';
import { ListItem, Divider, ListItemText } from '@material-ui/core';

function Url({ url }) {
  const openUrl = (event) => {
    event.stopPropagation();
    window.open(url, '_blank');
  };

  return (
    <>
      <ListItem button>
        <ListItemText primary={url} onClick={openUrl} />
      </ListItem>
      <Divider />
    </>
  );
}

export default Url;
