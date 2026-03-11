import { Table } from "antd";

const columns = [
    {
        title: "ID",
        dataIndex: "id",
    },
    {
        title: "Name",
        dataIndex: "name",
    },
    {
        title: "Age",
        dataIndex: "age",
    },
    {
        title: "Major",
        dataIndex: "major",
    },
]


const data = [
    {
        key: 1,
        id: 1,
        name: "thanh cong",
        age: 18,
        major: "fe1",
    },
    {
        key: 2,
        id: 2,
        name: "huyen trang",
        age: 20,
        major: "fe2",
    },
    {
        key: 3,
        id: 3,
        name: "thien haong",
        age: 18,
        major: "fe1",
    },
    {
        key: 4,
        id: 4,
        name: "nguyen thuy",
        age: 20,
        major: "ecma",
    },
    {
        key: 5,
        id: 5,
        name: "van dai",
        age: 20,
        major: "js nang cao",
    },
];

export default function UserTable() {
    return (
        <Table columns={columns} dataSource={data} />
    );
}