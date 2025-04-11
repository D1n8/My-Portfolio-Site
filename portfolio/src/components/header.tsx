export default function Header() {
    return (
    <header className="header">
         {/* <h1 className="header__title">Сайт портфолио</h1> */}
         <nav>
            <ul className="nav header__nav">
                <li className="nav__item"><a href="#about">Обо мне</a></li>
                <li className="nav__item"><a href="">Проекты</a></li>
                <li className="nav__item"><a href="">Контакты</a></li>
            </ul>
         </nav>
    </header>
    )
    
}
