import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TieredMenuModule } from '@shuppert/primeng/tieredmenu';
import { ButtonModule } from '@shuppert/primeng/button';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { AppCodeModule } from '@layout/doc/app.code.component';
import { BadgeModule } from '@shuppert/primeng/badge';
import { ToastModule } from '@shuppert/primeng/toast';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { PopupDoc } from './popupdoc';
import { TemplateDoc } from './templatedoc';
import { CommandDoc } from './commanddoc';
import { RouterDoc } from './routerdoc';
import { StyleDoc } from './styledoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { MessageService } from '@shuppert/primeng/api';
import { FloatLabelModule } from '@shuppert/primeng/floatlabel';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, TieredMenuModule, ButtonModule, AppDocModule, BadgeModule, ToastModule, FloatLabelModule],
    declarations: [BasicDoc, ImportDoc, PopupDoc, StyleDoc, AccessibilityDoc, TemplateDoc, CommandDoc, RouterDoc],
    exports: [AppDocModule],
    providers: [MessageService]
})
export class TieredMenuDocModule {}
