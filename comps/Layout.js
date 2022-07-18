
import Head from 'next/head';
import { AppBar, Container, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../utils/styles";

const Layout = ({children}) => {

    const classes=useStyles();
    return ( 
        <div>
            <Head>
                <title>E-Comm</title>
            </Head>
            <AppBar position="static" className={classes.navbar}>
                <Toolbar>
                    <Typography>
                        E-Comm
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container className={classes.main}>
                {children}
            </Container>

            <footer className={classes.footer}>
                <Typography>
                    Copy@2022
                </Typography>
            </footer>
        </div>
     );
}
export default Layout;

