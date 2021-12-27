import type {UnitCompiler} from '@ddu6/stc'
export function removePlaceholder(string:string){
    return string.replace(/\n? *placeholder\n/g,'\n')
}
export const demo:UnitCompiler=async (unit,compiler)=>{
    const string=removePlaceholder(compiler.stdn.stringify(unit.children))
    const html=(unit.options.html??compiler.extractor.extractLastGlobalOption('html','demo',compiler.context.tagToGlobalOptions))===true
    const element=document.createElement('div')
    const source=document.createElement('div')
    const resultEle=document.createElement('div')
    const root=resultEle.attachShadow({mode:'open'})
    const style=document.createElement('style')
    const container=document.createElement('div')
    source.contentEditable='true'
    element.append(source)
    element.append(resultEle)
    root.append(style)
    root.append(container)
    let cstring=string
    async function render(){
        const pre=await compiler.compileUnit({
            tag:'code',
            options:{
                lang:'stdn',
                block:true
            },
            children:cstring.split('\n').map(val=>val.split(''))
        })
        source.innerHTML=''
        source.append(pre)
        const result=await compiler.compile(cstring,compiler.context.dir,{
            style,
            headSTDN:[
                [{tag:'global',options:{'css-gh':'st-org/stui@0.4.0'},children:[]}],
                [{tag:'global',options:{'css-gh':'st-org/sthl@0.5.0'},children:[]}],
                [{tag:'global',options:{'css-gh':'st-org/st-std@0.10.0','ucs-gh':'st-org/st-std@0.10.0'},children:[]}]
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
    source.addEventListener('blur',async ()=>{
        if(source.children.length===0){
            return
        }
        const nstring=Array.from(source.children[0].children).map(val=>(val.textContent??'')).join('\n')
        if(nstring===cstring){
            return
        }
        cstring=nstring
        await render()
    })
    return element
}
export const stdn:UnitCompiler=async (unit,compiler)=>{
    return await compiler.compileUnit({
        tag:'code',
        options:{
            lang:'stdn',
            block:true
        },
        children:removePlaceholder(compiler.stdn.stringify(unit.children)).split('\n').map(val=>val.split(''))
    })
}