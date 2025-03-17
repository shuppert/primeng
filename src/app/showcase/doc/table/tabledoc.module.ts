import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from '@shuppert/primeng/button';
import { CalendarModule } from '@shuppert/primeng/calendar';
import { ConfirmDialogModule } from '@shuppert/primeng/confirmdialog';
import { ContextMenuModule } from '@shuppert/primeng/contextmenu';
import { DialogModule } from '@shuppert/primeng/dialog';
import { DropdownModule } from '@shuppert/primeng/dropdown';
import { FileUploadModule } from '@shuppert/primeng/fileupload';
import { SelectButtonModule } from '@shuppert/primeng/selectbutton';
import { InputSwitchModule } from '@shuppert/primeng/inputswitch';
import { InputNumberModule } from '@shuppert/primeng/inputnumber';
import { InputTextModule } from '@shuppert/primeng/inputtext';
import { InputTextareaModule } from '@shuppert/primeng/inputtextarea';
import { MultiSelectModule } from '@shuppert/primeng/multiselect';
import { ProgressBarModule } from '@shuppert/primeng/progressbar';
import { RadioButtonModule } from '@shuppert/primeng/radiobutton';
import { RatingModule } from '@shuppert/primeng/rating';
import { SkeletonModule } from '@shuppert/primeng/skeleton';
import { SliderModule } from '@shuppert/primeng/slider';
import { TableModule } from '@shuppert/primeng/table';
import { TabViewModule } from '@shuppert/primeng/tabview';
import { TagModule } from '@shuppert/primeng/tag';
import { ToastModule } from '@shuppert/primeng/toast';
import { ToggleButtonModule } from '@shuppert/primeng/togglebutton';
import { ToolbarModule } from '@shuppert/primeng/toolbar';
import { TooltipModule } from '@shuppert/primeng/tooltip';
import { AppCodeModule } from 'src/app/showcase/layout/doc/app.code.component';
import { AppDocModule } from '@layout/doc/app.doc.module';
import { IconFieldModule } from '@shuppert/primeng/iconfield';
import { InputIconModule } from '@shuppert/primeng/inputicon';
import { ContextMenuDoc } from './contextmenudoc';
import { BasicDoc } from './basicdoc';
import { CellEditDoc } from './celleditdoc';
import { CheckboxSelectionDoc } from './checkboxselectiondoc';
import { ColumnGroupDoc } from './columngroupdoc';
import { ColumnResizeExpandModeDoc } from './columnresizeexpandmodedoc';
import { ColumnResizeScrollableModeDoc } from './columnresizescrollablemodedoc';
import { ColumnSelectionDoc } from './columnselectiondoc';
import { ColumnToggleDoc } from './columntoggledoc';
import { ControlledSelectionDoc } from './controlledselectiondoc';
import { CustomersDoc } from './customersdoc';
import { CustomSortDoc } from './customsortdoc';
import { DynamicDoc } from './dynamicdoc';
import { ExpandableRowGroupDoc } from './expandablerowgroupdoc';
import { ExportDoc } from './exportdoc';
import { FilterBasicDoc } from './filterbasic';
import { FlexibleScrollDoc } from './flexiblescrolldoc';
import { FrozenColumnsDoc } from './frozencolumnsdoc';
import { FrozenRowsDoc } from './frozenrowsdoc';
import { GridlinesDoc } from './gridlinesdoc';
import { ImportDoc } from './importdoc';
import { HorizontalScrollDoc } from './horizontalscrolldoc';
import { LazyLoadDoc } from './lazyloaddoc';
import { MultipleSelectionDoc } from './multipleselectiondoc';
import { PageOnlySelectionDoc } from './pageonlyselectiondoc';
import { PaginatorBasicDoc } from './paginatorbasicdoc';
import { PaginatorProgrammaticDoc } from './paginatorprogrammaticdoc';
import { ProductsDoc } from './productsdoc';
import { RadioButtonSelectionDoc } from './radiobuttonselectiondoc';
import { ReorderDoc } from './reorderdoc';
import { ResponsiveScrollDoc } from './responsivescrolldoc';
import { ResponsiveStackDoc } from './responsivestackdoc';
import { RowEditDoc } from './roweditdoc';
import { RowspanGroupingDoc } from './rowspangroupingdoc';
import { SingleColumnSortDoc } from './singlecolumnsortdoc';
import { MultipleColumnsSortDoc } from './multiplecolumnssortdoc';
import { SingleSelectionDoc } from './singleselectiondoc';
import { SizeDoc } from './sizedoc';
import { StatefulDoc } from './statefuldoc';
import { StripedDoc } from './stripeddoc';
import { StyleDoc } from './styledoc';
import { SubheaderGroupingDoc } from './subheadergroupingdoc';
import { TemplateDoc } from './templatedoc';
import { VerticalScrollDoc } from './verticalscrolldoc';
import { VirtualScrollDoc } from './virtualscrolldoc';
import { VirtualScrollLazyDoc } from './virtualscrolllazydoc';
import { ColumnResizeFitModeDoc } from './columnresizefitmodedoc';
import { StylingDoc } from './stylingdoc';
import { SelectionEventsDoc } from './selectioneventsdoc';
import { AccessibilityDoc } from './accessibilitydoc';
import { PaginatorLocaleDoc } from './paginatorlocaledoc';
import { DeferredDemo } from '../../demo/deferreddemo';
import { PreSortDoc } from './presortdoc';
import { RowExpansionDoc } from './rowexpansiondoc';
import { FilterSortEditDoc } from './filtersorteditdoc';
import { RemovableSortDoc } from './removablesortdoc';
import { FilterAdvancedDoc } from './filteradvanceddoc';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        TableModule,
        CalendarModule,
        SliderModule,
        DialogModule,
        ConfirmDialogModule,
        MultiSelectModule,
        ContextMenuModule,
        DropdownModule,
        ButtonModule,
        TagModule,
        ToastModule,
        InputTextModule,
        InputSwitchModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        SelectButtonModule,
        AppCodeModule,
        AppDocModule,
        DeferredDemo,
        IconFieldModule,
        InputIconModule
    ],
    declarations: [
        ImportDoc,
        BasicDoc,
        DynamicDoc,
        CellEditDoc,
        CheckboxSelectionDoc,
        ColumnGroupDoc,
        ColumnResizeExpandModeDoc,
        ColumnResizeScrollableModeDoc,
        ColumnResizeFitModeDoc,
        ColumnSelectionDoc,
        ColumnToggleDoc,
        ContextMenuDoc,
        ControlledSelectionDoc,
        CustomersDoc,
        CustomSortDoc,
        DynamicDoc,
        ExpandableRowGroupDoc,
        ExportDoc,
        FilterBasicDoc,
        FilterAdvancedDoc,
        FlexibleScrollDoc,
        FrozenColumnsDoc,
        FrozenRowsDoc,
        GridlinesDoc,
        HorizontalScrollDoc,
        LazyLoadDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorBasicDoc,
        MultipleSelectionDoc,
        PageOnlySelectionDoc,
        PaginatorProgrammaticDoc,
        ProductsDoc,
        RadioButtonSelectionDoc,
        ReorderDoc,
        ResponsiveScrollDoc,
        ResponsiveStackDoc,
        RowEditDoc,
        FilterSortEditDoc,
        RowExpansionDoc,
        RowspanGroupingDoc,
        SingleColumnSortDoc,
        MultipleColumnsSortDoc,
        SingleSelectionDoc,
        SizeDoc,
        StatefulDoc,
        StripedDoc,
        StyleDoc,
        SubheaderGroupingDoc,
        TemplateDoc,
        VerticalScrollDoc,
        VirtualScrollDoc,
        VirtualScrollLazyDoc,
        StylingDoc,
        SelectionEventsDoc,
        AccessibilityDoc,
        PaginatorLocaleDoc,
        PreSortDoc,
        RemovableSortDoc
    ],
    exports: [AppDocModule]
})
export class TableDocModule {}
