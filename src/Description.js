import * as React from 'react'
import { DogImage } from './DogImage'

// DO NOT DELETE
export const Description = props => {
  const [dogUrl, setDogUrl] = React.useState(
    'https://images.dog.ceo/breeds/terrier-westhighland/n02098286_3154.jpg',
  )

  return (
    <div className="description flex-container">
      <span className="site-desc">{props.siteDesc}</span>
      <div className="img-update-wrap">
        <div className="img-wrap">
          <DogImage url={dogUrl}></DogImage>
        </div>
        <button
          className="update-btn"
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
  )
}
