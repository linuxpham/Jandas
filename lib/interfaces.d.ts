import Series from './Series';
import Index from './Index';
type ns_arr = (number | string)[];
type numx = number | number[];
type nsx = number | string | ns_arr;
type locParamArr = ns_arr | Series<number | string> | boolean[] | Series<boolean> | Index;
type locParam = number | string | locParamArr;
interface Obj<T> {
    [key: number | string]: T;
}
interface GP {
    [key: string]: number[];
}
interface SeriesInitOptions {
    name?: string | number;
    index?: ns_arr | Index;
}
interface DataFrameInitOptions {
    index?: Index | ns_arr;
}
interface DataFrameArrInitOptions extends DataFrameInitOptions {
    columns?: Index | ns_arr;
}
interface PushOptions {
    name?: number | string;
    axis?: 0 | 1;
}
interface SortOptions {
    ascending?: boolean;
    axis?: 0 | 1;
}
interface MergeOptions {
    on?: number | string | undefined;
    axis?: 0 | 1;
}
interface SeriesRankOptions {
    method?: 'average' | 'min' | 'max' | 'ordinal' | 'dense';
    missing?: 'last' | 'first' | 'remove';
    encoding?: (string | number | null | undefined)[];
}
export { ns_arr, numx, nsx, locParamArr, locParam, Obj, GP, SeriesInitOptions, DataFrameInitOptions, DataFrameArrInitOptions, SortOptions, PushOptions, MergeOptions, SeriesRankOptions };
