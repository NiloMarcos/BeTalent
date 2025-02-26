import { formatPhoneNumber } from "../../utils/FormatPhone";
import { formatDate } from "../../utils/FormatDate";

interface EmpleyessProps {
  id: string;
  image: string;
  name: string;
  job: string;
  admission_date: string;
  phone: string;
}

interface ModalEmployeeInfoProps {
  modalEmployess: boolean;
  selectedEmployee: EmpleyessProps | null;
  handleToggleModalEmployess: (employee: EmpleyessProps | null) => void;
}

export function ModalEmployeeInfo({
  modalEmployess,
  selectedEmployee,
  handleToggleModalEmployess,
}: ModalEmployeeInfoProps) {
  return (
    <>
      {modalEmployess && selectedEmployee && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-[400px]">
            <h2 className="text-[20px] font-medium mb-4">
              Detalhes do Funcionário
            </h2>
            <img
              src={selectedEmployee.image}
              alt={selectedEmployee.name}
              className="w-[80px] h-[80px] rounded-[50%] mb-4"
            />
            <p className="mb-[6px]">
              <strong>Nome:</strong> {selectedEmployee.name}
            </p>
            <p className="mb-[6px]">
              <strong>Cargo:</strong> {selectedEmployee.job}
            </p>
            <p className="mb-[6px]">
              <strong>Data de Admissão:</strong>{" "}
              {formatDate(selectedEmployee.admission_date)}
            </p>
            <p className="mb-[10px]">
              <strong>Telefone:</strong>{" "}
              {formatPhoneNumber(selectedEmployee.phone)}
            </p>

            <button
              className="bg-[blue] text-white px-4 py-2 rounded hover:opacity-[.7]"
              onClick={() => handleToggleModalEmployess(null)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
