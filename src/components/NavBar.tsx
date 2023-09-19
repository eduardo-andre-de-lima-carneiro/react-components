import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const NavBar = ({ children }: Props) => {
  return (
    <div>
      <nav className="navbar bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {children}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
