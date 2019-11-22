
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: 'auto',
    backgroundColor: 'white',
  },
}));

export default function StickyFooter() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">My sticky footer can be found here.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}

// import React from 'react';
// import { Container, Col, Row } from 'reactstrap';

// export default class Footer extends React.Component {

//   render() {
//     return(
//       <Container w-100 fluid style={{ backgroundColor:'#427172', listStyleType:'none', justifyContent:'space-around', padding:'2em'}}>
//         <Row>


//               <li>@BOTTCAMP PRG</li>
//               <br></br>
//               <li>TERMS OF USE</li>
//               <br></br>
//               <li>PRIVACY</li>
//               <br></br>
//               <li>COOKIES</li>
//               <br></br>
//               <li>ADS</li>
//               <br></br>

//               <li>PRIVACY SETTING</li>
//               <br></br>
//               <li>SOCIAL CONTACTS</li>


//         </Row>
//       </Container>
//     )
//   }
// }
