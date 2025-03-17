import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { AppConfigService } from '@service/appconfigservice';
import { AppConfigComponent } from './config/app.config.component';
import { AppFooterComponent } from './footer/app.footer.component';
import { AppMenuComponent } from './menu/app.menu.component';
import { AppTopBarComponent } from './topbar/app.topbar.component';
import { JsonService } from '@service/jsonservice';
import { AutoCompleteModule } from 'primeng/autocomplete';

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
    declarations: [AppComponent, AppConfigComponent, AppTopBarComponent, AppMenuComponent, AppFooterComponent],
    imports: [RouterTestingModule, FormsModule, BrowserAnimationsModule, AutoCompleteModule],
    providers: [JsonService, AppConfigService, provideHttpClient(withInterceptorsFromDi())]
}).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
});
