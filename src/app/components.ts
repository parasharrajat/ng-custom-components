import { Type } from '@angular/core';
import { Test2Component } from './test2/test2.component';
import { ChecklistQuestionsComponent } from './checklist-questions/checklist-questions.component';
import { ChecklistListComponent } from './checklist-list/checklist-list.component';
import { getComponentTag } from './utils';

const components: EjectedComponents = [
  Test2Component,
  ['pop-checklist-list', ChecklistListComponent],
  ['pop-checklist-questions', ChecklistQuestionsComponent]
];

Object.defineProperty(components, 'getData', {
  enumerable: true,
  value() {
    const result = [];
    for (const c of this) {
      let compo;
      let name;
      if (c instanceof Array) {
        name = c[0];
        compo = c[1];
      } else {
        name = getComponentTag(c);
        compo = c;
      }
      result.push({ name, compo });
    }
    return result;
  }
});
export interface ComponentWithMeta { name: string; compo: Type<any>; }

export type EjectedComponents = Array<[string, Type<any>] | Type<any>> & {
  getData?: () => ComponentWithMeta[];
};
export default components;
