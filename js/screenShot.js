/*
 * @moduleName: 
 * @Author: Guoguang Kun
 * @Date: 2022-07-11 10:36:38
 * @LastEditTime: 2022-07-11 10:52:07
 * @LastEditors: guoguangkun
 * @Description: 
 * 
 * @FilePath: /jsScreenShot/js/screenShot.js
 * Copyright (c) 2022 by Guoguang Kun. 
 */


export async function screenCapture(videoElement,w,h) {

    try {
        navigator.mediaDevices.getDisplayMedia({video:true}).then((mediaStream)=> {
            videoElement.srcObject = mediaStream;
            videoElement.crossorigin = "anonymous"

            let canvas = document.createElement('canvas')
            canvas.width = w;
            canvas.height = h;
            videoElement.onplay = function() {
                const ctx = canvas.getContext('2d')
            
                ctx.fillStyle = '#FF0000';
                
                ctx.fillRect( 0, 0, w, h );
                ctx.drawImage(videoElement, 20, 80, w, h, 0,0, canvas.width, canvas.height);

                ctx.save()
                let a = document.createElement('a');
                a.download = 'defaultName.png';
                a.href = canvas.toDataURL('image/png');
                a.addEventListener('click', function(ev) {
                    console.log('下载');
                }, false);
                let clickEvent = new MouseEvent('click', {
                    'view': window,
                    'bubbles': true,
                    'cancelable': false
                });
        
                a.dispatchEvent(clickEvent);


                let tracks = videoElement.srcObject.getTracks();

                tracks.forEach(track => track.stop());
                videoElement.srcObject = null;
            }

        })

    } catch (e) {
        console.log('Unable to acquire screen capture: ' + e);
    }
}
