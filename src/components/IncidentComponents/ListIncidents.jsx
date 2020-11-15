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

const ListIncidents = () => {
  const [dataIncidents, setDataIncidents] = useState([]);
  const [contentModal, setContentModal] = useState(null);
  const [visibleModal, setVisibleModal] = useState(false);
  const { pathname } = useLocation();
  const codeIncidents = {
    fire: "222222",
    dike: "111111",
    tree: "333333",
    highVoltageGrid: "000000",
  };
  useEffect(() => {
    const currentType = `${pathname.split(/[/,/]+/)[1]}`;
    const codeType = codeIncidents[currentType];
    axios({
      method: "get",
      url: process.env.REACT_APP_DOMAIN_API + "/task/listing",
      params: { id: codeType },
    })
      .then(function (response) {
        //handle success
        setDataIncidents(response.data.data[0].tasks);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  }, []);

  const data = [
    {
      id: 3,
      name: "Sự cố lưới điện ZZZ 5008",
      type: "000000",
      captain_id: null,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: null,
      priority: null,
      created_at: "2020-11-15 17:57:46",
      updated_at: "2020-11-15 17:57:46",
    },
    {
      id: 4,
      name: "Sự cố lưới điện ZZZ 9713",
      type: "000000",
      captain_id: null,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: null,
      priority: null,
      created_at: "2020-11-15 17:58:04",
      updated_at: "2020-11-15 17:58:04",
    },
    {
      id: 5,
      name: "Sự cố lưới điện ZZZ 9633",
      type: "000000",
      captain_id: null,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: null,
      priority: null,
      created_at: "2020-11-15 17:58:07",
      updated_at: "2020-11-15 17:58:07",
    },
    {
      id: 6,
      name: "Sự cố lưới điện ZZZ 1616",
      type: "000000",
      captain_id: null,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: null,
      priority: null,
      created_at: "2020-11-15 17:58:40",
      updated_at: "2020-11-15 17:58:40",
    },
    {
      id: 2,
      name: "Sự cố lưới điện ZZZ 8579",
      type: "000000",
      captain_id: null,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: null,
      priority: null,
      created_at: "2020-11-15 17:38:12",
      updated_at: "2020-11-15 17:38:12",
    },
    {
      id: 7,
      name: "Sự cố lưới điện ZZZ 8199",
      type: "000000",
      captain_id: 999,
      status: "Đang xử lý",
      level: "Sự cố cấp I",
      incident_id: 124,
      priority: "1",
      created_at: "2020-11-15 18:06:05",
      updated_at: "2020-11-15 18:06:05",
    },
  ];

  const columns = [
    {
      title: "Tên sự cố",
      dataIndex: "name",
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
    },
    {
      title: "Mức độ",
      dataIndex: "level",
    },
    {
      title: "Đội trưởng",
      dataIndex: "captain",
    },
    {
      title: "",
      key: "operation",
      render: () => (
        <div>
          <CheckOutlined
            onClick={() => {
              setVisibleModal(true);
              setContentModal("Xác nhận xử lý xong sự cố ?");
            }}
            style={{ color: "green", marginLeft: 5 }}
          />
          <CloseOutlined
            onClick={() => {
              setVisibleModal(true);
              setContentModal("Từ chối xử lý sự cố ?");
            }}
            style={{ color: "red", marginLeft: 5 }}
          />
          <InfoCircleOutlined style={{ color: "blue", marginLeft: 5 }} />
        </div>
      ),
    },
  ];

  const getListIncidents = () => {
    console.log(process.env.REACT_APP_DOMAIN_API);
  };

  const handleOk = () => {
    setVisibleModal(false);
  };
  const handleCancel = () => {
    setVisibleModal(false);
  };
  return (
    <div>
      <div class="header" onClick={() => {}}>
        Danh sách công việc xử lý sự cố
      </div>
      <div>
        <Table columns={columns} dataSource={data} size="middle" />
      </div>
      <Modal
        title={null}
        visible={visibleModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>{contentModal}</p>
      </Modal>
    </div>
  );
};

export default ListIncidents;
