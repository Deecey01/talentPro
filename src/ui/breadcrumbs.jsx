import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

function Breadcrumb() {
  const navigate = useNavigate();

  function handleClick(event, path) {
    event.preventDefault();
    navigate(path);
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link 
      underline="hover" 
      key="1" 
      color="inherit" 
      href="#" 
      onClick={(event) => handleClick(event, '/')}>
      TalentPro
    </Link>,
    <Typography key="2" color="text.primary">
      Graphic & Design
    </Typography>,
  ];

  return (
    <>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
    </>
  );
}

export default Breadcrumb;
