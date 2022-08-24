import "./topbar.scss";
import ContactsIcon from "@mui/icons-material/Contacts";
import EmailIcon from "@mui/icons-material/Email";



export default function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={ "topbar " +(menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Soroush
          </a>

          <div className="itemContainer">
            <ContactsIcon className="icon" />
            <span>+49011111111</span>
          </div>

          <div className="itemContainer">
            <EmailIcon className="icon" />
            <span>Soroush.raw@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line2"></span>
            <span className="line1"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}