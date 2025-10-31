import './perfil.css'

export default () => {
    const usuario = {
        name: 'Gui',
        avatar: 'https://github.com/Guillerme00.png'
    }

    return (
        <div>
            <img className="perfil-avatar" src={usuario.avatar}/>
            <h3 className="perfil-titulo">{usuario.name}</h3>
        </div>
    )
}
