import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@shuppert/primeng/button';
import { InputSwitchModule } from '@shuppert/primeng/inputswitch';
import { RadioButtonModule } from '@shuppert/primeng/radiobutton';
import { SidebarModule } from '@shuppert/primeng/sidebar';
import { AppConfigComponent } from './app.config.component';
import { SelectButtonModule } from '@shuppert/primeng/selectbutton';
@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule, SelectButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
