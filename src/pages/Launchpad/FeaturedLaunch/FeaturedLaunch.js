import React from "react";
import Container from "@mui/material/Container";
import Button from '@mui/material/Button';

import "./FeaturedLaunch.css";

const FeaturedLaunch = () => {
    return (
        <Container>
            <div className="featuredlaunch_container">
                <div className="featuredlaunch_leftCol">
                    <div className="featuredlaunch_tag">FEATURED LAUNCH</div>
                    <div className="featuredLaunch_name">
                        Folktales of Lunaria: Blood Moonstones:
                    </div>
                    <div className="featuredlaunch_clipboard">
                        <div className="featuredlaunch_box">
                            <span>ITEMS</span>
                            <div className="featuredlaunch_quantity">2,000</div>
                        </div>
                        <div className="featuredlaunch_box">
                            <span>PRICE</span>
                            <div className="featuredlaunch_quantity">1 SOL</div>
                        </div>
                    </div>
                    <p>Blood Moonstones have the power to corrupt Lunarians on October 31st.</p>
                    <Button
                        variant="contained"
                        className="featured__launch__button"
                        style={{ width: "33%", fontSize: "larger" }}
                    >
                        Select Wallet
                    </Button>
                </div>
                <div className="featuredlaunch_rightCol">
                    <img
                        src="https://dl.airtable.com/.attachmentThumbnails/76c408ed3162a12f78a74b9b0f859334/833938fa"
                        alt="NFT"
                        width="300px"
                    />
                </div>
            </div>
        </Container>
    );
};

export default FeaturedLaunch;
