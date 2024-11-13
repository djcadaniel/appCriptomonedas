import { useMemo } from 'react'
import { useCryptoStore } from '../store'
import { Spinner } from './Spinner'

export const CryptoPriceDisplay = () => {

  const result = useCryptoStore((state) => state.result)
  const loading = useCryptoStore((state) => state.loading)
  const hasResult  = useMemo(()=> !Object.values(result).includes(''), [result])

  console.log(result.IMAGEURL)

  return (
    <div className='result-wrapper'>
        {
          loading ? <Spinner /> :
          hasResult && (
            <>
            <h2>Cotización</h2>
            <div className='result'>
              <div className='result_image'>
                <img
                  src={`https://cryptocompare.com/${result.IMAGEURL}`}
                  alt='Imagen Cryptomoneda'
                />
              </div>
              <div className='result_description'>
                <p>El precio es de: <span>{result.PRICE}</span></p>
                <p>Precio mas alto del día: <span>{result.HIGHDAY}</span></p>
                <p>Preico más bajo del día: <span>{result.LOWDAY}</span></p>
                <p>Variación últimas 24 horas: <span>{result.CHANGEPCT24HOUR}</span></p>
                <p>Ultima actualzación: <span>{result.LASTUPDATE}</span></p>
              </div>
            </div>
            </>
          )
        }
    </div>
  )
}