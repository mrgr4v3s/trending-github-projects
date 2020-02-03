import React, {FC} from "react";

import "./index.css";
import {Owner} from "../../../models/owner";

const Avatar: FC<Owner> = (props) => (
    <div className="creator-avatar">
        <img src={props.avatar_url} alt={props.login}/>
    </div>
);

export default Avatar;