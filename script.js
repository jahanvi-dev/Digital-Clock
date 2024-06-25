const CURRENT_TIMING = () => {
    let time = new Date().toLocaleTimeString();
    document.getElementById('timing').textContent = time;
}

setInterval(() => {
    CURRENT_TIMING();
},1000)