import image from './assets/image.png'


export const model = [
    {
        type: 'title', value: 'Конструктор сайтов ', options: {
            tag: 'h2',
            //styles: `background: linear-gradient(90deg, #0000ff, #8a2be2); color: #fff; text-align: center; padding:1.5rem`
            styles: {
                background: 'linear-gradient(90deg, #0000ff, #8a2be2)',
                color: '#fff',
                textAlign: 'center',
                padding: '1.5rem'
            }
        }
    },
    { type: 'text', value: 'This is text in second block' },
    {
        type: 'columns', value: [
            '111111',
            '222222',
            '333333',
        ]
    },
    { type: 'image', value: image }
]