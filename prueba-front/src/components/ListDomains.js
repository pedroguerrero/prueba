import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  TextField,
} from '@material-ui/core';
import Domain from './Domain';
import Dialog from './Dialog';
import { addUrl, getDomains } from './service/domainService';

function ListDomains() {
  const [domains, setDomains] = useState([]);
  const [errorSavingUrl, setErrorSavingUrl] = useState(false);
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState('');
  const history = useHistory();

  useEffect(() => {
    getDomains()
      .then((data) => {
        setDomains(data.data);
      })
      .catch((err) => {
        return history.push('/login');
      });
  }, []);

  const logout = () => {
    localStorage.clear();
    return history.push('/login');
  };

  const save = async (event) => {
    setErrorSavingUrl(false);
    event.preventDefault();

    try {
      await addUrl(url);
      const { data: domains } = await getDomains();
      setDomains(domains);
      setOpen(false);
    } catch (err) {
      setErrorSavingUrl(true);
    }
  };

  const openDialog = () => {
    setUrl('');
    setErrorSavingUrl(false);
    setOpen(true);
  };

  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open}>
        <form onSubmit={save}>
          <div>
            <TextField
              style={{ width: '100%' }}
              id="outlined-basic"
              label="URL"
              variant="outlined"
              required
              value={url}
              onChange={(event) => setUrl(event.target.value)}
            />
            {errorSavingUrl ? (
              <small style={{ color: 'red' }}>Error saving the URL</small>
            ) : null}
          </div>

          <div style={{ marginTop: '10px' }}>
            <Button variant="contained" color="secondary" onClick={closeDialog}>
              Close
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: '5px' }}
              type="submit"
            >
              Save
            </Button>
          </div>
        </form>
      </Dialog>

      <AppBar
        position="static"
        color="default"
        elevation={0}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          alignItems: 'flex-end',
        }}
      >
        <Toolbar>
          <Button href="#" color="primary" variant="outlined" onClick={logout}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Typography
        variant="h4"
        align="center"
        color="textPrimary"
        gutterBottom
        style={{ marginTop: '100px' }}
      >
        Domain List
      </Typography>

      <div style={{ textAlign: 'center' }}>
        <Button variant="contained" color="primary" onClick={openDialog}>
          Add URL
        </Button>
      </div>

      <div style={{ padding: '20px' }}>
        {domains.map((domain) => (
          <Domain
            key={domain.domain}
            domain={domain.domain}
            urls={domain.urls}
          />
        ))}
      </div>
    </>
  );
}

export default ListDomains;
