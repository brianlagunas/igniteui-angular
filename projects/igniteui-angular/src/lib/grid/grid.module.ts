import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IgxCheckboxModule } from '../checkbox/checkbox.component';
import { IgxSelectionAPIService } from '../core/selection';
import { IgxDatePickerModule } from '../date-picker/date-picker.component';
import { IgxButtonModule } from '../directives/button/button.directive';
import { IgxFocusModule } from '../directives/focus/focus.directive';
import { IgxForOfModule } from '../directives/for-of/for_of.directive';
import { IgxRippleModule } from '../directives/ripple/ripple.directive';
import { IgxTextHighlightModule } from '../directives/text-highlight/text-highlight.directive';
import { IgxTextSelectionModule } from '../directives/text-selection/text-selection.directive';
import { IgxToggleModule } from '../directives/toggle/toggle.directive';
import { IgxDropDownModule } from '../drop-down/drop-down.component';
import { IgxIconModule } from '../icon/index';
import { IgxInputGroupModule } from '../input-group/input-group.component';
import { IgxGridAPIService } from './api.service';
import { IgxGridCellComponent } from './cell.component';
import { IgxColumnComponent, IgxColumnGroupComponent } from './column.component';
import { IgxColumnHidingModule } from './column-hiding.component';
import { IgxGridFilterComponent } from './grid-filtering.component';
import { IgxGridHeaderComponent } from './grid-header.component';
import { IgxGridSummaryComponent } from './grid-summary.component';
import { IgxGridToolbarComponent } from './grid-toolbar.component';
import {
    IgxCellEditorTemplateDirective,
    IgxCellFooterTemplateDirective,
    IgxCellHeaderTemplateDirective,
    IgxCellTemplateDirective,
    IgxColumnResizerDirective,
    IgxColumnMovingDragDirective,
    IgxColumnMovingDropDirective,
    IgxColumnMovingService
} from './grid.common';
import { IgxGridComponent } from './grid.component';
import { IgxGridFilterConditionPipe, IgxGridFilteringPipe, IgxGridPagingPipe, IgxGridSortingPipe } from './grid.pipes';
import { IgxGridRowComponent } from './row.component';
import { IgxGridFilterExpressionComponent } from './grid-filtering-expression.component';
import { IgxButtonGroupModule } from '../buttonGroup/buttonGroup.component';

@NgModule({
  declarations: [
    IgxGridCellComponent,
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridComponent,
    IgxGridRowComponent,
    IgxGridHeaderComponent,
    IgxGridSummaryComponent,
    IgxGridToolbarComponent,
    IgxCellFooterTemplateDirective,
    IgxCellHeaderTemplateDirective,
    IgxCellEditorTemplateDirective,
    IgxCellTemplateDirective,
    IgxColumnResizerDirective,
    IgxColumnMovingDragDirective,
    IgxColumnMovingDropDirective,
    IgxGridFilterComponent,
    IgxGridSortingPipe,
    IgxGridPagingPipe,
    IgxGridFilteringPipe,
    IgxGridFilterConditionPipe,
    IgxGridFilterExpressionComponent
  ],
  entryComponents: [
    IgxColumnComponent,
    IgxColumnGroupComponent,
  ],
  exports: [
    IgxGridComponent,
    IgxGridCellComponent,
    IgxGridRowComponent,
    IgxColumnComponent,
    IgxColumnGroupComponent,
    IgxGridHeaderComponent,
    IgxGridFilterComponent,
    IgxGridSummaryComponent,
    IgxGridToolbarComponent,
    IgxCellFooterTemplateDirective,
    IgxCellHeaderTemplateDirective,
    IgxCellEditorTemplateDirective,
    IgxCellTemplateDirective,
    IgxColumnResizerDirective,
    IgxColumnMovingDragDirective,
    IgxColumnMovingDropDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    IgxButtonModule,
    IgxDatePickerModule,
    IgxIconModule,
    IgxRippleModule,
    IgxInputGroupModule,
    IgxToggleModule,
    IgxForOfModule,
    IgxFocusModule,
    IgxTextHighlightModule,
    IgxTextSelectionModule,
    IgxCheckboxModule,
    IgxColumnHidingModule,
    IgxDropDownModule,
    IgxButtonGroupModule
  ],
  providers: [IgxGridAPIService, IgxSelectionAPIService, IgxColumnMovingService]
})
export class IgxGridModule {
    public static forRoot() {
        return {
            ngModule: IgxGridModule,
            providers: [IgxGridAPIService, IgxSelectionAPIService, IgxColumnMovingService]
        };
    }
}
