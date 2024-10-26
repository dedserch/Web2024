// Navigation.tsx
import React from "react";
import { NavLink } from "react-router-dom";

export const Navigation: React.FC = () => {
    return (
      <nav className="flex space-x-6 text-lg">
        <NavLink
          to="/users"
          className="hover:text-gray-200 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-200"
        >
          Users
        </NavLink>
        <NavLink
          to="/albums"
          className="hover:text-gray-200 transition-colors duration-200 border-b-2 border-transparent hover:border-gray-200"
        >
          Albums
        </NavLink>
      </nav>
    );
  };

