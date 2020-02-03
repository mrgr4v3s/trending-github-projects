import React, {Component} from "react";
import Repository from "../../components/Repository";

import "./index.css"
import Header from "../../components/Header";
import {State} from "./state";

import { findLatestRepositories } from "../../services/github-api.service"
import {GithubResponse} from "../../models/github-response";

const INITIAL_STATE: State = {
    repositories: [],
    total_repositories: 0
};

export class Home extends Component {
    state: State = INITIAL_STATE;

    componentDidMount(): void {
        findLatestRepositories().subscribe(
            (value) => {
                const githubResponse: GithubResponse = value.data;

                const newState: State = {
                    repositories: githubResponse.items,
                    total_repositories: githubResponse.total_count
                };

                this.setState(newState);
            },
            (error) => {
                console.log('Error fetching data from github', error);
            }
        )
    }

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