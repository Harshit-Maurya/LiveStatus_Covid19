import React from "react";
import {
    Card,
    CardImg,
    CardBody,
} from "reactstrap";
import { Grid } from '@material-ui/core';

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
                    <Grid >
                    <div className="col-12">
                        <Card>
                            <CardBody className="bg-faded">
                                <blockquote className="blockquote">
                                    <hr />
                                    <p className="mb-0">
                                        Corona viruses are a large family of viruses which may cause illness in animals or humans. Popular ones are respiratory diseases such as MERS and SARS</p>
                                    <center>
                                        <p className="mb-0"> The most recently discovered coronavirus causes coronavirus disease COVID-19 </p><p><a href="https://www.mohfw.gov.in/">Ministry of Health and Finance Welfare</a></p>
                                        <p><a href="https://www.who.int/">World Health Organisation</a></p>
                                    </center>
                                </blockquote>
                            </CardBody>
                        </Card>
                    </div>
                    </Grid>

                </Grid>
            </div>
        </marquee>
    );
};
export default Img;