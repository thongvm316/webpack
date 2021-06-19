import HelloWorldButton from './components/hello-world-button/hello-world-button.js'
import Heading from './components/heading/heading'
import addImage from './add-image'
// import _ from 'lodash'
import React from 'react'

const heading = new Heading()
// heading.render(_.upperFirst('hello World'))
heading.render('Hello World')

const helloWorldButton = new HelloWorldButton()
helloWorldButton.render()
// addImage()

if (process.env.NODE_ENV === 'production') {
  console.log('Production mode')
} else if (process.env.NODE_ENV === 'development') {
  console.log('Development mode')
}

helloWorldButton.methodThatDoesntExist()
