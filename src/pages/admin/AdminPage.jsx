import Sidebar from "../../components/AdminSidebar/Sidebar";
import CustomersTable from "../../components/customersTable/CustomersTable";
import "./admin.scss";

function AdminPage() {
  return (
    <>
      <div className="admin">
        <Sidebar />
        <CustomersTable />
      </div>
    </>
  );
}

export default AdminPage;
