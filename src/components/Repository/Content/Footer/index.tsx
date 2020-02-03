import React, {FC} from "react";

import "./index.css";
import {FooterProps} from "./state";

const calculateDaysBetweenDateAndNow = (date: Date) => {
    const differenceInTime = new Date().getTime() - date.getTime();

    return Math.round(differenceInTime / (1000 * 3600 * 24));
};

const Footer: FC<FooterProps> = (props) => (
    <div className="footer">
        <span className="number">Stars: {props.stars}</span>
        <span className="number">Issues: {props.issues}</span>
        <span className="creation-info">Submitted {calculateDaysBetweenDateAndNow(props.created_at)} days ago by {props.creator}</span>
    </div>
);

export default Footer;