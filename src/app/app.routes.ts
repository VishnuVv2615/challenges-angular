import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/home/homepage/homepage.component';
import { PriceTDesignComponent } from './pages/Price-table/price-t-design/price-t-design.component';

export const routes: Routes = [
    {
        path:'',
        component:HomepageComponent
    },
    {
        path:'price-table',
        component:PriceTDesignComponent
    }
];
