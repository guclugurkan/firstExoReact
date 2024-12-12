export default function Fruit({onFruit, onHandleClick}){
    // state
    // const onFruit = props.onFruit;
    // const onHandleClick = props.onHandleClick;
    // comportements

    // affichage
    return <li >
    {onFruit.nom}
    <button onClick={() => onHandleClick(onFruit.id)}>X</button>
    </li>

}