import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import { Columns } from "./columns";
import { DataSource } from "./datasource";
import Axios from "axios";
import { JobDepartmentTable } from "./jobstable.style";

const JobsTable = ({ departmentId, allJobs }) => {
  const [jobs, setJobs] = useState();
  useEffect(() => {
    // getData();
    console.log("lkajdskasjdsalkjd ", departmentId);

    console.log("akjsdhajsdd", jobs);
  }, []);
  const getData = async () => {
    await Axios.get(`http://localhost:2500/job/${departmentId}`).then((res) => {
      setJobs(
        res.data.data.map((row, key) => ({
          job_id: row.job_id,
          job_title: row.job_title,
          job_loc: row.job_loc,
          worktype_id: row.worktype_id,
          worktype: row.worktype,
          job_createdby: row.job_createdby,
          department_name: row.department_name,
        }))
      );
    });
  };

  return (
    <React.Fragment>
      <JobDepartmentTable
        className="table-settings"
        columns={Columns}
        dataSource={allJobs}
        pagination={false}
        onRow={(record) => ({
          onClick: (event) => {
            console.log("Row Selceted", record);
          },
        })}
      ></JobDepartmentTable>
    </React.Fragment>
  );
};

export default JobsTable;
