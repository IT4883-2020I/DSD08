import React, { useEffect, useState } from "react";
import "../Styles/StyleListIncidents.css";
import { Table, Modal, Button } from "antd";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";

const ListReport = () => {
  const [dataReport, setDataReport] = useState([]);
  const [contentModal, setContentModal] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const { pathname } = useLocation();
  const codeIncidents = {
    CHAY_RUNG: { id: "222222", name: "Sự cố  cháy rừng" },
    DE_DIEU: { id: "111111", name: "Sự cố  đê điều" },
    CAY_TRONG: { id: "333333", name: "Sự cố  cây trồng" },
    LUOI_DIEN: { id: "000000", name: "Sự cố lưới điện trên cao" },
  };
  const API_TOKEN = "4c901bcdba9f440a2a7c31c0bcbd78ec";
  const CURRENT_TYPE = "LUOI_DIEN";
  const typeIncident = codeIncidents[CURRENT_TYPE];
  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_DOMAIN_API + "/report/listing",
      headers: {
        "api-token": API_TOKEN,
        "project-type": CURRENT_TYPE,
      },
    })
      .then(function (response) {
        //handle success
        setDataReport(response.data.list);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  }, []);

  const data = [
    {
      id: 1,
      employee_id: 100,
      task_id: 1,
      content: "Đã xử lý xong sự cố. Xin hãy xác nhận",
      status: "doing",
      type: "000000",
      created_at: null,
      updated_at: null,
    },
    {
      id: 2,
      employee_id: 100,
      task_id: 2,
      content: "Đã xử lý xong sự cố. Hãy kiểm tra",
      status: "done",
      type: "000000",
      created_at: null,
      updated_at: null,
    },
  ];

  const columns = [
    {
      title: "Mã nhân viên",
      dataIndex: "employee_id",
    },
    {
      title: "Mã công việc",
      dataIndex: "task_id",
    },
    {
      title: "Nội dung xử lý sự cố",
      dataIndex: "content",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      render: (text, record) =>
        record.status == "waiting" ? (
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: "red",
                borderRadius: 5,
              }}
            ></div>
            <p style={{ marginLeft: 10, fontSize: 18, marginTop: 10 }}>
              {" "}
              {record.status}
            </p>
          </div>
        ) : record.status == "doing" ? (
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: "orange",
                borderRadius: 5,
              }}
            ></div>
            <p style={{ marginLeft: 10, fontSize: 18, marginTop: 10 }}>
              {" "}
              {record.status}
            </p>
          </div>
        ) : (
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                backgroundColor: "greenyellow",
                borderRadius: 5,
              }}
            ></div>
            <p style={{ marginLeft: 10, fontSize: 18, marginTop: 10 }}>
              {" "}
              {"done"}
            </p>
          </div>
        ),
    },
    {
      title: "Loại sự cố",
      dataIndex: "type",
      render: (text, record) => <p>{codeIncidents[record.type].name}</p>,
    },
    {
      title: "Khởi tạo",
      dataIndex: "created_at",
    },
    {
      title: "Cập nhật lần cuối",
      dataIndex: "updated_at",
    },
  ];
  return (
    <div>
      <div className="header" onClick={() => {}}>
        Danh sách báo cáo kết quả xử lý sự cố
      </div>
      <div>
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={dataReport}
          size="middle"
        />
      </div>
    </div>
  );
};

export default ListReport;
