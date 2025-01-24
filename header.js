
function render_header(){
const html=`<div class="left-hed-section">
            <img class="hamburger-menu" src="thumbnails/hamburger-menu.svg" alt="#">
           <a href="index.html" ><img class="youtube-logo" src="thumbnails/youtube-logo.svg" alt="#"></a>

        </div>
        <div class="middle-hed-section">
                <input type="text" placeholder="Search" class="searchbar">
            <button class="search-button">
                <a href="#" title="hello">
                    <img class="search-button-icon" src="thumbnails/search.svg" alt="" >
                </a>
                
                <div class="tool-tip">Search</div>
            </button>

            <button class="voice-search-button">
                <img class="voice-search-button-icon" src="thumbnails/voice-search-icon.svg" alt="">
                <div class="tool-tip">Search With Your Voice</div>
            </button>
        </div>
        
        <div class="right-hed-section">
            <div class="upload-icon-container">
                <img class="upload-icon" src="thumbnails/upload.svg" alt="#">
                <div class="tool-tip">Creat</div>
            </div>
            <div class="youtube-apps-icon-container">
                <img class="youtube-apps-icon" src="thumbnails/youtube-apps.svg" alt="#">
                <div class="tool-tip">YouTubeApps</div>
            </div>
            
            <div class="notification-div">
                <img class="notifications-icon" src="thumbnails/notifications.svg" alt="#">
                <div class="notification-count">3</div>
                <div class="tool-tip">Notifications</div>
            </div>
            
            <img class="profile-pic-icon" src="thumbnails/profilr-icon.jpg" alt="fu">

        </div>`
        document.querySelector('.header').innerHTML=html;
}

function sidebar_render(){
  const html=`<div class="sidebar-link">
            <img src="thumbnails/home.svg" alt="">
            <div>Home</div>
        </div>
        <div class="sidebar-link">
            <img src="thumbnails/explore.svg" alt="">
            <div>Explore</div>
        </div>
        <div class="sidebar-link">
            <img src="thumbnails/subscriptions.svg" alt="">
            <div>Subscriptions</div>
        </div>
        <div class="sidebar-link">
            <img src="thumbnails/originals.svg" alt="">
            <div>originals</div>
        </div>
        <div class="sidebar-link">
            <img src="thumbnails/youtube-music.svg" alt="">
            <div>youtube music</div>
        </div>
        <div class="sidebar-link">
            <img src="thumbnails/library.svg" alt="">
            <div>library</div>
        </div>
        <lable for="ad" height="76px">,
        <div class="sidebar-link" >
            <a href="Create.html" style="scale:1.8; text-decoration: none;" id="ad" target="_blank">+</a>
        </div></lable>`
        document.querySelector('.sidebar').innerHTML=html;
}
render_header()
sidebar_render()
