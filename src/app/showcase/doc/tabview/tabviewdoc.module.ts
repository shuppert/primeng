import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from '@shuppert/primeng/button';
import { TabViewModule } from '@shuppert/primeng/tabview';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BasicDoc } from './basicdoc';
import { ControlledDoc } from './controlleddoc';
import { DynamicDoc } from './dynamicdoc';
import { DisabledDoc } from './disableddoc';
import { TemplateDoc } from './customtemplatedoc';
import { ImportDoc } from './importdoc';
import { ClosableDoc } from './closabledoc';
import { ScrollableDoc } from './scrollabledoc';
import { LazyDoc } from './lazydoc';
import { StyleDoc } from './styledoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { AvatarModule } from '@shuppert/primeng/avatar';
import { BadgeModule } from '@shuppert/primeng/badge';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, TabViewModule, RouterModule, ButtonModule, AvatarModule, BadgeModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, ControlledDoc, DynamicDoc, DisabledDoc, TemplateDoc, ClosableDoc, ScrollableDoc, LazyDoc, StyleDoc, AccessibilityDoc]
})
export class TabViewDocModule {}
