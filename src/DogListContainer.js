import * as React from 'react'
import { useEffect, useState } from 'react'

// DO NOT DELETE
export const DogListContainer = () => {
  const [breeds, setBreeds] = useState([])

  useEffect(
    () =>
      fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => {
          return response.json()
        })
        .then(data => {
          let dogList = []
          //   data['message'].map(dogList.push(key))
          for (var key in data['message']) {
            dogList.push(key)
          }

          setBreeds(dogList)
        }),
    [],
  )

  let optionList = []
  breeds.map(value => optionList.push(<option>{value}</option>))

  return (
    <div class="breeds-list-wrap flex-container">
      <span class="flex-item">Breeds List</span>
      <select class="flex-item" name="breed">
        {optionList}
      </select>
    </div>
  )
}
