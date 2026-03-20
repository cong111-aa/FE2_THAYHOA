
import { Toaster } from "react-hot-toast";
import { Link, Route, Routes } from "react-router-dom";
import { Form, Input, Button, Table, InputNumber, Select } from "antd";
import { Layout } from "antd";
import { Image } from "antd";
import { EditStory } from "./page/lab6";
import StoryList from "./page/lab5";
import StoryForm from "./page/lab4";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/add">Thêm mới</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4">
        <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<StoryList />} />
              <Route path="/list" element={<StoryList />} />
              <Route path="/add" element={<StoryForm />} />
              <Route path="/edit/:id" element={<EditStory />} />
            </Routes>
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;
