import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Detail(){
    const {id} = useParams();
    const [detail , setDetail] = useState();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const getDetail = async () => {
        const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
        };
        getDetail();
        }, [id]);
    console.log(detail);
    return <h1>
        {loading ? <h1>Loading...</h1> : <Movie 
            coverImg={detail.medium_cover_image}
            id={detail.id}
            title={detail.title}
            genres={detail.genres}
            key={detail.id}
        />}
    </h1>
}

export default Detail;