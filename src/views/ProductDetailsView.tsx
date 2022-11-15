import React from 'react'
import CurrentOfferBanner from '../sections/CurrentOfferBanner'

const ProductDetailsView: React.FC = () => {

  // ------------------------------------------------------------------------------
  // ENABLE RENDERING THE PRODUCT NAME IN THE BREADCRUMB SECTION AND IN THE DOCUMENT TITLE:  
//   const [productInfo, setProductInfo] = useState({})  
//   const params = useParams()
  
//   useEffect(() => {
//     const fetchProductInfo = async () => {
//       const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${params.articleNumber}`)
//       setProductInfo(await result.json())
//     }
//     fetchProductInfo()
    
//   }, [setProductInfo])
  
//   window.top.document.title = productInfo.name +' | Fixxo.'


  return (
    <>
      <CurrentOfferBanner />
    </>
  )
}

export default ProductDetailsView