import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@shuppert/primeng/button';
import { CheckboxModule } from '@shuppert/primeng/checkbox';
import { InputTextModule } from '@shuppert/primeng/inputtext';
import { RadioButtonModule } from '@shuppert/primeng/radiobutton';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ButtonDoc } from './buttondoc';
import { CheckboxDoc } from './checkboxdoc';
import { ImportDoc } from './importdoc';
import { MultipleDoc } from './multipledoc';
import { InputGroupModule } from '@shuppert/primeng/inputgroup';
import { InputGroupAddonModule } from '@shuppert/primeng/inputgroupaddon';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, InputTextModule, ButtonModule, CheckboxModule, RadioButtonModule, InputGroupModule, InputGroupAddonModule, RadioButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, MultipleDoc, ButtonDoc, CheckboxDoc, AccessibilityDoc]
})
export class InputGroupDocModule {}
