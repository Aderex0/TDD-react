import React, { Component } from 'react'
import NewRestaurantForm from './NewRestaurantForm'
import RestaurantList from './RestaurantList'

class RestaurantListPage extends Component {
  state = {
    restaurantNames: [],
    showNewRestaurantForm: true
  }

  handleAddRestaurant = newRestaurantName => {
    this.setState(state => ({
      restaurantNames: [newRestaurantName, ...state.restaurantNames],
      showNewRestaurantForm: true
    }))
  }

  handleShowNewRestaurantForm = () => {
    this.setState({ showNewRestaurantForm: false })
  }

  render () {
    const { restaurantNames, showNewRestaurantForm } = this.state

    return (
      <div>
        {showNewRestaurantForm ? (
          <button
            onClick={this.handleShowNewRestaurantForm}
            data-test='addRestaurantButton'
          >
            Add Restaurant
          </button>
        ) : (
          <NewRestaurantForm onSave={this.handleAddRestaurant} />
        )}
        <RestaurantList restaurants={restaurantNames} />
      </div>
    )
  }
}

export default RestaurantListPage
