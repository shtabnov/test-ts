import axios from "axios";
import { useEffect, useState } from "react";

import { IBrigades, IDepartment, IConnectionState } from "../data/models";
import { brigadesAPI, departmentAPI, connectionStateAPI } from "../data/urls";

const useData = () => {
    const [brigades, setBrigades] = useState<IBrigades[]>([]);
    const [departments, setDepartment] = useState<IDepartment[]>([]);
    const [connection, setConnection] = useState<IConnectionState[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>("");

    useEffect(() => {
        axios
            .all([
                axios.get<IBrigades[]>(brigadesAPI),
                axios.get<IDepartment[]>(departmentAPI),
                //При добавлении <IConnectionState[]> к запосу появляется ошибка TS2345
                axios.get(connectionStateAPI),
            ])
            .then(
                axios.spread((brigadesRes, departmentsRes, connectiosRes) => {
                    setBrigades(brigadesRes.data);
                    setDepartment(departmentsRes.data);
                    setConnection(connectiosRes.data);
                })
            )
            .catch((error) => setError(error.message))
            .finally(() => setIsLoading(false));
    }, []);

    return { brigades, departments, connection, isLoading, error };
};

export default useData;
