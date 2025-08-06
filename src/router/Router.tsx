import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Sales from "../pages/Sales";
import Allfarmar from "../pages/Allfarmar";
import AllEmployees from "../pages/AllEmployees";
import Flock from "../pages/Flock";
import FlockfReport from "../pages/FlockfReport";
import Allbrance from "../pages/Allbrance";
import CreateBrance from "../pages/CreateBrance";
import BranchEdit from "../pages/BranchEdit";
import CreateFarmer from "../pages/CreateFarmer";
import CreateEmpolyee from "../pages/CreateEmpolyee";
import FarmerEdit from "../pages/FarmerEdit";
import EditEmployee from "../pages/EditEmployee";
import EmployeePosting from "../pages/EmployeePosting";
import TransferEmply from "../pages/TransferEmply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/sales",
        element: <Sales></Sales>,
      },
      {
        path: "/farmer",
        element: <Allfarmar />,
      },
      {
        path: "/farmer/:id",
        element: <FarmerEdit />,
      },
      {
        path: "/employee",
        element: <AllEmployees />,
      },
      {
        path: "/employee/:id",
        element: <EditEmployee />,
      },
      {
        path: "/create-employee",
        element: <CreateEmpolyee />,
      },
      {
        path: "/flock",
        element: <Flock />,
      },
      {
        path: "/flock-report",
        element: <FlockfReport />,
      },
      {
        path: "/branch",
        element: <Allbrance />,
      },
      {
        path: "/branch/:id",
        element: <BranchEdit></BranchEdit>,
      },
      {
        path: "/create-branch",
        element: <CreateBrance />,
      },
      {
        path: "/create-farmer",
        element: <CreateFarmer />,
      },
      {
        path: "/branch-employee",
        element: <EmployeePosting />,
      },
      {
        path: "/transfer-employe",
        element: <TransferEmply />,
      },
    ],
  },
]);
