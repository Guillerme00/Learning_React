import { useEffect, useState } from "react";

export default ({ id }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${id}/repos`)
        .then(res => res.json())
        .then(resJson => (
            setRepos(resJson)
        ));
    },[])



    return (
        <ul>
            {repos.map(({id, name, language}) => (
                <li key={id}>
                    <b>Name:</b> {name}
                    <b> Language:</b> {language}
                </li>
            ))}
        </ul>
    )
}