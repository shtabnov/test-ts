import { Select } from "antd";
import { IConnectionState, IDepartment } from "../data/models";

interface FiltersProp {
    departments: IDepartment[];
    connectionState: IConnectionState[];
    handleFilterData: any;
}

const Filters = ({
    departments,
    connectionState,
    handleFilterData,
}: FiltersProp) => {
    return (
        <div className="filters p-5 flex sticky top-0 z-10 bg-slate-200">
            <div className="select-box w-52">
                <span>Соединение:</span>
                <Select
                    defaultValue={null}
                    style={{ width: 200 }}
                    allowClear
                    options={connectionState.map((status: IConnectionState) => {
                        return {
                            id: status.connectionStateId,
                            value: status.name,
                            label: status.name,
                        };
                    })}
                    onChange={(_v, option): void => {
                        console.log(option);
                        return handleFilterData(option);
                    }}
                />
            </div>
            <div className="select-box w-52">
                <span>Департамент:</span>
                <Select
                    defaultValue={null}
                    style={{ width: 200 }}
                    allowClear
                    options={departments.map((department: IDepartment) => {
                        return {
                            id: department.id,
                            value: department.name,
                            label: department.name,
                        };
                    })}
                    onChange={(_v, option): void => {
                        console.log(option);
                        return handleFilterData(option);
                    }}
                />
            </div>
        </div>
    );
};

export default Filters;
