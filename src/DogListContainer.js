import * as React from 'react'
import { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'

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
          let breedList = []
          //   setBreeds(Object.keys(data['message']))
          for (var key in data['message']) {
            breedList.push(key)
          }

          setBreeds(breedList)
        }),
    [],
  )

  const [selectedBreed, setSelectedBreed] = useState('')
  const handleChange = e => {
    setSelectedBreed(e.target.selectedOptions[0].text)
  }

  return (
    <BreedsSelect
      breeds={breeds}
      selectedBreed={selectedBreed}
      setSelectedBreed={setSelectedBreed}
      //   onChange={e => {
      //     // console.log(event.target.selectedOptions[0].label)
      //     handleChange(e)
      //   }}
    ></BreedsSelect>
  )
}
