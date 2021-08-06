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
      <header>
        <div className="title">Dog アプリ</div>
      </header>

      <div className="main flex-container">
        <span className="site-desc flex-item">
          犬の画像を表示するサイトです．
        </span>
        <div className="img-update-wrap flex-item">
          <div className="img-wrap flex-item">
            <img className="dog-img" src={dogUrl}></img>
          </div>
          <button
            className="update-btn flex-item"
            onClick={() =>
              fetch('https://dog.ceo/api/breeds/image/random')
                .then(response => {
                  return response.json()
                })
                .then(data => {
                  setDogUrl(data.message)
                })
            }
          >
            {' '}
            更新
          </button>
        </div>
      </div>
      <hr></hr>
    </div>
  )
}
