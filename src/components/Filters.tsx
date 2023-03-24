import { Select } from 'antd';
import { IConnectionState, IDepartment } from '../data/models';

interface FiltersProp {
    departments: IDepartment[];
    connectionState: IConnectionState[];
    handleDepartmentSelect: any;
    handleconnectionSelect: any;
    countBrigade: number;
}

const Filters = ({
    departments,
    connectionState,
    handleDepartmentSelect,
    handleconnectionSelect,
    countBrigade,
}: FiltersProp) => {
    return (
        <div className="filters p-5 sticky top-0 z-10 bg-slate-200 ">
            <div className="container mx-auto flex justify-between align-middle">
                <div className="selectContainer flex">
                    <div className="select-box w-52">
                        <span>Соединение:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={connectionState.map(
                                (status: IConnectionState) => {
                                    return {
                                        id: status.connectionStateId,
                                        value: status.name,
                                        label: status.name,
                                    };
                                }
                            )}
                            onChange={(value): void =>
                                handleconnectionSelect(value)
                            }
                        />
                    </div>
                    <div className="select-box w-52">
                        <span>Департамент:</span>
                        <Select
                            defaultValue={undefined}
                            style={{ width: 200 }}
                            allowClear
                            options={departments.map(
                                (department: IDepartment) => {
                                    return {
                                        id: department.id,
                                        value: department.name,
                                        label: department.name,
                                    };
                                }
                            )}
                            onChange={(value): void =>
                                handleDepartmentSelect(value)
                            }
                        />
                    </div>
                </div>
                <div className="flex items-center mr-1">
                    <p>
                        Всего <b>{countBrigade}</b> бригад
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Filters;
