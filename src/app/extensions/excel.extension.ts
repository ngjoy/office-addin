

declare global {

  namespace Excel {
    interface Range {
      doesNotHaveValue(): boolean;
      markAppearanceAsInvalid(): void;
    }
  }
 
}

export type CellBorderEdge = "EdgeTop" | "EdgeBottom" | "EdgeLeft" | "EdgeRight";
export const CellEdgeList: CellBorderEdge[] = ["EdgeTop", "EdgeBottom", "EdgeLeft", "EdgeRight"];

Excel.Range.prototype.doesNotHaveValue = function (): boolean {
  const context: Excel.Range = this;
  return !!!context.values[0][0];
}

Excel.Range.prototype.markAppearanceAsInvalid = function (): void {
  const context: Excel.Range = this;
  CellEdgeList.forEach(edge => {
    context.format.borders.getItem(edge).color = "red";
    context.format.borders.getItem(edge).style = "Dash";
  })
}

export { }
