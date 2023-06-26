import React from 'react';
import { ErrandsTable } from './ErrandTable';
import { useSelector } from 'react-redux';
import { RootState } from '../store';

export const ErrandsList: React.FC = () => {
  const errands = useSelector((state: RootState) => state.errands);

  return (
    <React.Fragment>
      <ErrandsTable errands={errands} />
    </React.Fragment>
  );
};
