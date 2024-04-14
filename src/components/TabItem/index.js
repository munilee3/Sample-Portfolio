import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTab} = props
  const {displayText, tabId} = tabDetails

  const onclickTabId = () => {
    updateActiveTabId(tabId)
  }

  const ActiveTabButton = isActiveTab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${ActiveTabButton}`}
        onClick={onclickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
