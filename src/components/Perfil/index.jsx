import styles from './Perfil.module.css';

import { useEffect, useState } from "react";

export default ({ id }) => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(`https://api.github.com/users/${id}`)
        .then(res => res.json())
        .then(resJson => (
            setRepos(resJson)
        ));
    },[])

        return (
            <header className={styles.header}>
                <img className={styles.avatar} src={repos.avatar_url}/>
                <h1 className={styles.name}>{repos.login}</h1>
            </header>
        )
}
    
