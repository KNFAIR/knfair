import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {DashboardDemoComponent} from './demo/view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './demo/view/formlayoutdemo.component';
import {PanelsDemoComponent} from './demo/view/panelsdemo.component';
import {OverlaysDemoComponent} from './demo/view/overlaysdemo.component';
import {MediaDemoComponent} from './demo/view/mediademo.component';
import {MenusDemoComponent} from './demo/view/menusdemo.component';
import {MessagesDemoComponent} from './demo/view/messagesdemo.component';
import {MiscDemoComponent} from './demo/view/miscdemo.component';
import {EmptyDemoComponent} from './demo/view/emptydemo.component';
import {ChartsDemoComponent} from './demo/view/chartsdemo.component';
import {FileDemoComponent} from './demo/view/filedemo.component';
import {DocumentationComponent} from './demo/view/documentation.component';
import {AppMainComponent} from './modules/core/components/main/app.main.component';
import {AppNotfoundComponent} from './pages/app.notfound.component';
import {AppErrorComponent} from './pages/app.error.component';
import {AppAccessdeniedComponent} from './pages/app.accessdenied.component';
import {AppLoginComponent} from './pages/app.login.component';
import {InputDemoComponent} from './demo/view/inputdemo.component';
import {FloatLabelDemoComponent} from './demo/view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './demo/view/invalidstatedemo.component';
import {ButtonDemoComponent} from './demo/view/buttondemo.component';
import {TableDemoComponent} from './demo/view/tabledemo.component';
import {ListDemoComponent} from './demo/view/listdemo.component';
import {TreeDemoComponent} from './demo/view/treedemo.component';
import {DisplayComponent} from './utilities/display.component';
import {ElevationComponent} from './utilities/elevation.component';
import {FlexboxComponent} from './utilities/flexbox.component';
import {GridComponent} from './utilities/grid.component';
import {IconsComponent} from './utilities/icons.component';
import {WidgetsComponent} from './utilities/widgets.component';
import {SpacingComponent} from './utilities/spacing.component';
import {TypographyComponent} from './utilities/typography.component';
import {TextComponent} from './utilities/text.component';
import {AppCrudComponent} from './pages/app.crud.component';
import {AppCalendarComponent} from './pages/app.calendar.component';
import {AppTimelineDemoComponent} from './pages/app.timelinedemo.component';
import {AppInvoiceComponent} from './pages/app.invoice.component';
import {AppHelpComponent} from './pages/app.help.component';
import {TestyComponent} from './modules/pages/test/testy/testy.component';
import {SettingsComponent} from './modules/pages/settings/components/settings/settings.component';
import {RegistrationMainComponent} from './modules/pages/registration/components/registration-main/registration-main.component';
import {RegistrationLandlordComponent} from './modules/pages/registration/components/registration-landlord/registration-landlord.component';
import {DashboardComponent} from './modules/pages/dashboard/components/dashboard/dashboard.component';
import { SubjectsComponent } from './modules/pages/subjects/components/subjects/subjects.component';

const route: Routes = [
    {
        path: '', component: AppMainComponent,
        children: [
            {path: '', component: DashboardComponent},
            {path: 'dashboard', component: DashboardDemoComponent},
            {path: 'settings', component: SettingsComponent},
            {path: 'subject', component: SubjectsComponent},
            {path: 'subject/post', component: SettingsComponent},




            {path: 'registration', component: RegistrationMainComponent},
                // children: [
                //     { path: 'landlord', component: RegistrationLandlordComponent }
                // ]},
            {path: 'registration/landlord', component: RegistrationLandlordComponent},

            {path: 'uikit/formlayout', component: FormLayoutDemoComponent},
            {path: 'uikit/floatlabel', component: FloatLabelDemoComponent},
            {path: 'uikit/invalidstate', component: InvalidStateDemoComponent},
            {path: 'uikit/input', component: InputDemoComponent},
            {path: 'uikit/button', component: ButtonDemoComponent},
            {path: 'uikit/table', component: TableDemoComponent},
            {path: 'uikit/list', component: ListDemoComponent},
            {path: 'uikit/tree', component: TreeDemoComponent},
            {path: 'uikit/panel', component: PanelsDemoComponent},
            {path: 'uikit/overlay', component: OverlaysDemoComponent},
            {path: 'uikit/menu', component: MenusDemoComponent},
            {path: 'uikit/media', component: MediaDemoComponent},
            {path: 'uikit/message', component: MessagesDemoComponent},
            {path: 'uikit/misc', component: MiscDemoComponent},
            {path: 'uikit/charts', component: ChartsDemoComponent},
            {path: 'uikit/file', component: FileDemoComponent},
            {path: 'utilities/display', component: DisplayComponent},
            {path: 'utilities/elevation', component: ElevationComponent},
            {path: 'utilities/flexbox', component: FlexboxComponent},
            {path: 'utilities/grid', component: GridComponent},
            {path: 'utilities/icons', component: IconsComponent},
            {path: 'utilities/widgets', component: WidgetsComponent},
            {path: 'utilities/spacing', component: SpacingComponent},
            {path: 'utilities/typography', component: TypographyComponent},
            {path: 'utilities/text', component: TextComponent},
            {path: 'pages/crud', component: AppCrudComponent},
            {path: 'pages/calendar', component: AppCalendarComponent},
            {path: 'pages/timeline', component: AppTimelineDemoComponent},
            {path: 'pages/invoice', component: AppInvoiceComponent},
            {path: 'pages/help', component: AppHelpComponent},
            {path: 'pages/empty', component: EmptyDemoComponent},
            {path: 'documentation', component: DocumentationComponent},
            {path: 'test', component: TestyComponent}
        ]
    },

    {path: 'error', component: AppErrorComponent},
    {path: 'access', component: AppAccessdeniedComponent},
    {path: 'notfound', component: AppNotfoundComponent},
    {path: 'login', component: AppLoginComponent},
    // {path: '**', redirectTo: '/notfound'},
];

@NgModule({
    imports: [
        RouterModule.forRoot(route, {scrollPositionRestoration: 'enabled'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
