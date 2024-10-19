const model = [
    { type: 'title', value: 'Hello World from Js' },
    { type: 'text', value: 'This is text in second block' },
    {
        type: 'columns', value: [
            '111111',
            '222222',
            '333333'
        ]
    }
]

let site = document.querySelector('#site');


model.forEach(block => {

    let html = ''

    if (block.type === 'title') {
        html = `
            <div class="row">
            <div class="col-sm">
                <h1>${block.value}</h1>
            </div>
        </div>
        `
    } else if (block.type === 'text') {
        html = `
                <div class="row">
            <div class="col-sm">
                <p>${block.value}</p>
            </div>
        </div>
        `
    } else if (block.type === 'columns') {

    }

})