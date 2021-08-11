import * as React from 'react'

export const DogImageList = props => {
  let imageList = []
  // console.log(props.dogUrlList)
  props.dogUrlList.map(url => {
    imageList.push(<img className="list-dog-img" src={url}></img>)
  })

  return <div className="dog-image-list flex-container">{imageList}</div>
}
