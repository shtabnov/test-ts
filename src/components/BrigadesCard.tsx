import { IBrigades, IConnectionState, IDepartment } from "../data/models";
import { Card } from "antd";

interface BrigadeProp {
    brigade: IBrigades;
    department: IDepartment;
    connection: IConnectionState;
}

const BrigadesCard = ({ brigade, department, connection }: BrigadeProp) => {
    return (
        <Card size="small" title={brigade.brigade_name} style={{ width: 300 }}>
            <p className="font-bold">{department.name}</p>
            <p>Соединение: {connection.name}</p>
            <p>Кластер: {brigade.position.cluster}</p>
            <p>Поле: {brigade.position.field}</p>
            <p>Скважина: {brigade.position.well}</p>
        </Card>
    );
};

export default BrigadesCard;
