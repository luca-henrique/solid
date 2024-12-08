/*

  ## Interface Segregation Principle
    - Evitar que classes tenham que implementar metodos que não são necessarios
*/

// Errado
export interface IGenerateReport {
  generateExcel: () => void;
  generatePDF: () => void;
}

export interface IGenerateReportPdf {
  generatePDF: () => void;
}

export interface IGenerateReportExcel {
  generateExcel: () => void;
}
