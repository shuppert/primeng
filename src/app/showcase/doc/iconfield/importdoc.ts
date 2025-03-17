import { Component } from '@angular/core';
import { Code } from '@domain/code';

@Component({
    selector: 'import-doc',
    template: `<app-code [code]="code" [hideToggleCode]="true"></app-code> `
})
export class ImportDoc {
    code: Code = {
        typescript: `import { IconFieldModule } from '@shuppert/primeng/iconfield';
import { InputIconModule } from '@shuppert/primeng/inputicon';`
    };
}
