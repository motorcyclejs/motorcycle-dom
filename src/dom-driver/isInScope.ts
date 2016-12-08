import { IsolateModule } from '../modules/IsolateModule';

export function isInScope(scope: string, isolateModule: IsolateModule) {
  return function (element: HTMLElement) {
    for (; element; element = element.parentElement as HTMLElement) {
      const matchedScope = isolateModule.findScope(element);

      if (matchedScope && matchedScope !== scope) return false;

      if (matchedScope) return true;
    }

    return !scope;
  };
}
