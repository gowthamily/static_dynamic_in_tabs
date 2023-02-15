import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const clickItem = () => {
    onClickTabItem(tabId)
  }

  const activeBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtn}`}
        onClick={clickItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
