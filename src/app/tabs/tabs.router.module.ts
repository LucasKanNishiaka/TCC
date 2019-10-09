import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core'
import { TabsPage } from './tabs.page';

const routes : Routes = [
    {
        path: '',
        component: TabsPage,
        children:[
        { path: 'avaliacoes', loadChildren: '../avaliacoes/avaliacoes.module#AvaliacoesPageModule' },
        { path: 'perfil', loadChildren: '../perfil/perfil.module#PerfilPageModule' },
        { path: 'teste', loadChildren: '../teste/teste.module#TestePageModule' },]
    }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class TabsRoutingModule { }
  