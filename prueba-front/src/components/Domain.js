import React, { useState } from 'react';
import { Card, Typography, List } from '@material-ui/core';
import Url from './Url';

function Domain({ domain, urls }) {
  const [show, setShow] = useState(false);

  const renderUrl = () => {
    return urls.map((url) => <Url key={url} url={url} />);
  };

  return (
    <Card
      style={{ padding: '20px', marginTop: '10px', cursor: 'pointer' }}
      onClick={() => setShow(!show)}
    >
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        {domain}
      </Typography>
      <List component="nav" aria-label="mailbox folders">
        {show ? renderUrl() : null}
      </List>
    </Card>
  );
}

export default Domain;
