import {Component} from 'react'
import Loader from 'react-loader-spinner'
import PlaceItem from '../PlaceItem'

import './index.css'

class TravelGuide extends Component {
  state = {placesList: [], isLoading: false}

  componentDidMount() {
    this.gettingTrouristList()
  }

  gettingTrouristList = async () => {
    this.setState({
      isLoading: true,
    })
    const url = 'https://apis.ccbp.in/tg/packages'
    const responcse = await fetch(url)
    if (responcse.ok === true) {
      const data = await responcse.json()
      const pakageData = data.packages
      const updatedData = pakageData.map(eachItme => {
        return {
          id: eachItme.id,
          name: eachItme.name,
          imageUrl: eachItme.image_url,
          description: eachItme.description,
        }
      })
      this.setState({
        placesList: updatedData,
        isLoading: false,
      })
    }
  }

  render() {
    const {placesList, isLoading} = this.state
    return (
      <div className="travel-guide-container">
        <h1 className="travel-guide-heading">Travel Guide</h1>
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="list-item-container">
            {placesList.map(eachItem => (
              <PlaceItem key={eachItem.id} eachItem={eachItem} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default TravelGuide
