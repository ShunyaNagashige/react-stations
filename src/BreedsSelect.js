// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = props => {
  let optionList = []
  props.breeds.map(value =>
    optionList.push(
      <option key={value} value={value}>
        {value}
      </option>,
    ),
  )

  return (
    <div className="breeds-list-wrap flex-container">
      <span className="breeds-list-label flex-item">Breeds List</span>
      <select
        className="flex-item"
        id="breed-select-box"
        name="breed-select-box"
        value={props.selectedBreed}
        onChange={e => {
          props.setSelectedBreed(e.target.value)
        }}
      >
        {optionList}
      </select>
    </div>
  )
}
