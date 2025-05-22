import { peticionesHttp } from '../../helpers/peticiones-http'
import './DragDrop.scss'

const DragDrop = ({ setFoto, srcImagenBack, setSrcImagenBack }) => {


    // ! Cancelando comportamiento por defecto del navegador
    const arrayEventosDragDrop = ['dragenter', 'dragleave', 'dragover', 'drop']

    arrayEventosDragDrop.forEach(eventName => {
        //console.log(eventName)
        document.body.addEventListener(eventName, e => e.preventDefault())
    })

    const handleDrop = (e) => {
        //console.log(e)
        const files = e.dataTransfer.files
        handleFiles(files)
    }

    const handleChange = (e) => {
        // console.log(e)
        const files = e.target.files
        // console.log(files)
        handleFiles(files)
    }

    const handleFiles = async (files) => {
        // console.log('Recibí los files', files)
        const file = files[0]
        await uploadFile(file)
        previewFile(file)
    }

    const uploadFile = async (file) => {
        console.log('Llegó a upload', file)
        //const url = 'http://localhost:8080/api/v1/uploads'
        const url = import.meta.env.VITE_BACKEND_UPLOAD

        try {

            const formData = new FormData()
            //                key   , value
            formData.append('imagen', file)

            const options = {
                method: 'POST',
                body: formData
            }

            const imagenUp = await peticionesHttp(url, options)
            //console.log(imagenUp)
            setFoto(imagenUp) // { foto: '' }
            
        } catch (error) {
            console.error('[uploadFile]:', error)
        }
        
    }

    const previewFile = (file) => {
        console.log('Llegó a preview', file)
        // API READER -> window -> BOM -> MDN api reader
        const reader = new FileReader()
        reader.readAsDataURL(file) // A partir del archivo binario creo una url para que pueda previsualizar
        // Espero hasta que el archivo haya sido leido completamente
        reader.addEventListener('loadend', () => {
            setSrcImagenBack(reader.result)
        })
    }

  return (
    <div className='drop-area' onDrop={handleDrop}>
        <p>
            Subir imagen al servidor con <b>File Dialog</b> o con
            <b> drag and drop</b> dentro del area punteada.
        </p>

        <input type="file" id="lbl-foto" accept="image/*" onChange={handleChange} />
        <label className="drop-area-button" htmlFor="lbl-foto">
            File Dialog
        </label>

        <div className='drop-area-image'>
            <img src={srcImagenBack} alt="" />
        </div>

    </div>
  )
}

export default DragDrop