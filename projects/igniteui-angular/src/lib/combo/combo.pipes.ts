import { forwardRef, Inject, Pipe, PipeTransform } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';
import { cloneArray } from '../core/utils';
import { DataUtil } from '../data-operations/data-util';
import { FilteringLogic, IFilteringExpression } from '../data-operations/filtering-expression.interface';
import { ISortingExpression } from '../data-operations/sorting-expression.interface';
import { ISortingStrategy } from '../data-operations/sorting-strategy';
import { IgxComboComponent } from './combo.component';

@Pipe({
    name: 'comboFiltering',
    pure: true
})
export class IgxComboFilteringPipe implements PipeTransform {

    constructor(
        @Inject(forwardRef(() => IgxComboComponent))
        public combo: IgxComboComponent
    ) { }

    public transform(collection: any[], expressions: IFilteringExpression | IFilteringExpression[],
                     logic: FilteringLogic) {
        const state = { expressions: [], logic };
        state.expressions = this.combo.filteringExpressions;

        if (!state.expressions.length) {
            return collection;
        }

        const result = DataUtil.filter(cloneArray(collection), state);
        this.combo.filteredData = result;
        return result;
    }
}

@Pipe({
    name: 'comboSorting',
    pure: true
})
export class IgxComboSortingPipe implements PipeTransform {
    constructor(
        @Inject(forwardRef(() => IgxComboComponent))
        public combo: IgxComboComponent
    ) { }

    public transform(collection: any[], expression: ISortingExpression | ISortingExpression[]) {
        const state = { expressions: [] };
        state.expressions = this.combo.sortingExpressions;

        if (!state.expressions.length) {
            return collection;
        }
        const result = DataUtil.sort(cloneArray(collection), state);
        this.combo.filteredData = result;
        return result;
    }
}
@Pipe({
    name: 'comboGrouping',
    pure: true
})
export class IgxComboGroupingPipe implements PipeTransform {

    constructor(
        @Inject(forwardRef(() => IgxComboComponent))
        public combo: IgxComboComponent
    ) { }

    public transform(collection: any[], groupKey: any) {
        if (!groupKey && groupKey !== 0) {
            return collection;
        }
        if (!collection.length) {
            return collection;
        }
        const data = cloneArray(collection);
        let inserts = 0;
        let currentHeader = null;
        for (let i = 0; i < collection.length; i++) {
            let insertFlag = 0;
            if (!collection[i][groupKey] && currentHeader !== this.combo.defaultFallbackGroup) {
                currentHeader = this.combo.defaultFallbackGroup;
                insertFlag = 1;
            } else if (currentHeader !== collection[i][groupKey]) {
                currentHeader = collection[i][groupKey];
                insertFlag = 1;
            }
            if (insertFlag) {
                data.splice(i + inserts, 0, {
                    [this.combo.valueKey]: currentHeader,
                    [this.combo.groupKey]: currentHeader,
                    isHeader: true
                });
                inserts++;
            }
        }
        return data;
    }
}

@Pipe({
    name: 'filterCondition',
    pure: true
})

export class IgxComboFilterConditionPipe implements PipeTransform {

    public transform(value: string): string {
        return value.split(/(?=[A-Z])/).join(' ');
    }
}
