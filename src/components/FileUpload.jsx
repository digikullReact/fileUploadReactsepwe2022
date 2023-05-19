import React, { useState } from 'react'
import axios from 'axios';

const FileUpload = () => {
    const [file,setFile]=useState("");
    const handleUpload=()=>{

        // Creating formaData

        const formData=new FormData();
        formData.append("file",file)

        // we have to send it to our api

        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
          }
         axios.post("http://localhost:9080/uploads",formData,config).then(data=>{
            console.log(data.data);

        }).catch(err=>{
            console.log(err);
        })
     }

    const handleFileChange=(event)=>{
        setFile(event.target.files[0])
        

    }
  return (
    <div>
    <input type='file'  onChange={handleFileChange}/>

    <button onClick={handleUpload}>
       Upload File
    </button>



    </div>
  )
}

export default FileUpload