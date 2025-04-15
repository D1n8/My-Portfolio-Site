export default function About() {
    return (
        <section className="about" id="about">

            <div className="about__me">
                <figure>
                    <img src="../../public/img/me.png" alt="me" className="img__me" />
                </figure>

                <p className="about__text about__text_me">Привет! Меня зовут Каримов Диньяр и я выполняю верстку и разработку сайтов с нуля.
                    Создаю современные, адаптивные и быстрые интерфейсы с упором на удобство и эстетику.
                    Люблю чистый код, внимание к деталям и превращать макеты в живые, интерактивные сайты.
                </p>
            </div>

            <h3 className="about__subtitle">Знания и навыки</h3>
            <p className="about__text">HTML CSS/SCSS JS TS REACT</p>
            <div className="icons-list">
                <img src="../../public/icons/html.png" alt="" className="icon" />
                <img src="../../public/icons/css.png" alt="" className="icon" />
                <img src="../../public/icons/sass.png" alt="" className="icon" />
                <img src="../../public/icons/js.png" alt="" className="icon" />
                <img src="../../public/icons/Typescript.png" alt="" className="icon" />
                <img src="../../public/icons/React.png" alt="" className="icon" />
            </div>
            <h3 className="about__subtitle">Образование</h3>
            <p className="about__text">Обучаюсь на 2 курсе ИРИТ-РТФ (УрФУ) по направлению "Программная инженерия"</p>
        </section>)
}
