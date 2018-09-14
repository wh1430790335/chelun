export let debounce = (func, ms = 150)=>{
    let timer = 0;
    return ()=>{
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func();
        },ms);
    }
}

export let throttle = (func, ms = 5000)=>{
    let timer = 0,
    start = +new Date();
    return ()=>{
    if(cur - start > ms){
        clearInterval(timer);
        timer = setTimeout(()=>{
            func();
        },ms);
        start = cur;
    }
}
}