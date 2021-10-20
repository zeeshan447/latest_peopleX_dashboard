import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import { Table } from "antd";
import "./editusertable.css";
import Axios from "axios";
import { Columns, DataSource } from "./editusertablecolumns";

const EditUserTable = () => {
  const [loading, setLoading] = useState(true);
  const [getUsers, setGetUsers] = useState([]);

  useEffect(() => {
    getData();
    const response = Axios.get("http://localhost:2500/user");
    console.log("response", response);
  }, []);

  const getData = async () => {
    await Axios.get("http://localhost:2500/user").then((res) => {
      setLoading(false);
      setGetUsers(
        res.data.data.map((row, key) => ({
          key: row.user_id,
          user_name: row.user_name,
          email: row.email,
          role_name: row.role_name,
        }))
      );
    });
  };

  console.log("users", getUsers);

  return (
    <div>
      <Table
        className="table-settings"
        columns={Columns}
        ellipsize={true}
        dataSource={getUsers}
        pagination={false}
        onRow={(record) => ({
          onClick: (event) => {
            console.log("Row Selceted", record);
          },
        })}
      ></Table>
    </div>
  );
};

export default EditUserTable;
