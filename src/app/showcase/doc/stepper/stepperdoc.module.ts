import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StepperModule } from '@shuppert/primeng/stepper';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { ButtonModule } from '@shuppert/primeng/button';
import { VerticalDoc } from './verticaldoc';
import { LinearDoc } from './lineardoc';
import { TemplateDoc } from './templatedoc';
import { PasswordModule } from '@shuppert/primeng/password';
import { InputIconModule } from '@shuppert/primeng/inputicon';
import { IconFieldModule } from '@shuppert/primeng/iconfield';
import { InputTextModule } from '@shuppert/primeng/inputtext';
import { ToggleButtonModule } from '@shuppert/primeng/togglebutton';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, StepperModule, RouterModule, FormsModule, ReactiveFormsModule, ButtonModule, PasswordModule, InputIconModule, IconFieldModule, InputTextModule, ToggleButtonModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, VerticalDoc, LinearDoc, TemplateDoc, AccessibilityDoc]
})
export class StepperDocModule {}
