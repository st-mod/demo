import type { Compiler, UnitCompiler } from '@ddu6/stc';
export declare function removePlaceholders(string: string): string;
export declare function createSourcePre(string: string, compiler: Compiler): Promise<HTMLElement | SVGElement>;
export declare function shadowCompile(string: string, style: HTMLStyleElement, root: ShadowRoot, url: string, compiler: Compiler): Promise<{
    compiler: Compiler;
    documentFragment: DocumentFragment;
}>;
export declare function toHTMLPre(container: Element, compiler: Compiler): Promise<void>;
export declare function shadowHashAnchorsListener(e: MouseEvent): void;
export declare const demo: UnitCompiler;
export declare const source: UnitCompiler;
export declare const result: UnitCompiler;
