import { useEffect } from "react";


const FetchingData = () => {
useEffect(
  fetch(
    "https://collectionapi.metmuseum.org/public/collection/v1/departments"
  ).then((r) => r.json().then(console.log).catch((err) => console.log(err))
), [] )
  }


  export default FetchingData