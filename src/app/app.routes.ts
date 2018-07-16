import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product.list.component';

export const routes: Routes = [
    { path: 'product/:id', component: ProductComponent},
    { path: 'products', component: ProductListComponent}
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true });
