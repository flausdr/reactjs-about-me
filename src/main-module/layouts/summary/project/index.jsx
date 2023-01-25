const Project = ({ name, description, linkGitHub, linkPreview, dateStart, dateFinish, className, previewImg }) => {
    return (
        <div className="row text-center p-5">
            <div className={className === 'project-left' ? 'd-flex flex-fill flex-row-reverse' : 'd-flex flex-fill'}>
                <div className="col-6">
                    <h3 className="font-weight-light">{name}</h3>
                    <p class="h5 font-weight-lighter">{dateStart} - {dateFinish}</p>
                    <p className="mt-5 mb-5 text-justify project__text">{description}</p>
                    <h6>Source: <a href={linkGitHub} className="text-decoration-none text-info" target="_blank" rel="noreferrer">{linkGitHub}</a></h6>
                    <h6>Live preview: <a href={linkPreview} className="text-decoration-none text-info" target="_blank" rel="noreferrer">{linkPreview}</a></h6>
                </div>
                <div className="col-6 d-flex align-items-center">
                    <span className="blur">
                        <img src={previewImg} alt="application" className="img-fluid img-thumbnail" />
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Project;