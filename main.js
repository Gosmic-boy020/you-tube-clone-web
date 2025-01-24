import { arr } from './youtube-data.js';
function renderpage(){
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
    
      const html=`
      <div class="whole-div">
      <hr>
            <div class="thum-div">
                <a href="${link}" target="_self" width="500px" height="500px">
                <img class="thumb" src="${thumbpath}" alt="error"></a>
                
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
                        <!--<button class="setting">...</button>-->
                    </div>
                </div>  
        </div> `;
      res+=html;
      console.log('hi')
    }
    
    document.querySelector('.vid-grid').innerHTML=res;
  }
renderpage()


    
