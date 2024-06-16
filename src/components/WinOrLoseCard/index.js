import './index.css'

const CheckWinOrLose = prop => {
  const {detail, buttonfunction} = prop
  const {score, topScore} = detail
  const bestscoretext = score === 12 ? 'Best Score' : 'Score'
  const scorehead = score === 12 ? 'You Won' : 'You Lose'
  const displayscore = `${score}/12`
  const scoreImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
  const changegamestatus = () => {
    buttonfunction()
  }
  return (
    <div className="resultcardcontainer">
      <div className="resultcardelement">
        <div className="resultcard">
          <h1>{scorehead}</h1>
          <p className="resultcardscored">{bestscoretext}</p>
          <p className="resultcardNumber">{displayscore}</p>
          <button
            onClick={changegamestatus}
            type="button"
            className="resultcardButton"
          >
            Play Again
          </button>
        </div>
        <div>
          <img src={scoreImg} className="resultcardImg" alt="win or lose" />
        </div>
      </div>
    </div>
  )
}

export default CheckWinOrLose
