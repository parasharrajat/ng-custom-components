import { Type, Component, isDevMode } from '@angular/core';

export function getComponentTag(c: Type<any>): string {
  try {
    if (isDevMode()) {
      const componentDeco = (c as any).decorators.find(d => d.type.prototype.ngMetadataName.toLowerCase() === 'component');
      return componentDeco.args.reduce((a, arg) => ({ ...a, ...arg }), {}).selector;
    } else {
      return (c as any).ɵcmp.selectors[0][0];
    }
  } catch (e) {
    throw new Error('Unable to get Component selector for "' + c + '"');
  }
}
