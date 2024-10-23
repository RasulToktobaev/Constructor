const model = [
    { type: 'title', value: 'Hello World from Js' },
    { type: 'text', value: 'This is text in second block' },
    {
        type: 'columns', value: [
            '111111',
            '222222',
            '333333',
        ]
    },
    { type: 'image', value: './assets/image.png' }
]

let site = document.querySelector('#site');


model.forEach(block => {

    let html = ''

    if (block.type === 'title') {
        html = title(block)
    } else if (block.type === 'text') {
        html = text(block)
    } else if (block.type === 'columns') {
        html = columns(block)
    }
    else if (block.type === 'image') {
        html = image(block)
    }

    site.insertAdjacentHTML('beforeEnd', html)


})


function title(block) {
    return `
            <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
        `
}

function text(block) {
    return `
                <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
}

function columns(block) {
    const html = block.value.map(item => {
        return `
        <div class="col-sm">${item}</div>
        `
    })
    return `
    <div class="row">
        ${html.join('')}
        </div>
    `
}

function image(block) {
    return `
    <div class="row">
    <img src = "${block.value}"/>
    </div>
    `

}
