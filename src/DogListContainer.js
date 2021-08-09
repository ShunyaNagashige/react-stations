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

// コールバックを渡すか，stateとsetStateを渡すか．
// 正直どっちでもいいとは思うけど，
// station10の問題文でselectタグのvalueにselectedBreedを渡せとあるので，stateを渡す方を選んだ
