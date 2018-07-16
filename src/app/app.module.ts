import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// PrimeNG
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputMaskModule } from 'primeng/inputmask';
import { SpinnerModule } from 'primeng/spinner';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';


// Custom components
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AppMenuComponent, AppSubMenuComponent} from './app.menu.component';
import { AppTopBarComponent } from './app.topbar.component';
import { ProductComponent } from './product/product.component';
import { InputLitro } from './inputs/input-litro';
import { InputQuilograma } from './inputs/input-quilograma';
import { InputUnidade } from './inputs/input-unidade';
import { ProductService } from './services/ProductService';
import { ProductListComponent } from './product/product.list.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutes,
        ScrollPanelModule,
        ButtonModule,
        CalendarModule,
        SelectButtonModule,
        InputSwitchModule,
        InputMaskModule,
        SpinnerModule,
        MessagesModule,
        MessageModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        AppMenuComponent,
        AppSubMenuComponent,
        AppTopBarComponent,
        ProductComponent,
        ProductListComponent,
        InputLitro,
        InputQuilograma,
        InputUnidade
    ],
    providers: [ ProductService ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
