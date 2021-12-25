import {stringify} from 'stdn'
import {compile,getLastGlobalOption, UnitCompiler} from '@ddu6/stc'
export const demo:UnitCompiler=async (unit,compiler)=>{
    const string=stringify(unit.children).replace(/{placeholder \[\]}\n/g,'//\n')
    const html=(unit.options.html??getLastGlobalOption('html','demo',compiler.context.tagToGlobalOptions))===true
    const element=document.createElement('div')
    const source=document.createElement('div')
    const resultEle=document.createElement('div')
    source.contentEditable='true'
    element.append(source)
    element.append(resultEle)
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
        const result=await compile(cstring,compiler.context.dir,{
            builtInTagToUnitCompiler:compiler.context.tagToUnitCompiler
        })
        if(result!==undefined){
            resultEle.innerHTML=''
            resultEle.append(result.documentFragment)
        }
        if(html){
            const {innerHTML}=resultEle
            const pre=await compiler.compileUnit({
                tag:'code',
                options:{
                    lang:'html',
                    block:true
                },
                children:innerHTML.split('\n').map(val=>val.split(''))
            })
            resultEle.innerHTML=''
            resultEle.append(pre)
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