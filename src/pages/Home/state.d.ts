import {GithubRepository} from "../../models/repository";

export interface State {
    repositories: GithubRepository[];
    total_repositories: number;
}