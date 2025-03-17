import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@shuppert/primeng/button';
import { SplitButtonModule } from '@shuppert/primeng/splitbutton';
import { InputTextModule } from '@shuppert/primeng/inputtext';
import { AvatarModule } from '@shuppert/primeng/avatar';
import { ToolbarModule } from '@shuppert/primeng/toolbar';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, ToolbarModule, RouterModule, ButtonModule, SplitButtonModule, InputTextModule, AvatarModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AccessibilityDoc]
})
export class ToolbarDocModule {}
