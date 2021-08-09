// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = props => {
  let optionList = []
  props.breeds.map(value => optionList.push(<option>{value}</option>))

  //   document.addEventListener('DOMContentLoaded', () => {
  //     document
  //       .getElementById('breed-select-box')
  //       .addEventListener('change', props.onChange)
  //   })

  return (
    <div class="breeds-list-wrap flex-container">
      <span class="flex-item">Breeds List</span>
      <select
        class="flex-item"
        id="breed-select-box"
        name="breed-select-box"
        onchange={props.onChange}
      >
        {optionList}
      </select>
    </div>
  )
}
