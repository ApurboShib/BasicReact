import { useEffect, useState } from "react";

export default function Photos() {
   const [photo, setPhoto] = useState([]); 

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => setPhoto(data))

    }, [])

    return (
        <div>
            <h3>Photos : {photo.length} </h3>
        </div>
    )
}