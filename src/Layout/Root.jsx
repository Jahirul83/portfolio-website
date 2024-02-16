import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div>
            <h3 className="text-3xl bg-red-600">navBar</h3>
            <Outlet></Outlet>
            <h3 className="text-3xl bg-green-600">footer</h3>
        </div>
    );
};

export default Root;