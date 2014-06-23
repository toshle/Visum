Ext.define('Visum.view.AugmentedReality', {
    extend: 'Ext.Container',
    xtype: 'augreality',
    config: {
        items: [{
            title: 'Augmented Reality',
            styleHtmlContent: true,
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [{
                xtype: 'panel',
                flex: 1,
                html: [
                    "<select id='videoSource'></select><br>",
                    "<video id='augreality' autoplay></video>"
                ].join("")
            }]
        }]
    },
    initialize: function() {
        this.on('painted', this.showVideo);
    },
    showVideo: function() {
        var videoSelect = document.querySelector("select#videoSource");
        var videoElement = document.querySelector("video");
        if (Ext.os.is('Android') || Ext.os.is('iOS')) {
            navigator.getUserMedia = navigator.getUserMedia ||
                navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

            function gotSources(sourceInfos) {
                var other = 0;
                for (var i = 0; i != sourceInfos.length; ++i) {
                    var sourceInfo = sourceInfos[i];
                    var option = document.createElement("option");
                    option.value = sourceInfo.id;
                    if (sourceInfo.kind === 'video') {
                        if (videoSelect.length < sourceInfos.length - other) {
                            option.text = sourceInfo.label || 'camera ' + (videoSelect.length + 1);
                            videoSelect.appendChild(option);
                        }
                    } else {
                        other += 1;
                        console.log('Some other kind of source: ', sourceInfo);
                    }
                }
                first = false;
            }

            if (typeof MediaStreamTrack === 'undefined') {
                alert('This browser does not support MediaStreamTrack.\n\nTry Chrome Canary.');
            } else {
                MediaStreamTrack.getSources(gotSources);
            }


            function successCallback(stream) {
                window.stream = stream; // make stream available to console
                videoElement.src = window.URL.createObjectURL(stream);
                videoElement.play();
            }

            function errorCallback(error) {
                console.log("navigator.getUserMedia error: ", error);
            }

            function start() {
                if (!!window.stream) {
                    videoElement.src = null;
                    window.stream.stop();
                }
                var videoSource = videoSelect.value;
                var constraints = {
                    audio: false,
                    video: {
                        optional: [{
                            sourceId: videoSource
                        }]
                    }
                };
                navigator.getUserMedia(constraints, successCallback, errorCallback);
            }

            videoSelect.onchange = start;

            start();
        } else {
            videoSelect.style.visibility = 'hidden';
            alert('This OS doesn\'t support Augmented Reality!');
        }
    }
});