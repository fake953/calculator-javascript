let title=document.querySelector('#title')
document.querySelector('main').addEventListener('click',e=>{
    if(e.target.nodeName!='SPAN') return
    try {
        if(e.target.innerText=='='){
            title.innerText=eval(title.innerText)
        }else if(e.target.id=='delete'){
            title.innerText=''
        }else{
            title.innerText+=e.target.innerText
        }
    } catch (error) {
        title.innerText='please enter a correct number'
        document.querySelector('main').addEventListener('click',e=>{
            if(e.target.nodeName!='SPAN') return
            title.innerText=''
            title.innerText=e.target.innerText
            
    },{once:true})
    }

})
