import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';

export default function GameDetails() {
    const [game, setGame] = useState({});
    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame);
    }, [gameId]);


    const addCommentHandler = async (e) => {

        const formData = new FormData(e.currentTarget);

        await commentService.create(
            gameId,
            formData.get('username'),
            formData.get('comment'),
        )

    }


    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">
                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">{game.summary}</p>

                {/* <!-- Bonus ( for Guests and Users ) -->
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <!-- list all comments for current game (If any) -->
                        <li className="comment">
                            <p>Content: I rate this one quite highly.</p>
                        </li>
                        <li className="comment">
                            <p>Content: The best game.</p>
                        </li>
                    </ul>
                    <!-- Display paragraph: If there are no games in the database -->
                    <p className="no-comment">No comments.</p>
                </div>

                <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
                </div> */}
            </div>

            {/* < !--Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article classname="create-comment">
                <label>Add new comment:</label>
                <form classname="form" onSubmit={addCommentHandler}>
                    <input type="text" name="username" placeholder="username" />
                    <textarea name="comment" placeholder="Comment......" defaultValue={""} />
                    <input classname="btn submit" type="submit" defaultValue="Add Comment" />
                </form>
            </article>

        </section>
    );
}