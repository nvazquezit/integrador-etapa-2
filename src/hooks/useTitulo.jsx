import { useEffect } from "react"

const useTitulo = ( textoTitulo = 'Sin título') => {
    useEffect(() => {
        document.tittle = `Educacion IT - ${textoTitulo}`
    }, [])
    

}

export default useTitulo