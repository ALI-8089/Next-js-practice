import {useRouter} from "next/router"
function Docs() {
    const route = useRouter()
    const {Docs}= route.query
    console.log(Docs)
    
  return (
    <div>
        <h1>Docs home page </h1>
    </div>
  )
}

export default Docs