import { useAuth } from "../Context/AuthContext";

const TenantLogin = ({ tenantUser }) => {
  const { tenantLogin } = useAuth();

  const loginToTenant = async (email, tenantId) => {
    await tenantLogin(email, tenantId);
  };

  return (
    <div>
      <div className="p-5">
        <p className="text-center font-mono font-bold text-green-500">
          Available Tenants For You
        </p>
      </div>
      <div>
        {tenantUser.map((user, index) => {
          return (
            <div
              className="h-8 bg-green-400 border border-black text-center cursor-pointer"
              onClick={() => {
                loginToTenant(user.email, user.tenantId);
              }}
              key={index}
            >
              <p className="text-blue-800 font-mono font-bold uppercase p-1">{user.tenantId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TenantLogin;
