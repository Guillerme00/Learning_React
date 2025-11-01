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
            {repos.map(repositorio => (
                <li key={repositorio.id}>
                    <b>Name:</b> {repositorio.name}
                    <b> Language:</b> {repositorio.language}
                </li>
            ))}
        </ul>
    )
}