import React from "react";
import "./footer.scss";

export default function AdminFooter() {
  return (
    <div className="admin__footer">
      &copy; {new Date().getFullYear()} AMovie Plex
    </div>
  );
}
