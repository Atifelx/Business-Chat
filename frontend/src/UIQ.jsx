import React from 'react';

const StudentTable = () => {
  return (
    <div className="container mx-auto p-6">

      <p className="text-xl font-semibold mb-4">
        The students database contains detailed information about students. It includes their unique identifiers, academic performance, and personal details.
        SELECT column_name, data_type
FROM information_schema.columns
WHERE table_name = 'students';
      </p>
   
      <table className="min-w-full table-auto border-collapse ">
        <thead>
          <tr className="bg-gray-100">
            <th className="table-header">ID</th>
            <th className="table-header">Roll No</th>
            <th className="table-header">Science Subjects</th>
            <th className="table-header">Gender</th>
            <th className="table-header">Locations</th>
            <th className="table-header">University</th>
            <th className="table-header">Student Name</th>
            <th className="table-header">Country</th>
            
          </tr>
        </thead>
        
        <tbody>
          {/* Add your table rows here */}
        </tbody>
      </table>
      <p>SELECT * FROM students;
            </p>
            <p>SELECT 
    cols.table_schema, 
    cols.table_name, 
    cols.column_name, 
    cols.data_type
FROM 
    information_schema.columns cols
JOIN 
    information_schema.tables tabs
ON 
    cols.table_schema = tabs.table_schema
    AND cols.table_name = tabs.table_name
WHERE 
    tabs.table_type = 'BASE TABLE'
    AND tabs.table_schema NOT IN ('pg_catalog', 'information_schema')
ORDER BY 
    cols.table_schema, 
    cols.table_name, 
    cols.column_name;</p>
    </div>
  );
};  

export default StudentTable;
