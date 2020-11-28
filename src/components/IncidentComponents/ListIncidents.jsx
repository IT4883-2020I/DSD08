import React, { useEffect, useState } from "react";
import "../Styles/StyleListIncidents.css";
import { Table, Modal, Button } from "antd";
import { Link, useLocation, useHistory } from "react-router-dom";
import { List, Avatar, Spin } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import URL_API from "./url";

const ListIncidents = () => {
  const [dataIncidents, setDataIncidents] = useState([]);
  const [contentModal, setContentModal] = useState(null);
  const [detailIncident, setDetailIncident] = useState(null);
  const [loadingModal, setLoadingModal] = useState(false);
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
      url: URL_API + "/task/listing",
      headers: {
        "api-token": API_TOKEN,
        "project-type": CURRENT_TYPE,
      },
    })
      .then(function (response) {
        // console.log(response);
        //handle success
        // setDataIncidents(response.data[0].tasks);
        setDataIncidents(response.data.tasks);
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
      dataIndex: "captain_id",
    },
    {
      title: "",
      key: "operation",
      render: (record) => (
        <div>
          <CheckOutlined
            // onClick={() => {
            //   setVisibleModal(true);
            //   setContentModal("Xác nhận xử lý xong sự cố ?");
            // }}
            style={{ color: "green", marginLeft: 5, display: "none" }}
          />
          <CloseOutlined
            // onClick={() => {
            //   setVisibleModal(true);
            //   setContentModal("Từ chối xử lý sự cố ?");
            // }}
            style={{ color: "red", marginLeft: 5, display: "none" }}
          />
          <InfoCircleOutlined
            onClick={(value) => {
              getInforIncidents(record);
            }}
            style={{ color: "blue", marginLeft: 5 }}
          />
        </div>
      ),
    },
  ];

  const getListIncidents = () => {
    console.log(process.env.REACT_APP_DOMAIN_API);
  };

  const getInforIncidents = (record) => {
    setDetailIncident(null);
    setVisibleModal(true);
    setLoadingModal(true);
    axios({
      method: "get",
      url: URL_API + "/task/detail",
      headers: {
        "api-token": API_TOKEN,
        "project-type": CURRENT_TYPE,
      },
      params: { id: record.id },
    })
      .then(function (response) {
        setDetailIncident(response.data);
        setLoadingModal(false);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  };

  const handleOk = () => {
    setVisibleModal(false);
  };
  const handleCancel = () => {
    setVisibleModal(false);
  };
  return (
    <div>
      <div className="header" onClick={() => {}}>
        Danh sách công việc xử lý sự cố
      </div>
      <div>
        <Table
          rowKey={(record) => record.id}
          columns={columns}
          dataSource={dataIncidents}
          size="middle"
        />
      </div>
      <Modal
        title={null}
        visible={visibleModal}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Spin spinning={loadingModal} tip="Loading...">
          <div>
            <div className="header">Thông tin chi tiết sự cố</div>
            {detailIncident ? (
              <div>
                <p>Tên sự cố: {detailIncident.task.name}</p>
                <p>Loại sự cố: {typeIncident.name}</p>
                <p>Cấp độ: {detailIncident.task.level}</p>
              </div>
            ) : null}
            <div className="header">Danh sách nhân viên đang xử lý</div>
            <div>
              {detailIncident ? (
                <List
                  itemLayout="horizontal"
                  dataSource={detailIncident.doing_employees}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name}</a>}
                        description="Descripttion"
                      />
                    </List.Item>
                  )}
                />
              ) : null}
            </div>
            <div className="header">Danh sách nhân viên dự kiến xử lý</div>
            <div>
              {detailIncident ? (
                <List
                  itemLayout="horizontal"
                  dataSource={detailIncident.pending_employees}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                        title={<a href="https://ant.design">{item.name}</a>}
                        description="Descripttion"
                      />
                    </List.Item>
                  )}
                />
              ) : null}
            </div>
          </div>
        </Spin>
      </Modal>
    </div>
  );
};

export default ListIncidents;
