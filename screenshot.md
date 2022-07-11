# 关于截屏screenshot的思考

* 之前遇到过要保存屏幕截屏到本地的需求，但是当时年轻经验不足没有特别好的实现


### 技术方案1 通过从新计算所以页面的元素和样式背景图等实现

```
主要技术canvas

绘制图片时要注意设置
image.crossOrigin = "Anonymous";
allowtainted
allowcross

// 主要试用基本都是图片组合在一起的页面，字体不太好处理

```




### 技术方案2 通过无头浏览器等screenshotAPI实现


```
const puppeteer = require('puppeteer');

    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();
    })();


// 可以实现特定页面的整体截图，选定区域截图，但是页面进行滚动后就不太容易实现


```

### 技术方案3 通过dom转objectUrl转img绘制canvas实现，这也是htmltocanvas等实现的原理




```

        let svgText = Dom.innerHTML.toString()  
        if (!svgText.match(/xmlns=\"/mi)){
            svgText = svgText.replace ('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ') ;  
        }

        var svg = new Blob([svgText], {
                type: "image/svg+xml;charset=utf-8"
        });

        let objectURL = URL.createObjectURL(svg)

        var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

        canvas.width = w;
        canvas.height = h;
        var img = new Image();
        img.src = objectURL
        img.crossOrigin = 'Anonymous';
        img.onload = function () {
            ctx.drawImage(this, 0, 0, w, h);
            var png = canvas.toDataURL('image/png');
            let a = document.createElement('a');
            a.download = 'defaultName.png';
            a.href = png;
            a.addEventListener('click', function(ev) {
                console.log('下载');
            }, false);
            // let event = document.createEvent('MouseEvents');
            // event.initEvent('click');
            let clickEvent = new MouseEvent('click', {
                'view': window,
                'bubbles': true,
                'cancelable': false
            });

        a.dispatchEvent(clickEvent);
    };


// 外部样式和字体存在问题。


```

### 技术方案4


* 通过screencapture 获取屏幕的投屏镜像然后设置给vide标签有了video标签就可以通过canvas.drawImage()实现截屏

```

参见
https://github.com/guoguangkun/jsScreenShot/blob/main/js/screenShot.js

```
