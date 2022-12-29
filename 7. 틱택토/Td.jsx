import React, { useCallback, memo } from 'react';

const Td = memo(({ rowIndex, cellIndex, dispatch, cellData }) => {
  const onClickId = useCallback(() => {
    console.log(rowIndex, cellIndex);
    if (cellData) {
      return;
    }
    dispatch({ type: 'CLICK_CELL', row: rowIndex, cell: cellIndex });
  }, [cellData]);
  return <td onClick={onClickId}>{cellData}</td>;
});

export default Td;
