var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { stringify as stonStringify } from 'ston/dist/stringify';
import { stringify } from 'stdn/dist/stringify';
const stStdVersion = '0.31.9';
export function removePlaceholders(string) {
    return string.replace(/\n? *placeholder(\n|$)/g, '\n');
}
export function createSourcePre(string, compiler) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield compiler.compileUnit({
            tag: 'code',
            options: {
                lang: 'stdn',
                block: true
            },
            children: string.split('\n').map(value => value.split(''))
        });
    });
}
export function createParsePre(string, compiler) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield compiler.compileUnit({
            tag: 'code',
            options: {
                lang: 'ston',
                block: true
            },
            children: stonStringify(compiler.stdn.parse(string), {
                addDecorativeSpace: 'always',
                indentTarget: 'all',
                useUnquotedString: true
            }).split('\n').map(value => value.split(''))
        });
    });
}
export function shadowCompile(string, style, root, url, compiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const stdURL = new URL(`../st-std@${stStdVersion}`, import.meta.url).href;
        return yield compiler.compile([{
                value: string,
                url
            }], {
            style,
            headSTDN: [
                [{
                        tag: 'global', options: {
                            'css-src': `${stdURL}/main.css`,
                            'ucs-src': `${stdURL}/ucs.js`
                        }, children: []
                    }]
            ],
            root
        });
    });
}
export function toHTMLPre(container, compiler) {
    return __awaiter(this, void 0, void 0, function* () {
        const pre = yield compiler.compileSTDN([[{
                    tag: 'code',
                    options: {
                        lang: 'html',
                        block: true
                    },
                    children: container.innerHTML.split('\n').map(value => value.split(''))
                }]]);
        container.innerHTML = '';
        container.append(pre);
    });
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
        if (href === null || !href.startsWith('#')) {
            return;
        }
        e.stopPropagation();
        e.preventDefault();
        if (href.length === 1) {
            e.currentTarget.scrollIntoView();
            return;
        }
        const id = decodeURIComponent(href.slice(1));
        const result = e.currentTarget.querySelector(`[id=${JSON.stringify(id)}]`);
        if (result !== null) {
            result.scrollIntoView();
        }
        return;
    }
}
export const demo = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    const element = document.createElement('div');
    const source = document.createElement('div');
    const resultEle = document.createElement('div');
    const textarea = document.createElement('textarea');
    source.classList.add('source');
    resultEle.classList.add('result');
    element.append(source);
    element.append(resultEle);
    let string = textarea.value = removePlaceholders(stringify(unit.children));
    let sourcePre;
    if (((_a = unit.options.parse) !== null && _a !== void 0 ? _a : compiler.context.extractLastGlobalOption('parse', 'demo')) === true) {
        function render() {
            return __awaiter(this, void 0, void 0, function* () {
                if (sourcePre !== undefined && textarea.value === string) {
                    textarea.replaceWith(sourcePre);
                    return false;
                }
                if (textarea.disabled) {
                    return false;
                }
                textarea.disabled = true;
                string = textarea.value;
                const pre = sourcePre = yield createSourcePre(string, compiler);
                source.innerHTML = '';
                source.append(pre);
                pre.addEventListener('click', () => {
                    pre.replaceWith(textarea);
                    textarea.disabled = false;
                    textarea.focus();
                });
                resultEle.innerHTML = '';
                resultEle.append(yield createParsePre(string, compiler));
                return true;
            });
        }
        yield render();
        textarea.addEventListener('blur', () => __awaiter(void 0, void 0, void 0, function* () {
            if (yield render()) {
                element.dispatchEvent(new Event('adjust', { bubbles: true, composed: true }));
            }
        }));
        return element;
    }
    const root = resultEle.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const container = document.createElement('div');
    root.append(style);
    root.append(container);
    const html = ((_b = unit.options.html) !== null && _b !== void 0 ? _b : compiler.context.extractLastGlobalOption('html', 'demo')) === true;
    const url = compiler.context.urlToAbsURL('', unit);
    function render() {
        return __awaiter(this, void 0, void 0, function* () {
            if (sourcePre !== undefined && textarea.value === string) {
                textarea.replaceWith(sourcePre);
                return false;
            }
            if (textarea.disabled) {
                return false;
            }
            textarea.disabled = true;
            string = textarea.value;
            const pre = sourcePre = yield createSourcePre(string, compiler);
            source.innerHTML = '';
            source.append(pre);
            pre.addEventListener('click', () => {
                pre.replaceWith(textarea);
                textarea.disabled = false;
                textarea.focus();
            });
            const result = yield shadowCompile(string, style, root, url, compiler);
            if (result === undefined) {
                return true;
            }
            container.innerHTML = '';
            container.append(result.documentFragment);
            if (html) {
                yield toHTMLPre(container, result.compiler);
                return true;
            }
            return true;
        });
    }
    yield render();
    textarea.addEventListener('blur', () => __awaiter(void 0, void 0, void 0, function* () {
        if (yield render()) {
            element.dispatchEvent(new Event('adjust', { bubbles: true, composed: true }));
        }
    }));
    container.addEventListener('click', shadowHashAnchorsListener);
    return element;
});
export const source = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    return yield createSourcePre(removePlaceholders(stringify(unit.children)), compiler);
});
export const result = (unit, compiler) => __awaiter(void 0, void 0, void 0, function* () {
    var _c, _d;
    const element = document.createElement('div');
    if (((_c = unit.options.parse) !== null && _c !== void 0 ? _c : compiler.context.extractLastGlobalOption('parse', 'result')) === true) {
        element.append(yield createParsePre(stringify(unit.children), compiler));
        return element;
    }
    const root = element.attachShadow({ mode: 'open' });
    const style = document.createElement('style');
    const container = document.createElement('div');
    root.append(style);
    root.append(container);
    const result = yield shadowCompile(stringify(unit.children), style, root, compiler.context.urlToAbsURL('', unit), compiler);
    if (result === undefined) {
        return element;
    }
    container.append(result.documentFragment);
    if (((_d = unit.options.html) !== null && _d !== void 0 ? _d : compiler.context.extractLastGlobalOption('html', 'result')) === true) {
        yield toHTMLPre(container, result.compiler);
        return element;
    }
    container.addEventListener('click', shadowHashAnchorsListener);
    return element;
});
