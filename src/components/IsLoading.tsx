import { Spin } from "antd";

const IsLoading = () => {
    return (
        <div>
            <Spin tip="Loading..." size="large" />
        </div>
    );
};

export default IsLoading;
