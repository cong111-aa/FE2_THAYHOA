import { useState, ChangeEvent, FormEvent } from "react";

type FormType = {
    name: string;
    email: string;
    password: string;
};

function App() {
    const [form, setForm] = useState<FormType>({
        name: "",
        email: "",
        password: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <div className="flex h-screen">


            <div className="w-64 bg-gray-800 text-white p-5">
                <h2 className="text-xl font-bold mb-6">Dashboard</h2>

                <ul className="space-y-3">
                    <li className="hover:text-gray-300 cursor-pointer">Trang chủ</li>
                    <li className="hover:text-gray-300 cursor-pointer">User</li>
                    <li className="hover:text-gray-300 cursor-pointer">Cài đặt</li>
                </ul>
            </div>


            <div className="flex-1">


                <div className="bg-blue-600 text-white p-4">
                    <h1 className="text-xl font-semibold">Admin Panel</h1>
                </div>


                <div className="p-6">

                    <h2 className="text-2xl font-bold mb-4">Form đăng ký</h2>

                    <form
                        onSubmit={handleSubmit}
                        className="max-w-md space-y-4"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="w-full border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border p-2 rounded"
                            onChange={handleChange}
                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="w-full border p-2 rounded"
                            onChange={handleChange}
                        />

                        <button className="bg-blue-500 text-white px-4 py-2 rounded">
                            Submit
                        </button>
                    </form>

                </div>

            </div>
        </div>
    );
}

export default App;