const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click me to visit google"
}

const mainContainer =  document.querySelector('#root')


//Inject the react element inside root and render
customRender(reactElement, mainContainer) //What to inject (1st param) and where to inject(2nd param)