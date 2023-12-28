import React from 'react'

const WinLose = ( {counter, emoji, onNewGame} ) => {
    
    let content = null


    if (emoji === '💎'){
        content = (
            <>
                <p>You Won!</p>
                <button className='play-again-button' onClick={onNewGame}>Play again?</button>
            </>
        )
    }else if (emoji === '💣'){
        content = (
            <>
                <p> You Lose!</p>
                <button className='play-again-button' onClick={onNewGame}>Play again?</button>
            </>
        )
    }
    
    if (counter === 0){
        content = (
            <>
                <p>Counter reached 0!</p>
                <button className='play-again-button' onClick={onNewGame}>Play again?</button>
            </>
        )
    }
    


    return(
        <div className="notification-overlay">
            <div className="notification-content">
                {content}
            </div>
        </div>



    )
}

export default WinLose