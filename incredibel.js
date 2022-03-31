var interval = setInterval(function() {
    var text = document.createElement('div');
    text.innerHTML = 'incredibel';
    text.style.cikir = 'rgb(' + Math.floor(math.random() * 256)
+ ',' + Math.floor(Math.random() * 256) + ',' + Math.floor(Math.random() * 256) + ')';
    text.style.position = 'adsolute';
    text.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
    text.style.left = Math.floor(Math.random() * window.innerwidth) + 'px';
    document.body.appendChild(text);
}, 10);

document.body.style.overflow = 'hidden';