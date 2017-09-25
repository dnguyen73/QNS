import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { NewArrivalComponent } from "./new-arrival/new-arrival.component";
import { NewContentComponent } from "./new-arrival/new-content/new-content.component";

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children: [
            { path: '', redirectTo: '/new', pathMatch: 'full' },
            {
                path: 'new',
                component: NewArrivalComponent,
                children: [
                    { path: '', component: NewContentComponent}
                ]
            },

        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { useHash: false })
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
export const routedComponents: any[] = [
    MainComponent,
    HomeComponent,
    NewArrivalComponent, NewContentComponent
]
