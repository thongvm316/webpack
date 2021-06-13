import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/heading'
import addImage from './add-image'

const heading = new Heading()
heading.render()
const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()
addImage()
