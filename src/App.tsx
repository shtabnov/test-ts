import useData from "./hooks/data";
import { useState } from "react";

import BrigadesList from "./components/BrigadesList";
import Filters from "./components/Filters";
import IsLoading from "./components/IsLoading";
import Error from "./components/Error";
import { IFilterData } from "./data/models";

function App() {
    const { brigades, departments, connection, isLoading, error } = useData();
    const [filterData, setFilterData] = useState<IFilterData>({});

    function handleFilterData(data: IFilterData): void {
        // console.log(data);
        setFilterData(data);
    }

    if (isLoading) {
        return (
            <div className="container w-screen h-screen mx-auto flex justify-center items-center">
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
        <div className="container mx-auto max-w-5xl pb-5">
            <Filters
                departments={departments}
                connectionState={connection}
                handleFilterData={handleFilterData}
            />

            <BrigadesList
                brigades={brigades}
                departments={departments}
                connectionState={connection}
                filterData={filterData}
            />
        </div>
    );
}

export default App;
