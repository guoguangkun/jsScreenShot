# jsScreenShot
a real screen shot by JS


forget htmltocanvas

forget dom to canvas

忘记htmltocanvas
忘掉通过dom转canvas进行截图，既费劲，有bug又不好用，还会丢失样式和 字体，真正的所见即所得的截屏



通过navigator.mediaDevices.getDisplayMedia 将屏幕分享，然后投射到video，然后video绘制canvas实现真实截屏效果。


###  usage

```
// Down load the screenShot.js or copy into your js 


// import
import {screenCapture} from '../js/screenShot.js'
     
// prepare dom and video
let Dom = document.querySelector("#demo-area-to-shot")
let DomHeight = Dom.offsetHeight;
let DomWidth = Dom.offsetWidth;

let videoDom = document.querySelector("#testVideo")


// screenShot
screenCapture(videoDom,DomWidt,DomHeight)
            

```

欢迎学习交流！
