// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg',
  )

  return (
    <div>
      <header>Dog アプリ</header>
      <div>犬の画像を表示するサイトです．</div>
      <img src={dogUrl}></img>
      <div>
        <button
          onClick={() =>
            setDogUrl(
              'https://images.dog.ceo/breeds/hound-english/n02089973_1132.jpg',
            )
          }
        >
          更新
        </button>
      </div>
    </div>
  )
}
