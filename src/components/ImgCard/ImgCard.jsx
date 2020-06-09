import React from "react";
import {
    Card,
    CardImg,
    CardBody,
} from "reactstrap";
import cx from 'classnames';
import { Grid, CardContent, Typography} from '@material-ui/core';

import styles from './ImgCard.module.css';
import hm from './images/hm.png';
import hm1 from './images/hm1.png';
import hm2 from './images/hm2.png';

const Img = () => {

    return (

        <marquee direction="left" behavior="slide">
            <hr />
            <div className={styles.container}>
                <Grid container spacing={2} justify="center">
                    <Grid item xs={12} md={3} component={Card}>

                        <Card>
                            <CardImg width="100%" src={hm1} alt={"Covid-19"} />
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={3} component={Card} >

                        <Card>
                            <CardImg width="100%" src={hm2} alt={'Covid-19'} />
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={3} component={Card}>

                        <Card>
                            <CardImg width="100%" src={hm} alt={"Covid-19"} />
                        </Card>

                    </Grid>
                    <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.deaths)}>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
             <center> For more Covid-19 related updates, visit </center>
            </Typography>
            <Typography variant="h5" component="h2">
            <p><a href="https://www.who.int/"><b>World Health Organisation</b></a></p>
            </Typography>
            <Typography color="textSecondary">
            <p ><a href="https://www.mohfw.gov.in/"><b>Ministry of Health and Finance Welfare</b></a></p>
            </Typography>
            <Typography variant="body2" component="p">
             <center> Be Vigilant, Be Safe </center>
            </Typography>
          </CardContent>
        </Grid>
                </Grid>
             
            </div>
            <hr />
        </marquee>
        
    );
};
export default Img;