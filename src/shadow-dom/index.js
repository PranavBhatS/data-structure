const el = document.createElement('div');
const shadowRoot = el.attachShadow({ mode: 'open' })
shadowRoot.innerHTML = `
<style>
      h1 { background: red; }
</style>
<h1>hello i'm in realy dom</h1>
`

const container = document.querySelector('body')
container.appendChild(el)