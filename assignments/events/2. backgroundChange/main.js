var btn = document.querySelector("button");
btn.addEventListener('click', function() {
    var color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    document.body.style.backgroundColor = color;
});