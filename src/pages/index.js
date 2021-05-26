import React, {useState,useEffect}  from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { create, urlSource }  from "ipfs-http-client"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import fleekStorage from '@fleekhq/fleek-storage-js'

// const getFleekStorage = () =>{
//   const myFile = await fleekStorage.get({
//     apiKey: 'my-key',
//     apiSecret: 'my-secret',
//     key: 'my-file-key',
//     getOptions: [
//       'data',
//       'bucket',
//       'key',
//       'hash',
//       'publicUrl'
//     ],
//   });
// }

const GetImage = () => {

  const [images, setImages] = useState({})

  const getData=()=>{
    fetch("https://slate.host/api/v2/get",
    {
      method: 'POST',
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Methods':'GET',
        'Access-Control-Allow-Headers':'application/json',
        Authorization: 'Basic SLAe490739d-73c3-480b-921b-589b16dea078TE',
       }
    }
    )
      .then((response)=>{
        return response.json();
      })
      .then((data) => {
        setImages(data.collections)
      });
  }
  useEffect(()=>{
    getData()
  },[])

  return images
  
}

const IndexPage = () => {
  const api = GetImage()

  // if(api){    
  //   const image = <img src={api[0].data.url+"?cid="+api[0].objects[0].cid} />
  //   console.log(image)
  // }

  return(
    <div>
      <Seo title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      {}
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p>
    </div>
  )
}

export default IndexPage
