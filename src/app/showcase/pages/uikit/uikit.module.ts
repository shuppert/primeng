import { CommonModule } from '@angular/common';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { UIKitRoutingModule } from './uikit-routing.module';
import { UIKitComponent } from './uikit.component';

@NgModule({ declarations: [UIKitComponent], imports: [CommonModule, UIKitRoutingModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class UIKitModule {}
