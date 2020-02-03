import axios, {AxiosResponse} from "axios";
import { Observable, from } from "rxjs";
import {GithubResponse} from "../models/github-response";

const BASE_URL = 'https://api.github.com';

const getDateThirtyDaysAgo = (): string => {
    const priorDateTimestamp = new Date().setDate(new Date().getDate() - 30);

    const priorDate = new Date(priorDateTimestamp);

    return `${priorDate.getFullYear()}-${priorDate.getMonth() + 1}-${priorDate.getDay()}`
};

export const findLatestRepositories = (page: number = 1): Observable<AxiosResponse<GithubResponse>> => {
    const filterDate = getDateThirtyDaysAgo();

    let observable: Observable<AxiosResponse<GithubResponse>> = from(axios.get<GithubResponse>(`${BASE_URL}/search/repositories?q=created:>${filterDate}&sort=stars&order=desc&page=${page}`));

    return observable;
};
