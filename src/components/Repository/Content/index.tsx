import React, {FC} from "react";

import "./index.css";
import Footer from "./Footer";
import {GithubRepository} from "../../../models/repository";

const Content: FC<GithubRepository> = (props) => (
    <div className="content">
        <span className="title">{props.name}</span>
        <span className="description">{props.description}</span>

        <Footer stars={props.stargazers_count}
                issues={props.open_issues_count}
                created_at={props.created_at}
                creator={props.owner.login}/>
    </div>
);

export default Content;