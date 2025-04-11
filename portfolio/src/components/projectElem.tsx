export default function ProjectElem(props: {name: string, src: string, descr: string}) {
    return (
    <div className="projects__elem">
        <img src={props.src} alt={props.name} className="image"/>
        <div className="textbox">
            <p className="descr">{props.descr}</p>
        </div>
    </div>)
}