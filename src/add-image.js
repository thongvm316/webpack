import BgImage from './test-size.jpg'

function addImage() {
  const img = document.createElement('img')
  img.alt = 'Bg'
  img.width = 300
  img.src = BgImage

  const body = document.querySelector('body')
  body.appendChild(img)
}

export default addImage
