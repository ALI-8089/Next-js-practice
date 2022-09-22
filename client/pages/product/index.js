import Link from 'next/link'
function index() {
  return (
    <div>
      <Link href="/">
        <a>home</a>
      </Link>
      <br />

      <Link href="/Product 1">
        <a>Product 1</a>
      </Link>
      <br />
      <Link href="/Product 1">
        <a>Product 2</a>
      </Link>
      <br />
      <Link href="/Product 1">
        <a>Product 3</a>
      </Link>
      
     
      <h3>Product 3 </h3>
    </div>
  )
}

export default index
