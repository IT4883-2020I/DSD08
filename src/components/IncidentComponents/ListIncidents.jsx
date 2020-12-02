import React, { useEffect, useState } from "react";
import "../Styles/StyleListIncidents.css";
import { Table, Modal, Button, Input, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Link, useLocation, useHistory } from "react-router-dom";
import { List, Avatar, Spin } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import axios from "axios";
import URL_API from "./url";
// import URL_API from "./url";

const ListIncidents = () => {
  const [dataIncidents, setDataIncidents] = useState([]);
  const [contentModal, setContentModal] = useState(null);
  const [detailIncident, setDetailIncident] = useState(null);
  const [loadingModal, setLoadingModal] = useState(false);
  const [loadingTable, setLoadingTable] = useState(true);
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

  const [searchText, setSearchText] = useState();
  const [searchedColumn, setSearchedColumn] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: process.env.REACT_APP_DOMAIN_API + "/task/listing",
      // url: URL_API + "/report/listing",
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
        setLoadingTable(false);
      })
      .catch(function (err) {
        //handle error
        console.log(err);
      });
  }, []);

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={node => {
          //   this.searchInput = node;
          // }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    // onFilterDropdownVisibleChange: visible => {
    //   if (visible) {
    //     setTimeout(() => this.searchInput.select(), 100);
    //   }
    // },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

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
      sorter: (a, b) => b.name.charCodeAt(0) - a.name.charCodeAt(0),
      sortDirections: ["descend"],
      ...getColumnSearchProps("name"),
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      sorter: (a, b) => b.status.charCodeAt(0) - a.status.charCodeAt(0),
      sortDirections: ["descend"],
      ...getColumnSearchProps("status"),
    },
    {
      title: "Mức độ",
      dataIndex: "level",
      sorter: (a, b) => b.level.charCodeAt(0) - a.level.charCodeAt(0),
      sortDirections: ["descend"],
      ...getColumnSearchProps("level"),
    },
    {
      title: "Đội trưởng",
      dataIndex: "captain_id",
      sorter: (a, b) => b.captain_id - a.captain_id,
      sortDirections: ["descend"],
      ...getColumnSearchProps("captain_id"),
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

  const getInforIncidents = (record) => {
    setDetailIncident(null);
    setVisibleModal(true);
    setLoadingModal(true);
    axios({
      method: "get",
      url: process.env.REACT_APP_DOMAIN_API + "/task/detail",
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
        <Spin spinning={loadingTable} tip="Loading...">
          <Table
            rowKey={(record) => record.id}
            columns={columns}
            dataSource={dataIncidents}
            size="middle"
          />
        </Spin>
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
