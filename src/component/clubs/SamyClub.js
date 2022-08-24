import { makeStyles } from '@material-ui/core/styles';
import React,  {  Component  } from 'react';
import {Grid} from "@material-ui/core";
import ClubCard from "./ClubCard";
import {Club} from './clubData';
import OSS from "./OSS.png";
import './samyClub.css';

//edit this function to make changes for club webpage

function Clubs() {
    const styles = useStyles();
    return (
        <div className="cardbackground">
            <div>
                <h1 className="heading">IITDh Clubs</h1>
                <div className={styles.center}>
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="center" 
                        alignItems="center" 
                        className={styles.main}
                    >
                        {Club.map((data, id) => (
                            <>
                                {id===Club.length-1 ? (
                                    <Grid item xs={12} sm={2} xl={2} key={id}>
                                        <ClubCard {...data} />
                                    </Grid>
                                ) : (
                                    <Grid item xs={12} sm={2} xl={2} key={id} className={styles.mr}>
                                        <ClubCard {...data} />
                                    </Grid>
                                )}
                            </>
                        ))}
                    </Grid>
                </div>
                <h1 className="heading">IITDh Organization</h1>
                <div className={styles.mainCenter}>
                    <Grid 
                        container 
                        direction="row" 
                        justifyContent="center" 
                        alignItems="center" 
                    >
                        <Grid item xs={12} sm={2} xl={2}>
                            <ClubCard Name="Open Source Society" image={OSS} desc="Open Source Society - IITDh organization" />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

const useStyles = makeStyles({
    main: {
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingRight: 0,
        paddingLeft: 0,
    },
    center: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    mainCenter: {
        paddingTop: "3%",
        paddingBottom: "3%",
        paddingRight: 0,
        paddingLeft: 0,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    mr: {
        marginRight: "12px"
    }
});

export default Clubs
