import {useContext} from "react";
import {LevelContext} from "./LevelContext";

export default function Heading({  children }) {
    const level = useContext(LevelContext);
    console.log('Render heading');
    switch (level) {
        case 1:
            return <h1>{children} {level}</h1>;
        case 2:
            return <h2>{children}{level}</h2>;
        case 3:
            return <h3>{children}{level}</h3>;
        case 4:
            return <h4>{children}{level}</h4>;
        case 5:
            return <h5>{children}{level}</h5>;
        case 6:
            return <h6>{children}{level}</h6>;
        default:
            throw Error('Unknown level: ' + level);
    }
}
