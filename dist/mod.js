import { stringify } from 'stdn/dist/stringify';
const stStdVersion = '0.28.3';
export function removePlaceholders(string) {
    return string.replace(/\n? *placeholder(\n|$)/g, '\n');
}
export async function createSourcePre(string, compiler) {
    return await compiler.compileUnit({
        tag: 'code',
        options: {
            lang: 'stdn',
            block: true
        },
        children: string.split('\n').map(value => value.split(''))
    });
}
export async function shadowCompile(string, style, root, url, compiler) {
    return await compiler.compile([{
            value: string,
            url
        }], {
        style,
        headSTDN: [
            [{ tag: 'global', options: { 'mod-gh': `st-org/st-std@${stStdVersion}` }, children: [] }]
        ],
        root
    });
}
export async function toHTMLPre(container, compiler) {
    const pre = await compiler.compileSTDN([[{
                tag: 'code',
                options: {
                    lang: 'html',
                    block: true
                },
                children: container.innerHTML.split('\n').map(value => value.split(''))
            }]]);
    container.innerHTML = '';
    container.append(pre);
}
export function shadowHashAnchorsListener(e) {
    if (!(e.currentTarget instanceof Element)) {
        return;
    }
    for (const target of e.composedPath()) {
        if (!(target instanceof HTMLAnchorElement)) {
            continue;
        }
        const href = target.getAttribute('href');
        if (href === null) {
            continue;
        }
        if (!href.startsWith('#')) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        const id = decodeURIComponent(href.slice(1));
        let { currentTarget } = e;
        if (id.length > 0) {
            const result = currentTarget.querySelector(`[id=${JSON.stringify(id)}]`);
            if (result === null) {
                return;
            }
            currentTarget = result;
        }
        currentTarget.scrollIntoView();
        return;
    }
}
export const demo = async (unit, compiler) => {
    const element = document.createElement('div');
    const source = document.createElement('div');
    const resultEle = document.createElement('div');
    const textarea = document.createElement('textarea');
    const root = resultEle.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const container = document.createElement('div');
    source.classList.add('source');
    resultEle.classList.add('result');
    element.append(source);
    element.append(resultEle);
    root.append(style);
    root.append(container);
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'demo', compiler.context.tagToGlobalOptions)) === true;
    const url = compiler.context.urlToAbsURL('', unit);
    let string = textarea.value = removePlaceholders(stringify(unit.children));
    let sourcePre;
    async function render() {
        if (sourcePre !== undefined && textarea.value === string) {
            textarea.replaceWith(sourcePre);
            return false;
        }
        if (textarea.disabled) {
            return false;
        }
        textarea.disabled = true;
        string = textarea.value;
        const pre = await createSourcePre(string, compiler);
        source.innerHTML = '';
        sourcePre = pre;
        source.append(pre);
        pre.addEventListener('click', () => {
            pre.replaceWith(textarea);
            textarea.disabled = false;
            textarea.focus();
        });
        const result = await shadowCompile(string, style, root, url, compiler);
        if (result === undefined) {
            return true;
        }
        container.innerHTML = '';
        container.append(result.documentFragment);
        if (html) {
            await toHTMLPre(container, result.compiler);
            return true;
        }
        return true;
    }
    await render();
    container.addEventListener('click', shadowHashAnchorsListener);
    textarea.addEventListener('blur', async () => {
        if (await render()) {
            element.dispatchEvent(new Event('adjust', { bubbles: true, composed: true }));
        }
    });
    return element;
};
export const source = async (unit, compiler) => {
    return await createSourcePre(removePlaceholders(stringify(unit.children)), compiler);
};
export const result = async (unit, compiler) => {
    const element = document.createElement('div');
    const root = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const container = document.createElement('div');
    root.append(style);
    root.append(container);
    const html = (unit.options.html ?? compiler.extractor.extractLastGlobalOption('html', 'result', compiler.context.tagToGlobalOptions)) === true;
    const result = await shadowCompile(stringify(unit.children), style, root, compiler.context.urlToAbsURL('', unit), compiler);
    if (result === undefined) {
        return element;
    }
    container.append(result.documentFragment);
    if (html) {
        await toHTMLPre(container, result.compiler);
        return element;
    }
    container.addEventListener('click', shadowHashAnchorsListener);
    return element;
};
