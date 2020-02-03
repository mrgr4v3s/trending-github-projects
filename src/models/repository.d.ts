import {Owner} from "./owner";

export interface GithubRepository {
    name: string;
    owner: Owner;
    description: string;
    stargazers_count: number;
    open_issues_count: number
    created_at: Date;
}
