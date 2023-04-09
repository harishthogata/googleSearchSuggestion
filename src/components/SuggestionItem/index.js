import './index.css'

const SuggestionItem = props => {
  const {suggestList, updateInput} = props
  const {suggestion} = suggestList

  const updateInputs = () => {
    updateInput(suggestion)
  }

  return (
    <li className="suggestions">
      <p className="suggest-item">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-logo"
        onClick={updateInputs}
      />
    </li>
  )
}

export default SuggestionItem
