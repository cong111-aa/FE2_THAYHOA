import { Link } from "react-router-dom";
import { Button } from "antd";
import { useAuthStore } from "../stores/useAuthStore";

export default function Navbar() {
    const { user, logout } = useAuthStore();

    return (
        <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold">
                    <strong>WEB2091 App</strong>
                </Link>

                <div className="hidden md:flex items-center space-x-8">
                    <Link to="/" className="hover:text-gray-200">
                        Trang chủ
                    </Link>
                    <Link to="/list" className="hover:text-gray-200">
                        Danh sách
                    </Link>
                    <Link to="/add" className="hover:text-gray-200">
                        Thêm mới
                    </Link>
                </div>

                <div className="hidden md:flex items-center space-x-6">
                    {user ? (
                        <>
                            <span>{user.email}</span>
                            <span className="text-green-200">Đã đăng nhập</span>
                            <Button onClick={logout} danger>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <span>Chưa đăng nhập</span>
                            <Link to="/register">
                                <Button type="primary">Đăng ký</Button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}