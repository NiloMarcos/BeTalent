import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { formatPhoneNumber } from "../../utils/FormatPhone";
import { formatDate } from "../../utils/FormatDate";

import Arrow from "../../assets/arrow.png";
import Circle from "../../assets/Circle.png";
import SearchError from "../../assets/SearchErro.svg";
import { ModalEmployeeInfo } from "../../components/ModalEmployeeInfo";

interface EmpleyessProps {
  admission_date: string;
  id: string;
  image: string;
  job: string;
  name: string;
  phone: string;
}

export function Home() {
  const [empleyess, setEmpleyess] = useState<EmpleyessProps[]>([]);
  const [input, setInput] = useState("");
  const [modalEmployess, setModalEmployess] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState<EmpleyessProps | null>(null);

  useEffect(() => {
    const getEmployessData = async () => {
      try {
        const response = await fetch("http://localhost:3000/employees");
        if (!response.ok) {
          throw new Error("Error in fetch data");
        }
        const result = await response.json();
        setEmpleyess(result);
      } catch (erro) {
        console.log("Error:", erro);
      }
    };

    getEmployessData();
  }, []);

  const handleToggleModalEmployess = (employee: EmpleyessProps | null) => {
    setSelectedEmployee(employee);
    setModalEmployess((prevState) => !prevState);
  };

  const filterEmployees = empleyess.filter((employee) => {
    const searchTerm = input.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchTerm) ||
      employee.phone.toLowerCase().includes(searchTerm) ||
      employee.job.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div>
      <Header />

      <div className="max-w-[60rem] w-full m-auto flex flex-col px-[1.25rem] lg:flex-row lg:justify-between lg:px-[2rem]">
        <p className="text-[1.25rem] mb-[1.5rem] font-medium text-[black] lg:mb-[0]">
          Funcionários
        </p>
        <input
          className="relative border-[0.063rem] border-[lightGray] rounded-[0.5rem] py-[0.75rem] px-[1rem] w-full outline-none bg-[white] bg-[url('/Search.png')] bg-no-repeat bg-[position:calc(100%-1rem)] lg:max-w-[17.938rem]"
          type="text"
          placeholder="Pesquisar"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <div className="max-w-[60rem] w-full m-auto flex justify-between items-center mt-[1.25rem] px-[1.25rem] lg:mt-[2rem] lg:px-[2rem]">
        <div className="w-full">
          <div className="shadow-2xs bg-[white] rounded-[0.5rem] mb-7 overflow-x-auto lg:mb-0">
            {filterEmployees.length > 0 ? (
              <table className="w-full table-fixed ">
                <thead className="bg-[blue]">
                  <tr className="relative h-[2.938rem]">
                    <th className="text-left text-[white] text-[1rem] font-medium px-[1rem] uppercase rounded-tl-[0.5rem] border-collapse">
                      Foto
                    </th>
                    <th className="text-left text-[white] text-[1rem] font-medium uppercase ">
                      Nome
                    </th>
                    <th className="hidden text-left text-[white] text-[1rem] font-medium uppercase lg:table-cell">
                      Cargo
                    </th>
                    <th className="hidden text-left text-[white] text-[1rem] font-medium uppercase lg:table-cell">
                      Data de Admissão
                    </th>
                    <th className="hidden text-left text-[white] text-[1rem] font-medium uppercase rounded-tr-[0.5rem] border-collapse lg:table-cell">
                      Telefone
                    </th>

                    <th className="rounded-tr-[0.5rem] border-collapse lg:hidden">
                      <img src={Circle} alt="Circle - Icon" className="absolute right-[1.75rem] top-[1.188rem] bottom-[1.188rem] lg:hidden" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filterEmployees.map((employee, index) => (
                    <tr key={index} className="relative h-[3.063rem] shadow-2xs">
                      <td className="px-[1rem]">
                        <img
                          src={employee.image}
                          alt={employee.name}
                          className="w-[2.125rem] h-[2.125rem] rounded-full"
                        />
                      </td>
                      <td>{employee.name}</td>
                      <td className="hidden lg:table-cell">{employee.job}</td>
                      <td className="hidden lg:table-cell">{formatDate(employee.admission_date)}</td>
                      <td className="hidden lg:table-cell">{formatPhoneNumber(employee.phone)}</td>

                      <button
                        className="absolute right-[1rem] top-[0.75rem] bottom-[0.75rem] cursor-pointer lg:hidden"
                        onClick={() => handleToggleModalEmployess(employee)}
                      >
                        <img src={Arrow} alt="Arrow - Modal" />
                      </button>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="flex justify-center items-center flex-col py-5 text-center text-[black]">
                <img src={SearchError} alt="Icone - Erro" />
                <p>Nenhum funcionário encontrado.</p>
              </div>
            )}
          </div>

          <ModalEmployeeInfo
            modalEmployess={modalEmployess}
            selectedEmployee={selectedEmployee}
            handleToggleModalEmployess={handleToggleModalEmployess}
          />
        </div>
      </div>
    </div>
  );
}
