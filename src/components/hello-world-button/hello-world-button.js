import './hello-world-button.css'

class HelloWorldButton {
  render() {
    const button = document.createElement('button')
    const body = document.querySelector('body')
    button.classList.add('hello-world-button')
    button.innerHTML = ' Hello World'
    button.onclick = () => {
      const p = document.createElement('p')
      p.innerHTML = 'Hello World'
      p.classList.add('hello-world-text')
      body.appendChild(p)
    }
    body.appendChild(button)
  }
}

export default HelloWorldButton
