import ProjectElem from "./projectElem";


export default function Projects() {
    return (
    <section className="projects">
        <h2 className="title">Проекты</h2>
        <div className="projects__container">
            <ProjectElem name='antools' src="../../public/img/antools_screen.png" descr="описание" />
            <ProjectElem name='euclid' src="../../public/img/euclid_site_screen.png" descr="описание" />
            <ProjectElem name='roomtibet' src="../../public/img/roomTibet_screen.png" descr="описание" />
            <ProjectElem name='weather' src="../../public/img/weather_app_screen.png" descr="описание" />
        </div>
    </section>
    )
}
