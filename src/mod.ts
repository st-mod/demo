import type {STON} from 'ston'
import {stringify as stonStringify} from 'ston/dist/stringify'
import {stringify} from 'stdn/dist/stringify'
import type {Compiler, UnitCompiler} from '@ddu6/stc'
const stStdVersion = '0.28.3'
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
        children: string.split('\n').map(value => value.split(''))
    })
}
export async function createParsePre(string: string, compiler: Compiler) {
    return await compiler.compileUnit({
        tag: 'code',
        options: {
            lang: 'ston',
            block: true
        },
        children: stonStringify(<STON | undefined>compiler.stdn.parse(string), {
            addDecorativeSpace: 'always',
            indentTarget: 'all',
            useUnquotedString: true
        }).split('\n').map(value => value.split(''))
    })
}
export async function shadowCompile(string: string, style: HTMLStyleElement, root: ShadowRoot, url: string, compiler: Compiler) {
    return await compiler.compile([{
        value: string,
        url
    }], {
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
        children: container.innerHTML.split('\n').map(value => value.split(''))
    }]])
    container.innerHTML = ''
    container.append(pre)
}
export function shadowHashAnchorsListener(e: MouseEvent) {
    if (!(e.currentTarget instanceof Element)) {
        return
    }
    for (const target of e.composedPath()) {
        if (!(target instanceof HTMLAnchorElement)) {
            continue
        }
        const href = target.getAttribute('href')
        if (href === null || !href.startsWith('#')) {
            return
        }
        e.stopPropagation()
        e.preventDefault()
        if (href.length === 1) {
            e.currentTarget.scrollIntoView()
            return
        }
        const id = decodeURIComponent(href.slice(1))
        const result = e.currentTarget.querySelector(`[id=${JSON.stringify(id)}]`)
        if (result !== null) {
            result.scrollIntoView()
        }
        return
    }
}
export const demo: UnitCompiler = async (unit, compiler) => {
    const element = document.createElement('div')
    const source = document.createElement('div')
    const resultEle = document.createElement('div')
    const textarea = document.createElement('textarea')
    source.classList.add('source')
    resultEle.classList.add('result')
    element.append(source)
    element.append(resultEle)
    const parse = (unit.options.parse ?? compiler.extractor.extractLastGlobalOption('parse', 'demo', compiler.context.tagToGlobalOptions)) === true
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'demo', compiler.context.tagToGlobalOptions)) === true
    const url = compiler.context.urlToAbsURL('', unit)
    let string = textarea.value = removePlaceholders(stringify(unit.children))
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
        resultEle.innerHTML = ''
        if (parse) {
            resultEle.append(await createParsePre(string, compiler))
            return true
        }
        const root = resultEle.attachShadow({mode: 'open'})
        const style = document.createElement('style')
        const container = document.createElement('div')
        root.append(style)
        root.append(container)
        const result = await shadowCompile(string, style, root, url, compiler)
        if (result === undefined) {
            return true
        }
        container.append(result.documentFragment)
        if (html) {
            await toHTMLPre(container, result.compiler)
            return true
        }
        container.addEventListener('click', shadowHashAnchorsListener)
        return true
    }
    await render()
    textarea.addEventListener('blur', async () => {
        if (await render()) {
            element.dispatchEvent(new Event('adjust', {bubbles: true, composed: true}))
        }
    })
    return element
}
export const source: UnitCompiler = async (unit, compiler) => {
    return await createSourcePre(removePlaceholders(stringify(unit.children)), compiler)
}
export const result: UnitCompiler = async (unit, compiler) => {
    const element = document.createElement('div')
    const parse = (unit.options.parse ?? compiler.extractor.extractLastGlobalOption('parse', 'demo', compiler.context.tagToGlobalOptions)) === true
    if (parse) {
        element.append(await createParsePre(stringify(unit.children), compiler))
        return element
    }
    const root = element.attachShadow({mode: 'open'})
    const style = document.createElement('style')
    const container = document.createElement('div')
    root.append(style)
    root.append(container)
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'result', compiler.context.tagToGlobalOptions)) === true
    const result = await shadowCompile(stringify(unit.children), style, root, compiler.context.urlToAbsURL('', unit), compiler)
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