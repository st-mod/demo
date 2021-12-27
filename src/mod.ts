import type {UnitCompiler} from '@ddu6/stc'
const stuiVersion='0.5.0'
const sthlVersion='0.7.0'
const stStdVersion='0.14.0'
export function removePlaceholder(string:string){
    return string.replace(/\n? *placeholder(\n|$)/g,'\n')
}
export const demo:UnitCompiler=async (unit,compiler)=>{
    const element=document.createElement('div')
    const source=document.createElement('div')
    const resultEle=document.createElement('div')
    const textarea=document.createElement('textarea')
    const root=resultEle.attachShadow({mode:'open'})
    const style=document.createElement('style')
    const container=document.createElement('div')
    element.append(source)
    element.append(resultEle)
    root.append(style)
    root.append(container)
    const html=(unit.options.html??compiler.extractor.extractLastGlobalOption('html','demo',compiler.context.tagToGlobalOptions))===true
    textarea.value=removePlaceholder(compiler.stdn.stringify(unit.children))
    let string:string|undefined
    let sourcePre:Element|undefined
    async function render(){
        if(sourcePre!==undefined&&textarea.value===string){
            textarea.replaceWith(sourcePre)
            return
        }
        if(textarea.disabled){
            return
        }
        textarea.disabled=true
        string=textarea.value
        const pre=await compiler.compileUnit({
            tag:'code',
            options:{
                lang:'stdn',
                block:true
            },
            children:string.split('\n').map(val=>val.split(''))
        })
        source.innerHTML=''
        sourcePre=pre
        source.append(pre)
        pre.addEventListener('click',()=>{
            pre.replaceWith(textarea)
            textarea.disabled=false
            textarea.focus()
        })
        const result=await compiler.compile(string,compiler.context.dir,{
            style,
            headSTDN:[
                [{tag:'global',options:{'css-gh':`st-org/stui@${stuiVersion}`},children:[]}],
                [{tag:'global',options:{'css-gh':`st-org/sthl@${sthlVersion}`},children:[]}],
                [{tag:'global',options:{'css-gh':`st-org/st-std@${stStdVersion}`,'ucs-gh':`st-org/st-std@${stStdVersion}`},children:[]}]
            ]
        })
        if(result===undefined){
            return
        }
        container.innerHTML=''
        container.append(result.documentFragment)
        if(html){
            const pre=await result.compiler.compileSTDN([[{
                tag:'code',
                options:{
                    lang:'html',
                    block:true
                },
                children:container.innerHTML.split('\n').map(val=>val.split(''))
            }]])
            container.innerHTML=''
            container.append(pre)
            return
        }
        for(const a of container.querySelectorAll('a[href^="#"]')){
            const id=decodeURIComponent((a.getAttribute('href')??'').slice(1))
            a.setAttribute('href','#%20')
            let target:Element=container
            if(id.length>0){
                const target0=container.querySelector(`[id=${JSON.stringify(id)}]`)
                if(target0===null){
                    continue
                }
                target=target0
            }
            a.addEventListener('click',e=>{
                e.preventDefault()
                target.scrollIntoView()
            })
        }
    }
    await render()
    textarea.addEventListener('blur',render)
    return element
}
export const source:UnitCompiler=async (unit,compiler)=>{
    return await compiler.compileUnit({
        tag:'code',
        options:{
            lang:'stdn',
            block:true
        },
        children:removePlaceholder(compiler.stdn.stringify(unit.children)).split('\n').map(val=>val.split(''))
    })
}