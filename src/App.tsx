import useData from './hooks/data';
import { useState } from 'react';

import BrigadesList from './components/BrigadesList';
import Filters from './components/Filters';
import IsLoading from './components/IsLoading';
import Error from './components/Error';

function App() {
    const { brigades, departments, connection, isLoading, error } = useData();

    const [selectedDepartment, setSelectedDepartment] = useState<
        number | undefined
    >(undefined);
    const [selectedConnectionState, setSelectedConnectionState] = useState<
        boolean | undefined
    >(undefined);
    const [countBrigade, setCountBrigade] = useState<number>(0);

    function handleDepartmentSelect(data: string | undefined): void {
        for (let department of departments) {
            if (department.name === data) {
                setSelectedDepartment(department.id);
                break;
            }
            if (data === undefined) {
                setSelectedDepartment(data);
            }
        }
    }

    function handleConnectionSelect(data: string | undefined): void {
        for (let connect of connection) {
            if (connect.name === data) {
                setSelectedConnectionState(connect.connectionStateId);
                break;
            }
            if (data === undefined) {
                setSelectedConnectionState(data);
            }
        }
    }

    function handleCountBrigade(number: number): void {
        setCountBrigade(number);
    }

    if (isLoading) {
        return (
            <div className="container w-full h-screen mx-auto flex justify-center items-center">
                <IsLoading />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container w-screen h-screen mx-auto flex justify-center items-center">
                <Error error={error} />
            </div>
        );
    }

    return (
        <div className="w-full">
            <Filters
                departments={departments}
                connectionState={connection}
                handleDepartmentSelect={handleDepartmentSelect}
                handleconnectionSelect={handleConnectionSelect}
                countBrigade={countBrigade}
            />

            <BrigadesList
                brigades={brigades}
                departments={departments}
                connectionState={connection}
                selectedDepartment={selectedDepartment}
                selectedConnectionState={selectedConnectionState}
                handleCountBrigade={handleCountBrigade}
            />
        </div>
    );
}

export default App;
