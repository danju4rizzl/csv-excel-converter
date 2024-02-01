# NodeJS CSV to Excel Converter 🔄

This Node.js application converts CSV files into Excel files, making it easier to work with data across different formats. Utilizing the `csv-parser` and `exceljs` modules, it reads a specified CSV file and generates an Excel file with the same data structure.

## Getting Started 🚀

To get started with this application, ensure you have Node.js installed on your system. Then, follow these steps:

1. Clone this repository or download the source code.
2. Navigate to the project directory and install the dependencies:

```bash
 pnpm install
```

3. Place your CSV file in the project directory and name it `results.csv` (or update the `inputFile` variable in `index.js` to match your file's name).

4. Run the application using the start script defined in `package.json`:

```bash
pnpm start
```

This command will generate an Excel file named `scraped-data.xlsx` in the project directory.

## How It Works 🧩

The application reads the CSV file using the `csv-parser` module and streams the data row by row. For each row, it adds the data to a new row in an Excel sheet using the `exceljs` module. The column headers in the Excel file are defined to match those in the CSV file.

Here's a simplified overview of the process:

1. **Read the CSV File**: The application creates a read stream for the CSV file.

```javascript
fs.createReadStream(inputFile).pipe(csv())
```

2. **Process Each Row**: As each row is read, it's added to the Excel sheet.

```javascript

.on('data', (row) => { worksheet.addRow(row) })
```

3. **Generate the Excel File**: Once all rows have been processed, the Excel file is written to the disk.

```javascript
 .on('end', () => { workbook.xlsx.writeFile(outputFile) })
```

## Example 📝

Given a CSV file `results.csv` with the following content:

| id               | company      | phone      |
| ---------------- | ------------ | ---------- |
| a0fefb40-cf6-... | Acme Cars    | 0369258147 |
| b5jefb40-cf6-... | Acme Estates | 0741852963 |
| c3gefb40-cf6-... | Acme Airline | 0654789321 |

Running the application will generate an Excel file `results.xlsx` containing the same data in a worksheet named "Sheet 1".

## Contributing 🤝

Contributions to improve the application are welcome. Please feel free to fork the repository, make your changes, and submit a pull request
