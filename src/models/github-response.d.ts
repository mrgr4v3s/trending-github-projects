import {GithubRepository} from "./repository";

export interface GithubResponse {
    total_count: number;
    items: GithubRepository[];
}