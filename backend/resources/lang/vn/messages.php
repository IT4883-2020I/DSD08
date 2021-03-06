<?php

return [
    'title' => [
        'home' => 'Nhà hàng NINJA',
    ],
    'header' => [
        'title' => 'Hệ thống quản lý nhà hàng Ninja',
        'subtitle' => 'Chỉ dành cho nhân viên nhà hàng',
        'login' => 'Đăng nhập',
        'logout' => 'Đăng xuất',
        'logout-modal' => 'Đăng xuất khỏi hệ thống?',
        'logout-cancel' => 'Hủy',
        'language' => 'Language',
    ],
    'sidebar' => [
        'header' => 'Nhà hàng Ninja',
        'management_header' => 'Quản lý',
        'general_settings' => 'Cài đặt chung',
        'account' => [
            'header' => 'Tài khoản',
            'create' => 'Tạo mới tài khoản',
            'list' => 'Danh sách tài khoản',
        ],
        'food' => [
            'header' => 'Món ăn',
            'create' => 'Tạo mới món ăn',
            'list' => 'Danh sách món ăn',
        ],
        'bill' => [
            'header' => 'Hóa đơn',
            'list' => 'Danh sách hóa đơn',
        ],
        'deposit' => [
            'header' => 'Tiền cọc',
            'get' => 'Nhận tiền cọc',
            'repay' => 'Hoàn tiền cọc',
            'list' => 'Danh sách',
        ],
        'export' => [
            'header' => 'Xuất báo cáo',
            'bill' => 'Báo cáo danh sách hóa đơn',
            'food' => 'Báo cáo món ăn được đặt nhiều',
        ],
        'profile' => [
            'header' => 'Hồ sơ',
            'detail' => 'Thông tin tài khoản',
            'change_password' => 'Đổi mật khẩu',
        ],
    ],
    'home' => [
        'receptionist' => [
            'create' => 'Tạo mới hóa đơn',
            'pay' => 'Sửa & Thanh toán',
        ],
        'waiter' => [
            'order' => 'Gọi món',
        ],
        'kitchen' => [
            'new_order' => 'Yêu cầu mới',
            'preparing_order' => 'Đang chuẩn bị',
            'food_name' => 'Tên món',
            'number' => 'Số lượng',
            'table' => 'Bàn',
            'prepare' => 'Chuẩn bị',
            'delete' => 'Xóa',
            'delete_modal' => 'Xóa yêu cầu này?',
            'confirm' => 'Xác nhận',
            'cancel' => 'Hủy',
        ],
    ],
    'status' => [
        'ready' => 'sẵn sàng',
        'prepare' => 'đón khách',
        'run' => 'được sử dụng',
    ],
    'login' => [
        'title' => 'Đăng nhập',
        'header' => 'Đăng nhập',
        'email' => 'Tài khoản',
        'password' => 'Mật khẩu',
        'button' => 'Đăng nhập',
        'forget' => 'Quên mật khẩu',
    ],
    'role' => [
        'employee' => 'Nhân viên',
        'receptionist' => 'Lễ tân',
        'waiter' => 'Bồi bàn',
        'kitchen_manager' => 'Quản lý bếp',
        'accountant' => 'Kế toán',
        'admin' => 'Quản trị viên',
    ],
    'suggest' => 'nhấn để chọn',
    'suggest_password' => 'Mật khẩu ít nhất 8 ký tự!',
    'type' => [
        'salad' => 'Gỏi',
        'rice' => 'Cơm',
        'cake' => 'Bánh',
        'meat' => 'Thịt',
        'seafood' => 'Hải sản',
        'noodles' => 'Bún phở',
        'curry' => 'Cà ri',
        'sushi' => 'Sushi',
        'pizza' => 'Pizza',
        'kimchi' => 'Kimchi',
        'soup' => 'Canh',
        'appetizer' => 'Món khai vị',
        'dessert' => 'Món tráng miệng',
    ],
    'create' => [
        'account' => [
            'title' => 'Tạo tài khoản',
            'header' => 'Tạo tài khoản',
            'name' => 'Họ tên',
            'image' => 'Ảnh',
            'address' => 'Địa chỉ',
            'phone' => 'Số điện thoại',
            'area' => 'Khu vực',
            'role' => 'Vai trò',
            'email' => 'Tài khoản (Thư điện tử)',
            'button' => 'Tạo mới',
        ],
        'food' => [
            'title' => 'Tạo mới món ăn',
            'header' => 'Tạo mới món ăn',
            'name' => 'Tên',
            'image' => 'Hình ảnh',
            'type' => 'Loại',
            'source' => 'Nguồn gốc',
            'material' => 'Nguyên liệu',
            'price' => 'Giá',
            'button' => 'Tạo mới',
        ],
        'bill' => [
            'title' => 'Tạo mới hóa đơn',
            'header' => 'Tạo mới hóa đơn',
            'table' => 'Bàn số',
            'name' => 'Tên khách hàng',
            'address' =>  'Địa chỉ',
            'street' => '...đường',
            'district' => '...quận/huyện',
            'city' => '...tỉnh/thành phố',
            'phone' => 'Số điện thoại',
            'email' => 'Địa chỉ email',
            'button' => 'Tạo mới',
            'create_modal' => 'Tạo mới hóa đơn này?',
            'cancel' => 'Hủy',
        ],
        'bill-detail' => [
            'title' => 'Tạo mới hóa đơn chi tiết mới',
            'header' => 'Tạo mới hóa đơn chi tiết mới',
            'add_option' => 'Thêm tùy chọn',
            'food_name' => '... tên món',
            'amount' => '... số lượng',
            'button' => 'Gọi món',
            'back' => 'Quay lại',
        ],
    ],
    'pay' => [
        'title' => 'Thanh toán hóa đơn',
        'header' => 'Thanh toán hóa đơn',
        'food_name' => 'Tên món',
        'number' => 'Số lượng',
        'total' => 'Tổng cộng',
        'pay_vnd' => 'Thanh toán <VND>',
        'pay_usd' => 'Thanh toán <USD>',
        'pay_modal' => 'Thanh toán hóa đơn này?',
        'pay_bill' => 'Xuất hóa đơn',
        'edit' => 'Sửa hóa đơn',
        'cancel' => 'Hủy',
        'suggest' => 'Nhập tổng số tiền của hóa đơn',
    ],
    'list' => [
        'account' => [
            'title' => 'Danh sách tài khoản',
            'header' => 'Danh sách tài khoản',
            'name' => 'Họ tên',
            'address' => 'Địa chỉ',
            'phone' => 'Số điện thoại',
            'role' => 'Vai trò',
            'button' => [
                'back' => 'Quay lại danh sách',
                'detail' => 'Chi tiết',
                'change_image' => 'Đổi ảnh',
                'edit' => 'Sửa',
                'delete' => 'Xóa',
                'cancel' => 'Hủy',
            ],
            'modal_title' => 'Xóa tài khoản này?',
        ],
        'food' => [
            'title' => 'Danh sách món ăn',
            'header' => 'Danh sách món ăn',
            'image' => 'Hình ảnh',
            'name' => 'Tên món ăn',
            'type' => 'Loại',
            'source' => 'Nguồn gốc',
            'material' => 'Nguyên liệu',
            'price' => 'Giá',
            'vnd_price' => 'Giá (VND)',
            'usd_price' => 'Giá (USD)',
            'button' => [
                'detail' => 'Chi tiết',
                'edit' => 'Sửa',
                'delete' => 'Xóa',
                'cancel' => 'Hủy',
                'close' => 'Đóng',
            ],
            'modal_title' => 'Xóa món ăn này?',
        ],
        'bill' => [
            'title' => 'Danh sách hóa đơn',
            'header' => 'Danh sách hóa dơn',
            'id' => 'Số',
            'table' => 'Bàn',
            'name' => 'Tên khách hàng',
            'phone' => 'Số điện thoại',
            'book_time' => 'Đặt bàn',
            'paytime' => 'Thanh toán',
        ],
    ],
    'deposit' => [
        'get_head' => 'Nhận tiền cọc',
        'repay_head' => 'Hoàn tiền cọc',
        'vnd' => 'VND',
        'usd' => 'USD',
        'email' => 'Thư điện tử',
        'password' => 'Mật khẩu',
        'get' => 'Xác nhận nhận tiền',
        'repay' => 'Xác nhận hoàn tiền',
    ],
    'change_password' => [
        'title' => 'Thay đổi mật khẩu',
        'header' => 'Thay đổi mật khẩu',
        'email' => 'Tài khoản (Thư điện tử)',
        'old_password' => 'Mật khẩu hiện tại',
        'new_password' => 'Mật khẩu mới',
        'repassword' => 'Xác nhận mật khẩu mới',
        'button' => 'Thay đổi mật khẩu',
    ],
    'reset_password' => [
        'title' => 'Đặt lại mật khẩu',
        'header' => 'Đặt lại mật khẩu',
        'email_address' => 'Địa chỉ thư điện tử',
        'button' => 'Gửi yêu cầu',
    ],
    'reset_form' => [
        'title' => 'Đặt lại mật khẩu',
        'header' => 'Đặt lại mật khẩu',
        'email' => 'Tài khoản',
        'password' => 'Mật khẩu mới',
        'repassword' => 'Xác nhận mật khẩu mới',
        'button' => 'Đặt lại',
    ],
    'first_login' => [
        'title' => 'Đăng nhập lần đầu',
        'header' => 'Thay đổi mật khẩu lần đăng nhập đầu tiên',
        'email' => 'Tài khoản',
        'password' => 'Mật khẩu',
        'repassword' => 'Xác nhận mật khẩu',
        'button' => 'Thay đổi',
    ],
    '404' => [
        'title' => '404',
        'header' => 'Không tìm thấy trang',
        'content' => 'Trang không tồn tại hoặc đã bị chặn truy cập!',
    ],
];
