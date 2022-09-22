import { useRouter } from 'next/router'

function index() {
  const route = useRouter()
  const { productId, reviewId } = route.query

  return (
    <div>
      <h1>
        Product :{productId} <br />
        Review : {reviewId}
      </h1>
    </div>
  )
}

export default index
