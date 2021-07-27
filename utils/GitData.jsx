import useSWR from "swr";
import gitLocalData from "../content/github";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function GitData() {
    const gitUrl = "https://api.github.com/users/Abhi19201/repos";

    const { data, error } = useSWR(gitUrl, fetcher);

    if (error) return gitLocalData;
    if (!data) return gitLocalData;
    return data;
}
