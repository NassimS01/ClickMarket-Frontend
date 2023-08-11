import { SideBar } from "./ProfileStyles";

const Profile = () => {
    return (
        <>
            <SideBar>
                <div className="panel-item">
                    <Link
                        to="/admin/dashboard"
                        className={`panel-link ${active === 1 ? 'active' : ''}`}
                    >
                        <RxDashboard className="panel-icon" />
                        <h5 className="panel-text">Dashboard</h5>
                    </Link>
                </div>

                <div className="panel-item">
                    <Link
                        to="/admin-orders"
                        className={`panel-link ${active === 2 ? 'active' : ''}`}
                    >
                        <FiShoppingBag className="panel-icon" />
                        <h5 className="panel-text">All Orders</h5>
                    </Link>
                </div>

                {/* Rest of the items */}
            </SideBar>
        </>
    )
}

export default Profile;