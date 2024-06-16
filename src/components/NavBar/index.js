import './index.css'

const EmojiNavBar = props => {
  const {scorecard, matchstatus} = props
  const {score, topScore} = scorecard
  const displayClass = matchstatus ? 'dontdisplay' : ''
  return (
    <nav className="navbarcontainer">
      <div className="navbarlogo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="navbarlogoimg"
        />
        <h1 className="navbarlogoname">Emoji Game</h1>
      </div>
      <div className={`ScoreContainer ${displayClass}`}>
        <p className="Scoreitem">Score: {score}</p>
        <p className="Scoreitem">Top Score: {topScore}</p>
      </div>
    </nav>
  )
}

export default EmojiNavBar
