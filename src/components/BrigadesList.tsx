import BrigadesCard from './BrigadesCard';
import { IBrigades, IConnectionState, IDepartment } from '../data/models';

interface BigadesProps {
  brigades: IBrigades[];
  departments: IDepartment[];
  connectionState: IConnectionState[];
  selectedDepartmen: number | undefined;
  selectedConnectionState: boolean | undefined;
}

const BrigadesList = ({
  brigades,
  departments,
  connectionState,
  selectedDepartmen,
  selectedConnectionState,
}: BigadesProps) => {
  return (
    <div className="flex flex-wrap gap-3">
      {brigades.map((brigade: IBrigades) => {
        return (
          <BrigadesCard
            key={brigade.id}
            brigade={brigade}
            // подумать как передать не массив а один объект!!! как департаменте так и в статусе соединения
            department={
              departments.filter((department: IDepartment) => {
                return department.id === brigade.department.id;
              })[0]
            }
            connection={
              connectionState.filter((cconnection: IConnectionState) => {
                return (
                  cconnection.connectionStateId === brigade.connectionStateId
                );
              })[0]
            }
          />
        );
      })}
    </div>
  );
};

export default BrigadesList;
