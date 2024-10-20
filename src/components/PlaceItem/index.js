import './index.css'

const PlaceItem = props => {
  const {eachItem} = props
  return (
    <li className="list-item">
      <img
        src={eachItem.imageUrl}
        alt={eachItem.name}
        className="place-image"
      />
      <div className="item-details-container">
        <h1 className="item-heading">{eachItem.name}</h1>
        <p className="item-description">{eachItem.description}</p>
      </div>
    </li>
  )
}

export default PlaceItem
