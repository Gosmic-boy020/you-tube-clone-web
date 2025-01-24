import { arr } from "./youtube-data.js"
document.getElementById('Add').addEventListener("click",
    ()=>{
      
      console.log('hi')
      const input_1=document.querySelector('.input-1').value
      const input_2=document.querySelector('.input-2').value
      const input_3=document.querySelector('.input-3').value
      const input_4=document.querySelector('.input-4').value
      const input_5=document.querySelector('.input-5').value
      const input_6=document.querySelector('.input-6').value
      const input_7=document.querySelector('.input-7').value
      arr.push({
        vidlink:input_1,
        thumbnailpath:input_2,
        vidtime:input_3,
        profilepath:input_4,
        videotitle:input_5,
        channelname:input_6,
        stats:input_7
    })
    console.log(arr);
    setTimeout(()=>{
      renderpage()
    },1000)
    
    
    
    })
