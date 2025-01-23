import { arr } from "./youtube-data.js";
export function renderpage(){
    var res='';
    for(let i=0;i<arr.length;i++){
      
      const objval=arr[i];
      const link=objval.vidlink;
      const thumbpath=objval.thumbnailpath;
      const runtime=objval.vidtime;
      const channelpic=objval.profilepath;
      const title=objval.videotitle;
      const author=objval.channelname;
      const views=objval.stats;
    
      const html=`<a href="${link}" target="_self" width="500px" height="500px">
      <div class="whole-div">
            <div class="thum-div">
                
                <img class="thumb" src="${thumbpath}" alt="error">
                
                <div class="vid-time">${runtime}</div>
            </div> 
                <div class="down-thum-whole-div-grid">
                    <div class="channal-profile-div">
                        <img class="profile-pic" src="${channelpic}" alt="#">
                    </div>
                    <div class="vid-info-div" >
                        <p class="vid-title">${title}</p>
                        <p class="vid-author">${author}</p>
                        <p class="vid-stats">${views}</p>
                    </div>
                </div>  
        </div> </a>`;
      res+=html;
      console.log('hi')
    }
    
    document.querySelector('.vid-grid').innerHTML=`${res}`;
  }
    
  
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
    renderpage()


    
