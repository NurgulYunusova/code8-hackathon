import { useState } from "react";
import "./customersTable.scss";
import Dialog from "../dialog/Dialog";

const data = [
  {
    id: 1,
    customerName: "John Doe",
    careerInversion: "Software Engineer",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    university: "Example University",
    status: "Pending",
    details: "-",
  },
  {
    id: 2,
    customerName: "Mary Anderson",
    careerInversion: "Software Engineer",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    university: "Example University",
    status: "Accepted",
    details: "-",
  },
  {
    id: 3,
    customerName: "Michele Jackson",
    careerInversion: "Software Engineer",
    phoneNumber: "123-456-7890",
    email: "john.doe@example.com",
    university: "Example University",
    status: "Unaccepted",
    details: "-",
  },
];

const columns = [
  "Customer Name",
  "Career Inversion",
  "Phone Number",
  "Email",
  "University",
  "Status",
  "More",
];

function CustomersTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("1");
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);

    if (value === "1") {
      setFilteredData(data);
    } else {
      const filtered = data.filter(
        (item) => item.status.toLowerCase() === getStatusValue(value)
      );
      setFilteredData(filtered);
    }
  };

  const getStatusValue = (filterValue) => {
    switch (filterValue) {
      case "2":
        return "accepted";
      case "3":
        return "pending";
      case "4":
        return "unaccepted";
      default:
        return "";
    }
  };

  const openDialog = (row) => {
    if (row.status.toLowerCase() === "pending") {
      setSelectedRow(row);
      setIsDialogOpen(true);
    }
  };

  const closeDialog = () => {
    setSelectedRow(null);
    setIsDialogOpen(false);
  };

  const handleAccept = () => {
    // Perform logic for accepting the request here
    console.log("Request accepted for:", selectedRow.customerName);
    // Close the dialog
    closeDialog();
  };

  return (
    <>
      <div className="customersTable">
        <div className="customersTableContainer">
          <div className="top">
            <h3>All Customers</h3>

            <div className="searchAndFilter">
              <div className="search">
                <div className="searchBar">
                  <p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                        stroke="#7E7E7E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M20.9999 21L16.6499 16.65"
                        stroke="#7E7E7E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </p>

                  <input type="text" placeholder="Search" />
                </div>
              </div>

              <div className="filter">
                <div className="dropdown">
                  <h3>Filter: </h3>
                  <select onChange={handleFilterChange} value={filterValue}>
                    <option value="1" defaultValue>
                      All
                    </option>
                    <option value="2">Progress</option>
                    <option value="3">Pending</option>
                    <option value="4">Unaccepted</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="bottom">
            <table>
              <thead>
                <tr>
                  {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filteredData &&
                  filteredData.map((row) => (
                    <tr key={row.id}>
                      <td>{row.customerName}</td>
                      <td>{row.careerInversion}</td>
                      <td>{row.phoneNumber}</td>
                      <td>{row.email}</td>
                      <td>{row.university}</td>
                      <td className={getStatusClass(row.status)}>
                        {row.status}
                      </td>
                      <td>
                        <div
                          className="moreIcon"
                          onClick={() => openDialog(row)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M5.75 12C5.75 12.6904 5.19036 13.25 4.5 13.25C3.80964 13.25 3.25 12.6904 3.25 12C3.25 11.3096 3.80964 10.75 4.5 10.75C5.19036 10.75 5.75 11.3096 5.75 12ZM13.25 12C13.25 12.6904 12.6904 13.25 12 13.25C11.3096 13.25 10.75 12.6904 10.75 12C10.75 11.3096 11.3096 10.75 12 10.75C12.6904 10.75 13.25 11.3096 13.25 12ZM20.75 12C20.75 12.6904 20.1904 13.25 19.5 13.25C18.8096 13.25 18.25 12.6904 18.25 12C18.25 11.3096 18.8096 10.75 19.5 10.75C20.1904 10.75 20.75 11.3096 20.75 12Z"
                              stroke="black"
                              strokeWidth="2.5"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Dialog
              isOpen={isDialogOpen}
              onClose={closeDialog}
              onAccept={handleAccept}
              onCancel={closeDialog}
              customerName={selectedRow ? selectedRow.customerName : ""}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function getStatusClass(status) {
  switch (status.toLowerCase()) {
    case "accepted":
      return "accepted";
    case "unaccepted":
      return "unaccepted";
    case "pending":
      return "pending";
    default:
      return "";
  }
}

export default CustomersTable;
