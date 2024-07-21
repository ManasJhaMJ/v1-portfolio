function Project({ work, title, src }) {
    return (
        <div className="project">
            <p>{work}</p>
            <h1>{title}</h1>
            <img src={src} alt="Project" />
        </div>
    )
}

export default Project