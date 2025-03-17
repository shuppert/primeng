import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AvatarModule } from '@shuppert/primeng/avatar';
import { BadgeModule } from '@shuppert/primeng/badge';
import { ButtonModule } from '@shuppert/primeng/button';
import { MenuModule } from '@shuppert/primeng/menu';
import { ToastModule } from '@shuppert/primeng/toast';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { BasicDoc } from './basicdoc';
import { CommandDoc } from './commanddoc';
import { TemplateDoc } from './templatedoc';
import { GroupDoc } from './groupdoc';
import { ImportDoc } from './importdoc';
import { RouterDoc } from './routerdoc';
import { PopupDoc } from './popupdoc';
import { StyleDoc } from './styledoc';
import { RippleModule } from '@shuppert/primeng/ripple';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MenuModule, ToastModule, ButtonModule, RippleModule, AvatarModule, AppDocModule, BadgeModule],
    declarations: [BasicDoc, CommandDoc, TemplateDoc, GroupDoc, ImportDoc, RouterDoc, PopupDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MenuDocModule {}
