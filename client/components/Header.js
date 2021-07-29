import TopBar from "./Header/TopBar";
import Menu  from "./Header/Menu";
export default function Header(){
    return (
    <div className="header">
        <TopBar />
        <Menu />
    </div>
    );
}