import type {Compiler, UnitCompiler} from '@ddu6/stc'
const stStdVersion = '0.24.2'
export function removePlaceholders(string: string) {
    return string.replace(/\n? *placeholder(\n|$)/g, '\n')
}
export async function createSourcePre(string: string, compiler: Compiler) {
    return await compiler.compileUnit({
        tag: 'code',
        options: {
            lang: 'stdn',
            block: true
        },
        children: string.split('\n').map(val => val.split(''))
    })
}
export async function shadowCompile(string: string, style: HTMLStyleElement, root: ShadowRoot, compiler: Compiler) {
    return await compiler.compile(string, compiler.context.dir, {
        style,
        headSTDN: [
            [{tag: 'global', options: {'mod-gh': `st-org/st-std@${stStdVersion}`}, children: []}]
        ],
        root
    })
}
export async function toHTMLPre(container: Element, compiler: Compiler) {
    const pre = await compiler.compileSTDN([[{
        tag: 'code',
        options: {
            lang: 'html',
            block: true
        },
        children: container.innerHTML.split('\n').map(val => val.split(''))
    }]])
    container.innerHTML = ''
    container.append(pre)
}
export function shadowHashAnchorsListener(e: MouseEvent) {
    if (!(e.target instanceof HTMLAnchorElement) || !(e.currentTarget instanceof Element)) {
        return
    }
    const href = e.target.getAttribute('href')
    if (href === null || !href.startsWith('#')) {
        return
    }
    e.stopPropagation()
    e.preventDefault()
    const id = decodeURIComponent(href.slice(1))
    let target = e.currentTarget
    if (id.length > 0) {
        const target0 = target.querySelector(`[id=${JSON.stringify(id)}]`)
        if (target0 === null) {
            return
        }
        target = target0
    }
    target.scrollIntoView()
}
export const demo: UnitCompiler = async (unit, compiler) => {
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'demo', compiler.context.tagToGlobalOptions)) === true
    const element = document.createElement('div')
    const source = document.createElement('div')
    const resultEle = document.createElement('div')
    const textarea = document.createElement('textarea')
    const root = resultEle.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const container = document.createElement('div')
    source.classList.add('source')
    resultEle.classList.add('result')
    element.append(source)
    element.append(resultEle)
    root.append(style)
    root.append(container)
    let string = textarea.value = removePlaceholders(compiler.stdn.stringify(unit.children))
    let sourcePre: Element | undefined
    async function render() {
        if (sourcePre !== undefined && textarea.value === string) {
            textarea.replaceWith(sourcePre)
            return false
        }
        if (textarea.disabled) {
            return false
        }
        textarea.disabled = true
        string = textarea.value
        const pre = await createSourcePre(string, compiler)
        source.innerHTML = ''
        sourcePre = pre
        source.append(pre)
        pre.addEventListener('click', () => {
            pre.replaceWith(textarea)
            textarea.disabled = false
            textarea.focus()
        })
        const result = await shadowCompile(string, style, root, compiler)
        if (result === undefined) {
            return true
        }
        container.innerHTML = ''
        container.append(result.documentFragment)
        if (html) {
            await toHTMLPre(container, result.compiler)
            return true
        }
        return true
    }
    await render()
    container.addEventListener('click', shadowHashAnchorsListener)
    textarea.addEventListener('blur', async () => {
        if (await render()) {
            element.dispatchEvent(new Event('adjust', {bubbles: true, composed: true}))
        }
    })
    return element
}
export const source: UnitCompiler = async (unit, compiler) => {
    return await createSourcePre(removePlaceholders(compiler.stdn.stringify(unit.children)), compiler)
}
export const result: UnitCompiler = async (unit, compiler) => {
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'result', compiler.context.tagToGlobalOptions)) === true
    const element = document.createElement('div')
    const root = element.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const container = document.createElement('div')
    root.append(style)
    root.append(container)
    const result = await shadowCompile(compiler.stdn.stringify(unit.children), style, root, compiler)
    if (result === undefined) {
        return element
    }
    container.append(result.documentFragment)
    if (html) {
        await toHTMLPre(container, result.compiler)
        return element
    }
    container.addEventListener('click', shadowHashAnchorsListener)
    return element
}