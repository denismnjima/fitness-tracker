import { Route, Routes } from "react-router-dom"
import Homepage from "./Components/Homepage"
import { getDistance } from "geolib"
import { useEffect, useState } from "react"

function App() {
    const [location, setLocation] = useState({latitude:null,longitude:null})
    const [distance,setDistance] = useState(0)
    const [prevLocation,setPrevLocation] = useState({latitude:null,longitude:null})

    useEffect(()=>{
      const handleSuccess = (position) => {
        const {latitude,longitude} = position.coords
        setLocation({latitude,longitude})
        if(prevLocation.latitude!=null && prevLocation.longitude !=null && prevLocation){
          console.log('prev-location',prevLocation)
          console.log('current',location)
          // if(prevLocation){
          //   const newDistance = getDistance(prevLocation,location)
          //   console.log(newDistance)
          //   console.log('current cord:',{latitude,longitude})
          //   setDistance(prev=> prev+newDistance)
          //   setPrevLocation({latitude,longitude})
          //   console.log('distance:',distance)
          //   console.log('prevlocation:',prevLocation)
          //   console.log('location:',location)
          // }
        }else{
          setPrevLocation({latitude,longitude})
        }
        
      }
      const handleError = (err) => {
        console.log('Error getting location:',err)
      }
      if(navigator.geolocation){
        navigator.geolocation.watchPosition(handleSuccess,handleError);
      }else{
        console.error('Geolocation is not supported by device or browser')
      }
    },[prevLocation])
  return (
    <section className="root">
      <h1>distance:{distance}</h1>
      <h1>prevlocation:{prevLocation.latitude},{prevLocation.longitude}</h1>
      <h1>location:{location.latitude},{location.longitude}</h1>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
      </Routes>
    </section>
  )
}

export default App
