import { useEffect, useState } from "react";
import * as gameServise from '../../services/gameService';
import GameListItem from "./GameListItem/GameListItem";

export default function GameList() {

    const [games, setGames] = useState([]);

    useEffect(() => {

        gameServise.getAll()
            .then(result => setGames(result))

    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* Display div: with information about every game (if any) */}

            {
                games.map(game => (
                    <GameListItem key={game._id} {...game} />
                ))
            }

            {/* Display paragraph: If there is no games  */}
            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>

    );
}