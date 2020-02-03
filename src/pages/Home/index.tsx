import React, {Component} from "react";
import Repository from "../../components/Repository";

import "./index.css"
import Header from "../../components/Header";
import {State} from "./state";

const INITIAL_STATE: State = {
    repositories: [
        {
            name: "Tensorflow",
            description: "An Open Source Machine Learning Framework for Everyone https://tensorflow.org",
            owner: {
                login: "tensorflow",
                avatar_url: "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
            },
            created_at: new Date(),
            open_issues_count: 0,
            stargazers_count: 0
        },
        {
            name: "Tensorflow",
            description: "An Open Source Machine Learning Framework for Everyone https://tensorflow.org",
            owner: {
                login: "tensorflow",
                avatar_url: "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
            },
            created_at: new Date(),
            open_issues_count: 0,
            stargazers_count: 0
        },
        {
            name: "Tensorflow",
            description: "An Open Source Machine Learning Framework for Everyone https://tensorflow.org",
            owner: {
                login: "tensorflow",
                avatar_url: "https://secure.gravatar.com/avatar/e7956084e75f239de85d3a31bc172ace?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"
            },
            created_at: new Date(),
            open_issues_count: 0,
            stargazers_count: 0
        }
    ],
    total_repositories: 0
};

export class Home extends Component {
    state: State = INITIAL_STATE;

    render() {
        const { repositories } = this.state;
        
        return (
            <div>
                <Header/>
                <main>
                    {repositories.map((repository, index) => (
                            <Repository
                                name={repository.name}
                                created_at={repository.created_at}
                                description={repository.description}
                                open_issues_count={repository.open_issues_count}
                                owner={repository.owner}
                                stargazers_count={repository.stargazers_count}
                                key={index}/>)
                    )}

                </main>
            </div>
        );
    }
}