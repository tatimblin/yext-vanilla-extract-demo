import React, { useState } from 'react';
import { Button } from '../my-library';

interface IProps {
  onChange: any
}

const SearchForm: React.FC<IProps> = ({
  onChange
}) => {

  return (
    <form onSubmit={onChange}>
      <input
        className="border rounded-sm p-1 bg-gray-50"
        type="text"
        onChange={onChange}
        name="query"
      />
      <Button />
    </form>
  )
}

export default SearchForm;