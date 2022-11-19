import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AccordionModule} from 'primeng/accordion';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {AvatarGroupModule} from 'primeng/avatargroup';
import {AvatarModule} from 'primeng/avatar';
import {BadgeModule} from 'primeng/badge';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {ButtonModule} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {ChartModule} from 'primeng/chart';
import {CheckboxModule} from 'primeng/checkbox';
import {ChipModule} from 'primeng/chip';
import {ChipsModule} from 'primeng/chips';
import {CodeHighlighterModule} from 'primeng/codehighlighter';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {ColorPickerModule} from 'primeng/colorpicker';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DividerModule} from 'primeng/divider';
import {DropdownModule} from 'primeng/dropdown';
import {FieldsetModule} from 'primeng/fieldset';
import {FileUploadModule} from 'primeng/fileupload';
import {FullCalendarModule} from '@fullcalendar/angular';
import {GalleriaModule} from 'primeng/galleria';
import {KnobModule} from 'primeng/knob';
import {ImageModule} from 'primeng/image';
import {InplaceModule} from 'primeng/inplace';
import {InputNumberModule} from 'primeng/inputnumber';
import {InputMaskModule} from 'primeng/inputmask';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {LightboxModule} from 'primeng/lightbox';
import {ListboxModule} from 'primeng/listbox';
import {MegaMenuModule} from 'primeng/megamenu';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {MultiSelectModule} from 'primeng/multiselect';
import {OrderListModule} from 'primeng/orderlist';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import {PasswordModule} from 'primeng/password';
import {PickListModule} from 'primeng/picklist';
import {ProgressBarModule} from 'primeng/progressbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {ScrollTopModule} from 'primeng/scrolltop';
import {SelectButtonModule} from 'primeng/selectbutton';
import {SidebarModule} from 'primeng/sidebar';
import {SkeletonModule} from 'primeng/skeleton';
import {SlideMenuModule} from 'primeng/slidemenu';
import {SliderModule} from 'primeng/slider';
import {SplitButtonModule} from 'primeng/splitbutton';
import {SplitterModule} from 'primeng/splitter';
import {StepsModule} from 'primeng/steps';
import {TableModule} from 'primeng/table';
import {TabMenuModule} from 'primeng/tabmenu';
import {TabViewModule} from 'primeng/tabview';
import {TagModule} from 'primeng/tag';
import {TerminalModule} from 'primeng/terminal';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {TimelineModule} from 'primeng/timeline';
import {ToastModule} from 'primeng/toast';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {ToolbarModule} from 'primeng/toolbar';
import {TooltipModule} from 'primeng/tooltip';
import {TreeModule} from 'primeng/tree';
import {TreeTableModule} from 'primeng/treetable';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import {DashboardDemoComponent} from './view/dashboarddemo.component';
import {FormLayoutDemoComponent} from './view/formlayoutdemo.component';
import {FloatLabelDemoComponent} from './view/floatlabeldemo.component';
import {InvalidStateDemoComponent} from './view/invalidstatedemo.component';
import {InputDemoComponent} from './view/inputdemo.component';
import {ButtonDemoComponent} from './view/buttondemo.component';
import {TableDemoComponent} from './view/tabledemo.component';
import {ListDemoComponent} from './view/listdemo.component';
import {TreeDemoComponent} from './view/treedemo.component';
import {PanelsDemoComponent} from './view/panelsdemo.component';
import {OverlaysDemoComponent} from './view/overlaysdemo.component';
import {MediaDemoComponent} from './view/mediademo.component';
import {MenusDemoComponent} from './view/menusdemo.component';
import {MessagesDemoComponent} from './view/messagesdemo.component';
import {MiscDemoComponent} from './view/miscdemo.component';
import {ChartsDemoComponent} from './view/chartsdemo.component';
import {EmptyDemoComponent} from './view/emptydemo.component';
import {FileDemoComponent} from './view/filedemo.component';
import {DocumentationComponent} from './view/documentation.component';
import {DisplayComponent} from '../utilities/display.component';
import {ElevationComponent} from '../utilities/elevation.component';
import {FlexboxComponent} from '../utilities/flexbox.component';
import {GridComponent} from '../utilities/grid.component';
import {IconsComponent} from '../utilities/icons.component';
import {WidgetsComponent} from '../utilities/widgets.component';
import {SpacingComponent} from '../utilities/spacing.component';
import {TypographyComponent} from '../utilities/typography.component';
import {TextComponent} from '../utilities/text.component';
import {AppCrudComponent} from '../pages/app.crud.component';
import {AppCalendarComponent} from '../pages/app.calendar.component';
import {AppTimelineDemoComponent} from '../pages/app.timelinedemo.component';
import {AppLoginComponent} from '../pages/app.login.component';
import {AppInvoiceComponent} from '../pages/app.invoice.component';
import {AppHelpComponent} from '../pages/app.help.component';
import {AppNotfoundComponent} from '../pages/app.notfound.component';
import {AppErrorComponent} from '../pages/app.error.component';
import {AppAccessdeniedComponent} from '../pages/app.accessdenied.component';
import {CountryService} from './service/countryservice';
import {CustomerService} from './service/customerservice';
import {EventService} from './service/eventservice';
import {IconService} from './service/iconservice';
import {NodeService} from './service/nodeservice';
import {PhotoService} from './service/photoservice';
import {ProductService} from './service/productservice';

@NgModule({
    imports: [

    ],
    exports: [

    ],
    declarations: [

    ],
    providers: [

    ]
})
export class DemoModule { }
