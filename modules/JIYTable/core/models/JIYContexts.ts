/**
 * @author Jongil Yoon
 * @email jiysait@gmail.com
 * @create date 2021-07-16 16:41:56
 * @modify date 2021-07-16 16:41:56
 * @desc [description]
 */

import { Dispatch, SetStateAction } from "react";
import { SemanticCOLORS, SemanticSIZES } from "semantic-ui-react";

export interface JIYURLContext {
  api: string;
  uri: string;
  url: string;
}

export type JIYHeaderDisplay = "visible" | "hidden" | "none";

export interface JIYHeaderContext {
  name: string;
  value: string;
  alias: string;
  display: JIYHeaderDisplay;
  primary: boolean;
}

export interface JIYRecordContext<T> {
  objType: string;
  dynamicColumns: boolean;
  isSelected: boolean;
  data: T;
}

export interface JIYTabularDataContext<T> {
  headers: Array<JIYHeaderContext>;
  records: Array<JIYRecordContext<T>>;
}

export interface JIYTableStateContext<T, R> {
  title: string;
  path: string;
  url: JIYURLContext;
  prev: string;
  next: string;
  total: number;
  page: number;
  pageSize: number;
  query: string;
  search: string;
  ordering: JIYOrderingContext;
  headers: Array<JIYHeaderContext>;
  records: Array<JIYRecordContext<T>>;
  legend: JIYTableLegendContext;
  isLoading: boolean;
  isRefreshing: boolean;
  invertSelection: boolean;
  excludedItems: Array<JIYRecordContext<T>>;
  setPage: Dispatch<SetStateAction<number>>;
  setPageSize: Dispatch<SetStateAction<number>>;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setOrdering: Dispatch<SetStateAction<JIYOrderingContext>>;
  setHeaders: Dispatch<SetStateAction<Array<JIYHeaderContext>>>;
  setRecords: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
  setLegend: Dispatch<SetStateAction<JIYTableLegendContext >>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setRefreshing: Dispatch<SetStateAction<boolean>>;
  setInvertSelection: Dispatch<SetStateAction<boolean>>;
  setExcludedItems: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
  // handler: (results: T[], invertSelection: boolean) => JIYTabularDataContext<R>;
  handler: (
    results: any[],
    invertSelection: boolean
  ) => JIYTabularDataContext<R>;
}

export interface JIYCellRowContext<T> {
  primaryField: JIYHeaderContext;
  path: string;
  invertSelection: boolean;
  excludedItems: Array<JIYRecordContext<T>>;
  headers: Array<JIYHeaderContext>;
  records: Array<JIYRecordContext<T>>;
  record: JIYRecordContext<T>;
  index: number;
  setRecords: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
  setInvertSelection: Dispatch<SetStateAction<boolean>>;
  setExcludedItems: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
}

export interface JIYCellHeadingContext<T> {
  invertSelection: boolean;
  excludedItems: Array<JIYRecordContext<T>>;
  record: JIYRecordContext<T>;
  records: Array<JIYRecordContext<T>>;
  index: number;
  setRecords: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
  setInvertSelection: Dispatch<SetStateAction<boolean>>;
  setExcludedItems: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
}

export interface JIYTableHeaderContext<T> {
  headers: Array<JIYHeaderContext>;
  records: Array<JIYRecordContext<T>>;
  ordering: JIYOrderingContext;
  invertSelection: boolean;
  excludedItems: Array<JIYRecordContext<T>>;
  setHeaders: Dispatch<SetStateAction<Array<JIYHeaderContext>>>;
  setRecords: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
  setOrdering: Dispatch<SetStateAction<JIYOrderingContext>>;
  setInvertSelection: Dispatch<SetStateAction<boolean>>;
  setExcludedItems: Dispatch<SetStateAction<Array<JIYRecordContext<T>>>>;
}

export interface JIYTableStandaloneContext<T> {
  title: string;
  url: JIYURLContext;
  path: string;
  module: string;
  handler: (x: Array<T>) => JIYTabularDataContext<T>;
}

export interface JIYTableStandaloneVizViewContext {
  module: string;
}

export interface JIYOrderingContext {
  column?: string;
  direction?: "ascending" | "descending";
}

export interface VizViewContext {
  module: string;
  query: string;
  wideView: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  setWideView: Dispatch<SetStateAction<boolean>>;
}

export interface JIYInteractiveSideMenuContext {
  currentTab: string;
  query: string;
  search: string;
  wideView: boolean;
  isTabChange: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setWideView: Dispatch<SetStateAction<boolean>>;
  setTabChange: Dispatch<SetStateAction<boolean>>;
}

export interface JIYSharedStateLayoutContext {
  query: string;
  search: string;
  isTabChange: boolean;
  setQuery: Dispatch<SetStateAction<string>>;
  setSearch: Dispatch<SetStateAction<string>>;
  setTabChange: Dispatch<SetStateAction<boolean>>;
}

/* export interface JIYTableLegendContext {
  colors: Array<SemanticCOLORS>;
  texts: Array<string>;
  sizes: Array<SemanticSIZES>;
  
  setColors: Dispatch<SetStateAction<Array<SemanticCOLORS>>>;
  setTexts: Dispatch<SetStateAction<Array<string>>>;
  setSizes: Dispatch<SetStateAction<SemanticSIZES>>;
} */
export interface JIYTableLegendContext {
  colors: Array<string>;
  texts: Array<string>;
  sizes: Array<string>;
  
  setColors: Dispatch<SetStateAction<Array<string>>>;
  setTexts: Dispatch<SetStateAction<Array<string>>>;
  setSizes: Dispatch<SetStateAction<string>>;
}

export interface JIYRange {
  name: string;
  from: number;
  to: number;
  min: number;
  max: number;
  setName: Dispatch<SetStateAction<string>>;
  setFrom: Dispatch<SetStateAction<number>>;
  setTo: Dispatch<SetStateAction<number>>;
  setMin: Dispatch<SetStateAction<number>>;
  set: Dispatch<SetStateAction<number>>;
}

export interface JIYBpRange {
  name: string;
  from: number;
  to: number;
  min: number;
  max: number;
  from_unit: string;
  to_unit: string;
  setName: Dispatch<SetStateAction<string>>;
  setFrom: Dispatch<SetStateAction<number>>;
  setTo: Dispatch<SetStateAction<number>>;
  setMin: Dispatch<SetStateAction<number>>;
  set: Dispatch<SetStateAction<number>>;
}