import { ns_arr, numx, nsx, locParamArr, SeriesInitOptions, SeriesRankOptions } from './interfaces';
import Index from './Index';
declare class Series<T> {
    values: T[];
    _index: Index;
    shape: number;
    name: string | number;
    constructor(values: T[]);
    constructor(values: T[], options: SeriesInitOptions);
    get index(): Index;
    set index(vals: ns_arr | Index);
    p(): void;
    _iloc(idx: number): T;
    _iloc(idx: undefined | number[] | boolean[]): Series<T>;
    iloc(idx: number): T;
    iloc(idx?: string | number[] | boolean[]): Series<T>;
    loc(index: number | string): T | Series<T>;
    loc(index?: locParamArr): Series<T>;
    _iset(idx: undefined | numx | boolean[], values: T | T[]): void;
    iset(rpl: T[]): void;
    iset(index: number, rpl: T): void;
    iset(index: string | number[] | boolean[], rpl: T[]): void;
    set(rpl: T[]): void;
    set(idx: string | number, rpl: T | T[]): void;
    set(idx: locParamArr, rpl: T[]): void;
    push(val: T, name?: number | string): void;
    insert(idx: number, val: T, name?: number | string): void;
    drop(labels: nsx): Series<T>;
    b(expr: string): boolean[];
    q(expr: string): Series<T>;
    sort_values(ascending?: boolean): Series<T>;
    value_counts(): Series<number>;
    op(opStr: string): Series<T>;
    op(opStr: string, ss: Series<T> | T[]): Series<T>;
    unique(): T[];
    rank(options?: SeriesRankOptions): Series<number>;
    min(): number | undefined;
    max(): number | undefined;
    sum(): number;
    mean(): number | undefined;
    mode(): number;
    median(): number | undefined;
    std(): number | undefined;
    var(): number | undefined;
}
export default Series;
