// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = props => {
  let optionList = []
  props.breeds.map(value => optionList.push(<option>{value}</option>))

  document
    .getElementById('breed-select-box')
    .addEventListener('change', props.onClick)

  return (
    <div class="breeds-list-wrap flex-container">
      <span class="flex-item">Breeds List</span>
      <select class="flex-item" id="breed-select-box" name="breed">
        {optionList}
      </select>
    </div>
  )
}
