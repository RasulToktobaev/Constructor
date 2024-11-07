import image from './assets/image.png'
import { ColumnsBlock, ImageBlock, TextBlock, TitleBlock } from './classes/blocks'

const text = `Крутой редактор кода это : <a href="https://code.visualstudio.com/"  target = "_blank">Visual Studio Code</a>`

export const model = [
    new TitleBlock('Конструктор сайтов ', {
        tag: 'h2',
        styles: {
            background: 'linear-gradient(90deg, #0000ff, #8a2be2)',
            color: '#fff',
            textAlign: 'center',
            padding: '1.5rem'
        }
    }),
    new ImageBlock(image, {
        styles: {
            width: '100px',
            height: '40px',
            objectFit: 'cover',
            borderRadius: '10px'
        },
        imageStyle: {
            width: '600px',
            height: "auto"
        },
        alt: 'Это картинка'
    }),
    new TextBlock(text, {
        styles: {
            fontSize: '1.2rem',
            lineHeight: '1.5',
            fontWeight: 'bold',
            color: 'blue'
        }
    }), ,
    new ColumnsBlock([
        "Visual Studio Code — редактор исходного кода ",
        " разработанный Microsoft для Windows, Linux и macOS.",
        " Позиционируется как «лёгкий» редактор кода для кроссплатформенной разработки веб- и облачных приложений."

    ], {
        styles: {
            background: '#f2f2f2',
            padding: '1rem',
            "font-weight": "bold",
            color: 'red'

        }
    }),


]