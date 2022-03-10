import { useEffect, useState } from "react";
// import animeList from "./dummy-data";
import MovieCard from "./MovieCard";
import * as animeList from "./dummy-data";

function App() {
    const [data, setUsers] = useState([]);

    useEffect(() => {
        animeList.getUsers().then((data) => {
            setUsers(data);
        });
    }, []);

    if (data.length === 0) {
        return <h1>Tunggu Sebentar</h1>;
    }

    return (
        <div className="container my-5">
            <h1 className="text-center">Anime List</h1>
            <div className="container my-5">
                <div id="daftar-anime" className="row">
                    {data.map((data) => (
                        <MovieCard key={data.mal_id} title={data.title} type={data.type} url={data.url} image_url={data.image_url} />
                    ))}

                </div>
            </div>
        </div>
    );
}


export default App;