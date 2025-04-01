import { NgModule } from "@angular/core";
import { EntityOverviewComponent } from "./entity-overview/entity-overview.component";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
    {
        path: 'entity-overview',
        component: EntityOverviewComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}