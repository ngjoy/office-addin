export const DataSignificanceIndex = 1;
export const DataLimitIndex = 501;
export const MaxExportCount = DataLimitIndex - DataSignificanceIndex;

export type Column =
  | 'Year'
  | 'Make'
  | 'Model'
  | 'Style'
  | 'UVC'
  | 'Stock'
  | 'VIN';
export type CellBorderEdge =
  | 'EdgeTop'
  | 'EdgeBottom'
  | 'EdgeLeft'
  | 'EdgeRight';

export const ColumNames: Record<Column, Column> = {
  Year: 'Year',
  Make: 'Make',
  Model: 'Model',
  Style: 'Style',
  UVC: 'UVC',
  Stock: 'Stock',
  VIN: 'VIN',
};

export const ColumnKeys: Record<Column, number> = {
  Year: 0,
  Make: 1,
  Model: 2,
  Style: 3,
  UVC: 4,
  Stock: 5,
  VIN: 6,
};

export const ColumnIndexes: Record<number, Column> = {
  0: 'Year',
  1: 'Make',
  2: 'Model',
  3: 'Style',
  4: 'UVC',
  5: 'Stock',
  6: 'VIN',
};

export const WorkbookNameIndex: Record<Column, string> = {
  Year: 'A',
  Make: 'B',
  Model: 'C',
  Style: 'D',
  UVC: 'E',
  Stock: 'F',
  VIN: 'G',
};

export const CellEdgeList: CellBorderEdge[] = [
  'EdgeTop',
  'EdgeBottom',
  'EdgeLeft',
  'EdgeRight',
];
