import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { ColorsComponent } from './utilities/colors/colors.component';


const routes: Routes = [{path:'login',component:LoginComponent},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path:'',redirectTo:'dash',pathMatch:'full'},
      {path:'dash',component:DashComponent,title:'dashboard'},
      { path: 'page1', component: Page1Component,title:'page1' },
      { path: 'page2', component: Page2Component,title:'page2' },
    {
      path: 'utilities',
      children: [
        { path: 'colors', component: ColorsComponent}
      ]
    },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
