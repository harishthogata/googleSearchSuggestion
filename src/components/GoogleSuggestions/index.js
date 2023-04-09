import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateInput = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state

    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-img"
            alt="google logo"
          />
          <div className="search-input-suggestions-container">
            <div className="googlesearch-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-icon"
                alt="search icon"
              />

              <input
                type="search"
                placeholder="Search Google"
                className="search-input"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
            </div>
            <ul className="suggestion-list">
              {searchResults.map(suggest => (
                <SuggestionItem
                  key={suggest.id}
                  suggest={suggest}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
