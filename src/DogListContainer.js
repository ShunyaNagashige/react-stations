import * as React from 'react'
import { useEffect, useState } from 'react'
import { BreedsSelect } from './BreedsSelect'
import { DogImageList } from './DogImageList'

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
          setBreeds(Object.keys(data['message']))
        }),
    [],
  )

  const [selectedBreed, setSelectedBreed] = useState('affenpinscher')

  const [dogUrlList, setDogUrlList] = useState([])

  let handleClick = () => {
    fetch('https://dog.ceo/api/breed/' + selectedBreed + '/images/random/12')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setDogUrlList(data.message)
        console.log(dogUrlList)
      })
  }

  return (
    <div className="dog-list-container">
      <div className="select-box-show-btn-wrap flex-container">
        <BreedsSelect
          breeds={breeds}
          selectedBreed={selectedBreed}
          setSelectedBreed={setSelectedBreed}
        ></BreedsSelect>
        <button className="show-btn" onClick={handleClick}>
          表示
        </button>
      </div>
      <DogImageList dogUrlList={dogUrlList}></DogImageList>
    </div>
  )
}

// コールバックを渡すか，stateとsetStateを渡すか．
// 正直どっちでもいいとは思うけど，
// station10の問題文でselectタグのvalueにselectedBreedを渡せとあるので，stateを渡す方を選んだ
//   onChange={e => {
//     // console.log(event.target.selectedOptions[0].label)
//     handleChange(e)
//   }}
