import {Component} from 'react'
import EmojiNavBar from '../NavBar'
import AddEmojiCard from '../EmojiCard'
import CheckWinOrLose from '../WinOrLoseCard'
import './index.css'

const shuffledEmojisList = props => {
  const {emojisList} = props
  return emojisList.sort(() => Math.random() - 0.5)
}

class EmojiGame extends Component {
  state = {
    score: 0,
    topScore: 0,
    matchstatus: true,
    emojilist: shuffledEmojisList(this.props),
    selectedhistory: [],
  }

  resetgame = () => {
    const {score, topScore} = this.state
    let newtopscore
    if (topScore <= score) {
      newtopscore = score
    } else {
      newtopscore = topScore
    }
    this.setState({
      matchstatus: true,
      score: 0,
      topScore: score === 12 ? 0 : newtopscore,
      selectedhistory: [],
    })
  }

  clickImgitem = id => {
    const {score, topScore, emojilist, selectedhistory} = this.state
    const history = emojilist.filter(eachitem => eachitem.id === id)
    const newselectedHistory = [...selectedhistory, ...history]
    const checkprevioushistory = newselectedHistory.filter(
      eachitem => eachitem.id === id,
    ).length
    let newscore
    if (checkprevioushistory < 2) {
      newscore = score + 1
    } else {
      newscore = score
    }
    this.setState({
      selectedhistory: newselectedHistory,
      emojilist: shuffledEmojisList(this.props),
      matchstatus: checkprevioushistory < 2,
      score: newscore,
    })
  }

  render() {
    const {score, topScore, emojilist, matchstatus} = this.state
    const changePageToResult = () => {
      if (matchstatus === true) {
        return (
          <div className="EmojiContainer">
            <ul className="EmojiContainerList">
              {emojilist.map(eachitem => (
                <AddEmojiCard
                  detail={eachitem}
                  changeitem={this.clickImgitem}
                  key={eachitem.id}
                />
              ))}
            </ul>
          </div>
        )
      } else {
        return (
          <div>
            <CheckWinOrLose
              detail={{score, topScore, matchstatus}}
              buttonfunction={this.resetgame}
            />
          </div>
        )
      }
    }
    return (
      <div>
        <EmojiNavBar scorecard={{score, topScore, matchstatus}} />
        {changePageToResult()}
      </div>
    )
  }
}

export default EmojiGame
