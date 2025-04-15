import ProjectElem from "./projectElem";


export default function Projects() {
    return (
    <section className="projects" id="projects">
        <h2 className="projects__title title">Проекты</h2>
        <div className="projects__container">
            <ProjectElem name='weather' src="../../public/img/weather_app_screen.png" descr="Веб приложение 'Погода' на VanillaJS. Приложение определяет страну, город, дату, время, температуру воздуха и скорость ветра по указанным данным (долготе и широте). Настроено взаимодействие c API карты. Есть возможность создавать несколько виджетов с независимыми друг от друга данными." />
            <ProjectElem name='antools' src="../../public/img/antools_screen.png" descr="Flexbox верстка сайта Antools с использованием препроцессора SASS/SCSS по БЭМ методологии с анимациями." />
            {/* <ProjectElem name='euclid' src="../../public/img/euclid_site_screen.png" descr="описание" /> */}
            <ProjectElem name='roomtibet' src="../../public/img/roomTibet_screen.png" descr="Адаптивная flexbox верстка сайта RoomTibet с анимациями." />
        </div>
    </section>
    )
}
