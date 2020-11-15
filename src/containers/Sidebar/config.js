const type = "/" + window.location.pathname.split(/[/,/]+/)[1]
export const sidebarMenu = [
  {
    key: 'Dashboard',
    heading: 'Bảng điều khiển',
    icon: 'fa fa-home-alt',
    route: type + '/dashboard',
  },
  {
    key: 'Drones',
    heading: 'Điều khiển drone',
    icon: 'fas fa-drone-alt',
    route: type + '/drones',
    subMenu: [
      {
        key: 'DroneState',
        heading: 'Tình trạng drone',
        icon: 'fal fa-monitor-heart-rate',
        route: type + '/drone-state',
      },
      {
        key: 'FlySetting',
        heading: 'Thiết lập đường bay',
        icon: 'fa fa-user-chart',
        route: type + '/fly-setting',
      },
      {
        key: 'DroneStatistic',
        heading: 'Thống kê drone',
        icon: 'fa fa-file-chart-line',
        route: type + '/drone-statistic',
      },
    ],
  },
  {
    key: 'FlightHub',
    heading: 'Flight hub',
    icon: 'fab fa-hubspot',
    route: type + '/flight-hub',
  },
  {
    key: 'Payloads',
    heading: 'Payloads',
    icon: 'fas fa-layer-group',
    route: type + '/payloads',
  },
  {
    key: 'metadata',
    heading: 'Hình ảnh và video',
    icon: 'fas fa-images',
    route: type + '/metadata',
  },
  {
    key: 'Problems',
    heading: 'Sự cố',
    icon: 'fas fa-times-octagon',
    route: type + '/problems',
  },
  {
    key: 'SupervisedObject',
    heading: 'Đối tượng giám sát',
    icon: 'fas fa-binoculars',
    route: type + '/supervised-object',
  },
  {
    key: 'GeneralStatistic',
    heading: 'Báo cáo thống kê',
    icon: 'fas fa-chart-line',
    route: type + '/statistic',
  },
  {
    key: 'Warning',
    heading: 'Cảnh báo',
    icon: 'far fa-bell',
    route: type + '/warning',
  },
  {
    key: 'ActivityLog',
    heading: 'Lịch sử hoạt động',
    icon: 'fas fa-file-signature',
    route: type + '/activity-log',
  },
  {
    key: 'SurveillanceDomain',
    heading: 'Miền giám sát',
    icon: 'fas fa-crop-alt',
    route: type + '/surveillance-domain',
  },
  {
    key: 'HandleProblem',
    heading: 'Xử lý sự cố',
    icon: 'fas fa-toolbox',
    route: type + '/handle-problem',
  },
  {
    key: 'UserManagement',
    heading: 'Quản lý người dùng',
    icon: 'fas fa-user-circle',
    route: type + '/user-management',
  },
];
