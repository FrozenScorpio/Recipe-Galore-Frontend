import React, { useEffect, useMemo, useState } from 'react';
import AxiosInstance from './Axios';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';

const Posts = () => {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get('project/').then((res) => {
      setMyData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const columns = useMemo(
    () => [
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'instructions',
        header: 'Instructions',
        size: 500,
      },
      {
        accessorKey: 'ingredients', //normal accessorKey
        header: 'Ingredients',
        size: 500,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    data: myData,
    columns,
  });

  return (
    <div>
      {loading ? <p>Loading data...</p> : <MaterialReactTable table={table} />}
    </div>
  );
};

export default Posts;
