import ProjectElem from "./projectElem";
import weather from "../../public/img/weather_app_screen.png"
import antools from "../../public/img/antools_screen.png"
import roomtibet from "../../public/img/roomTibet_screen.png"

export default function Projects() {
    return (
    <section className="projects" id="projects">
        <h2 className="projects__title title">
            <span>Проекты</span>
        </h2>
        <div className="projects__container">
            <ProjectElem name='Weather-App' src={weather} descr="Веб приложение 'Погода' на VanillaJS. Приложение определяет страну, город, дату, время, температуру воздуха и скорость ветра по указанным данным (долготе и широте). Настроено взаимодействие c API карты. Есть возможность создавать несколько виджетов с независимыми друг от друга данными." />
            <ProjectElem name='antools_layout' src={antools} descr="Flexbox верстка сайта Antools с использованием препроцессора SASS/SCSS по БЭМ методологии с анимациями." />
            <ProjectElem name='layout_RoomTibet' src={roomtibet} descr="Адаптивная flexbox верстка сайта RoomTibet с анимациями." />
        </div>
    </section>
    )
}
