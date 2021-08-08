// DO NOT DELETE

import * as React from 'react'
import './App.css'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'
import { Header } from './Header'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  return (
    <div>
      <Header title={'Dog アプリ'}></Header>
      <Description siteDesc={'犬の画像を表示するサイトです．'}></Description>
      <hr></hr>
      <DogListContainer></DogListContainer>
    </div>
  )
}
