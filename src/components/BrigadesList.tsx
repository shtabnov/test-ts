import BrigadesCard from './BrigadesCard';
import { IBrigades, IConnectionState, IDepartment } from '../data/models';

interface BigadesProps {
    brigades: IBrigades[];
    departments: IDepartment[];
    connectionState: IConnectionState[];
    selectedDepartment: number | undefined;
    selectedConnectionState: boolean | undefined;
    handleCountBrigade: any;
}

const BrigadesList = ({
    brigades,
    departments,
    connectionState,
    selectedDepartment,
    selectedConnectionState,
    handleCountBrigade,
}: BigadesProps) => {
    const filtredBrigades = brigades
        .filter((brigade) => {
            if (selectedDepartment === undefined) {
                return brigade;
            } else {
                return brigade.department.id === selectedDepartment;
            }
        })
        .filter((brigade) => {
            if (selectedConnectionState === undefined) {
                return brigade;
            } else {
                return brigade.connectionStateId === selectedConnectionState;
            }
        });
    handleCountBrigade(filtredBrigades.length);
    return (
        <div className="container w-full flex flex-wrap gap-3 justify-evenly mx-auto my-4 max-sm:mx-2">
            {filtredBrigades.map((brigade: IBrigades) => {
                return (
                    <BrigadesCard
                        key={brigade.id}
                        brigade={brigade}
                        department={
                            departments.filter((department: IDepartment) => {
                                return department.id === brigade.department.id;
                            })[0]
                        }
                        connection={
                            connectionState.filter(
                                (cconnection: IConnectionState) => {
                                    return (
                                        cconnection.connectionStateId ===
                                        brigade.connectionStateId
                                    );
                                }
                            )[0]
                        }
                    />
                );
            })}
        </div>
    );
};

export default BrigadesList;
