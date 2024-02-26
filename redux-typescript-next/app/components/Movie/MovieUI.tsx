import {Movie} from "@/lib/redux/services/types";
import styles from "@/app/components/Movie/movie.module.css";

export default function MovieUI({
    movie
                                }:{
    movie:Movie
})
{
    return (<div >
                <div className={styles.header}>
                    {movie.title}
                </div>
                <div>
                    {movie.year}
                </div>
                <div>
                    Director {movie.director.name}
                    <br/>
                    Phone no {movie.director.phoneNo}
                </div>
        </div>);
}