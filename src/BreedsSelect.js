// DO NOT DELETE
import * as React from 'react'

export const BreedsSelect = props => {
  let optionList = []
  props.breeds.map(value =>
    optionList.push(<option key={value}>{value}</option>),
  )

  //   document.addEventListener('DOMContentLoaded', () => {
  //     document
  //       .getElementById('breed-select-box')
  //       .addEventListener('change', props.onChange)
  //   })

  return (
    <div className="breeds-list-wrap flex-container">
      <span className="flex-item">Breeds List</span>
      <select
        className="flex-item"
        id="breed-select-box"
        name="breed-select-box"
        onChange={event => {
          console.log(event.target.selectedOptions[0].text)
          so = event.target.selectedOptions[0].text
          props.changeHandler(so)
        }}
      >
        {optionList}
      </select>
    </div>
  )
}
