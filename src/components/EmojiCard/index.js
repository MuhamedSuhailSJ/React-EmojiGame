import './index.css'

const AddEmojiCard = props => {
  const {detail, changeitem} = props
  const {id, emojiUrl, emojiName} = detail
  const changingItem = () => {
    changeitem(id)
  }
  return (
    <li className="emojiItemList">
        <button class="emojiItembutton emojiItemContainer" type="button" onClick={changingItem}>
          <img src={emojiUrl} className="emojiItemimg" alt={emojiName} />
        </button>
    </li>
  )
}

export default AddEmojiCard
