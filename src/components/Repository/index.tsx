import React, {FC} from "react";

import "./index.css";
import Avatar from "./Avatar";
import Content from "./Content";
import {GithubRepository} from "../../models/repository";

const Repository: FC<GithubRepository> = (props) => {
    const { owner } = props;

    return (
        <div className="card">
            <Avatar login={owner.login}
                    avatar_url={owner.avatar_url} />
            <Content stargazers_count={props.stargazers_count}
                     owner={owner}
                     open_issues_count={props.open_issues_count}
                     description={props.description}
                     created_at={props.created_at}
                     name={props.name} />
        </div>
    )
};

export default Repository;