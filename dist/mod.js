import { stringify } from 'stdn';
import { compile, getLastGlobalOption } from '@ddu6/stc';
export const demo = async (unit, compiler) => {
    const string = stringify(unit.children).replace(/{placeholder \[\]}\n/g, '//\n');
    const html = (unit.options.html ?? getLastGlobalOption('html', 'demo', compiler.context.tagToGlobalOptions)) === true;
    const element = document.createElement('div');
    const source = document.createElement('div');
    const resultEle = document.createElement('div');
    const root = resultEle.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const container = document.createElement('div');
    source.contentEditable = 'true';
    element.append(source);
    element.append(resultEle);
    root.append(style);
    root.append(container);
    let cstring = string;
    async function render() {
        const pre = await compiler.compileUnit({
            tag: 'code',
            options: {
                lang: 'stdn',
                block: true
            },
            children: cstring.split('\n').map(val => val.split(''))
        });
        source.innerHTML = '';
        source.append(pre);
        const result = await compile(`{css-gh st-org/stui@0.2.1, global []}\n{css-gh st-org/sthl@0.2.5, global []}\n{css-gh st-org/st-std@0.4.7, ucs-gh st-org/st-std@0.4.7, global []}\n${cstring}`, compiler.context.dir);
        if (result !== undefined) {
            container.innerHTML = '';
            style.textContent = result.context.css;
            container.append(result.documentFragment);
        }
        if (html) {
            const { innerHTML } = container;
            const pre = await compiler.compileUnit({
                tag: 'code',
                options: {
                    lang: 'html',
                    block: true
                },
                children: innerHTML.slice('<div class="st-line"><div class="unit global"></div></div>'.length * 3).split('\n').map(val => val.split(''))
            });
            container.innerHTML = '';
            container.append(pre);
        }
    }
    await render();
    source.addEventListener('blur', async () => {
        if (source.children.length === 0) {
            return;
        }
        const nstring = Array.from(source.children[0].children).map(val => (val.textContent ?? '')).join('\n');
        if (nstring === cstring) {
            return;
        }
        cstring = nstring;
        await render();
    });
    return element;
};
