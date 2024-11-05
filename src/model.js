import image from './assets/image.png'


const text = `Крутой редактор кода это : <a href="https://code.visualstudio.com/"  target = "_blank">Visual Studio Code</a>`

export const model = [
    {
        type: 'title', value: 'Конструктор сайтов ', options: {
            tag: 'h2',
            styles: {
                background: 'linear-gradient(90deg, #0000ff, #8a2be2)',
                color: '#fff',
                textAlign: 'center',
                padding: '1.5rem'
            }
        }
    },

    {
        type: 'image', value: image, options: {
            styles: {
                width: '60px',
                height: '40px',
                objectFit: 'cover',
                borderRadius: '10px'
            }
        }
    },

    {
        type: 'text', value: text, options: {
            styles: {
                fontSize: '1.2rem',
                lineHeight: '1.5',
                fontWeight: 'bold',
                color: 'blue'
            }
        }
    },

    {
        type: 'columns', value: [
            "Visual Studio Code — редактор исходного кода ",
            " разработанный Microsoft для Windows, Linux и macOS.",
            " Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений."

        ], options: {
            styles: {
                background: '#f2f2f2',
                padding: '1rem',
                "font-weight": "bold",
                color: 'red'

            }
        }
    },

]