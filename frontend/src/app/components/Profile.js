function AdminProfile()
{
    return (<div>
        Admin
    </div>);
}
function UserProfile()
{
    return (<div>
        User
    </div>);
}
export default function Profile({admin})
{
    /*return (<div>
        {admin?<AdminProfile/>:<UserProfile/>}
    </div>);*/
    /*if(admin)
    {
        return (<div>
            <AdminProfile/>
        </div>);
    }
    else
    {
        return (<div>
            <UserProfile/>
        </div>);
    }*/
    let currentProfile;
    if(admin)
    {
        currentProfile = <AdminProfile/>;
    }
    else
    {
        currentProfile = <UserProfile/>;
    }
    return (<div>
        Is Admin {admin && 'Yes it is admin'}
        {currentProfile}
    </div>)
}