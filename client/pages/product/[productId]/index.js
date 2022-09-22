import {useRouter} from "next/router"

function product() {
    const router = useRouter()
const productId = router.query.productId
  return (
    <div>
        <h1>
        Product List {productId}
        </h1>
    </div>
  )
}

export default product