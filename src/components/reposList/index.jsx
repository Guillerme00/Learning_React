import styles from './RepoList.module.css';
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
        <div className='container'>
            <ul className={styles.list}>
                {repos.map(({id, name, language, html_url}) => (
                    <li className={styles.listItem} key={id}>
                        <div className={styles.itemName}><b>Name:</b> {name}</div><br />
                        <div className={styles.itemLanguage}><b> Language:</b> {language}</div><br />
                        <a className={styles.itemLink} target='_blank' href={html_url}>View repository</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}