import './perfil.css'

export default (props) => {
    const { avatar, name } = props;
    return (
        <div>
            <img className="perfil-avatar" src={avatar}/>
            <h3 className="perfil-titulo">{name}</h3>
        </div>
    )
}

