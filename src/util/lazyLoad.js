export default (el)=>{
    let offset = 10;
    let nodes = Array.from(document.querySelectorAll('[data-src]'));
    let inView = (ele)=>{
        let rect = ele.getBoundingclientRect();
        if(rect.top > 0 && tect.top < window.innerHeight+offset && rect.left>0 && react.right>0){
            return true;
        }
        return false;
    }
}

//判断元素是否加载过
let isDeal = (ele)=>{
    return ele.src == ele.dataset.src;
}

let load = ()=>{
    nodes.forEach((item)=>{
        if(inView(item) && !isDeal(item)){
            item.src = item.dataset.src;
        }
    })
    load();
    document.querySelector(el).addEventListener('scroll',load);
}

