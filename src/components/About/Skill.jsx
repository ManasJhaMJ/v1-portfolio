function Skill({ src, name }) {
    return (
        <div className="skill">
            <img src={src} alt={name} />
            <p>{name}</p>
        </div>
    )
}

export default Skill