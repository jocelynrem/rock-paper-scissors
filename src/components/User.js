import { settings } from "../assets/configs/game";
import './User.css'

export const User = ({ userScore, userSelection, trophyIcon, children }) => {
    <div className="user-card">
        <h1> {settings.userName} </h1>
        <h1> {settings.userName} </h1>
        {userScore < settings.winTarget ? (
            <>
                <h3>
                    {userSelection === ''
                        ? "Pick one!"
                        : `Your choice: ${userSelection}`}
                </h3>
            </>
        ) : (
            <>
                <img src={trophyIcon} alt='trophy' />
                <h3>Victory!</h3>
            </>
        )}
    </div>
}