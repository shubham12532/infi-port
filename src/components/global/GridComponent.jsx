import React, { useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const GridComponent = ({ columnDefs, rowData }) => {
  const gridApi = useRef(null);

  const gridOptions = {
    enableColResize: true,
    enableColReorder: true,
    sideButtons: [
      {
        // Show/Hide Columns button in the tool panel
        id: 'columns',
        iconKey: 'columns',
        tooltipText: 'Show/Hide Columns',
        onButtonClick: () => {
          // Show/hide columns logic
          gridApi.current.showColumnPanel();
        },
      },
    ],
  };
  

  const onGridReady = params => {
    gridApi.current = params.api;
    // Auto-size columns once the grid is ready
    autoSizeAll();
  };

  const autoSizeAll = () => {
    // Get all column IDs
    const allColumnIds = gridApi.current
      .getColumnDefs()
      .map(column => column.field);

    // Auto-size all columns
    gridApi.current.autoSizeColumns(allColumnIds);
  };

  

  
  const getRowHeight = params => {
    // Example: Set a minimum row height of 50 and double the height for rows with 'important' data
    return params.data.important ? 2 * 30 : 30;
  };

  return (
    <div className="ag-theme-alpine" style={{ height: '400px', width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        onGridReady={onGridReady}
        getRowHeight={getRowHeight}
        gridOptions={gridOptions}
      />
    </div>
  );
};

export default GridComponent;
