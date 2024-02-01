import fs from 'fs'
import csv from 'csv-parser'
import ExcelJs from 'exceljs'

// The input file name MUST be a CSV and is required (ALWAYS add extension to file name.csv)
const inputFile = 'results.csv'

// The output file name MUST be a xlsx file and is required (ALWAYS add extension to file name.csv)
const outputFile = 'results.xlsx'

// Create a new workbook and add a worksheet to it
const workbook = new ExcelJs.Workbook()
const worksheet = workbook.addWorksheet('Sheet 1')

// Define the column headers based on the CSV structure
worksheet.columns = [
  { header: 'id', key: 'id', width: 30 },
  { header: 'company', key: 'company', width: 30 },
  { header: 'phone', key: 'phone', width: 20 }
]

// Read the CSV file and add rows to the worksheet based on the CSV structure
fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    // Add the row to the worksheet based on the CSV structure
    worksheet.addRow(row)
  })
  .on('end', () => {
    // Once all rows  have been read, write the workbook to the output file
    workbook.xlsx
      .writeFile(outputFile)
      .then(() => {
        console.log('🟢 Excel sheet generated successfully')
      })
      .catch((error) => {
        console.error('🔴 Error generating Excel sheet:', error)
      })
  })
