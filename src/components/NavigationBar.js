import React from "react";
import logo from "../logo_amt.svg";
import { MenuOptions } from "./MenuOptions";
import UploadFileIcon from "../icons/upload_file.svg";
import ExportDashboardIcon from "../icons/export_dashboard.svg";
// import GenerateReportIcon from "../icons/generate_report.svg";
// import EventsRegistrationIcon from "../icons/event_registration.svg";
// import ResetDashboard from "../icons/reset_dashboard.svg";
// import DashboardIcon from "../icons/dashboard_icon.svg";
// import LogoutIcon from "../icons/logout_icon.svg";
// import UserIcon from "../icons/person_icon.svg";

export function NavigationBar() {
  const menuItems = [
    { icon: UploadFileIcon, option: "escolher arquivo" },
    { icon: ExportDashboardIcon, option: "exportar dashboard" },
  ];

  return (
    <header className="logo">
      <div className="flex items-center text-center justify-center gap-4 mt-4">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="h-12 w-0.5 bg-secondary rounded-full"></div>
        <p
          id="title_logo"
          className="text-xs text-primary font-outfit font-black"
        >
          ANALYZE MY TRASH
        </p>
      </div>
      <div>
        {menuItems.map((item, index) => (
          <MenuOptions key={index} icon={item.icon} option={item.option} />
        ))}
      </div>
    </header>
  );
}
