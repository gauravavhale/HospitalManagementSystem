import {
  rolesList,
  usersList,
  permissionMatrix,
  auditLogs,
} from "../../../data/roleAccessDummy";

const RoleAccessControl = () => {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-blue-700">
          Role & Access Control
        </h1>

        <div className="flex gap-3">
          <button className="bg-blue-500 text-white px-4 py-1 text-sm">
            Search
          </button>
          <button className="bg-blue-600 text-white px-4 py-1 text-sm">
            + Create Role
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* LEFT PANEL */}
        <div className="space-y-6">
          {/* Roles List */}
          <div className="bg-white border">
            <div className="bg-blue-700 text-white p-2 text-sm font-semibold">
              Roles List
            </div>

            <div className="p-3 text-sm space-y-3">
              {rolesList.map((role) => (
                <div key={role.id}>
                  <p className="font-medium">{role.name}</p>
                  {role.info && (
                    <p className="text-xs text-gray-500">{role.info}</p>
                  )}
                  <p className="text-xs text-green-600">
                    {role.activeUsers} Active
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Select User */}
          <div className="bg-white border p-3">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-sm font-semibold">Select user</h3>
              <button className="bg-blue-500 text-white text-xs px-2 py-1">
                +Add User
              </button>
            </div>

            <div className="space-y-2 text-sm">
              {usersList.map((user) => (
                <div
                  key={user.id}
                  className="flex justify-between items-center"
                >
                  <span>{user.name}</span>
                  <span className="text-green-600 font-medium">
                    {user.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Security Rules */}
          <div className="bg-white border p-3 text-sm">
            <h3 className="font-semibold mb-2">Security Rules</h3>
            <ul className="space-y-1">
              <li className="text-red-500">
                ❌ Admin cannot edit prescriptions
              </li>
              <li className="text-red-500">
                ❌ Admin cannot delete prescriptions
              </li>
              <li className="text-green-600">
                ✔ All Role Changes Logged
              </li>
              <li className="text-green-600">
                ✔ Permission Change Requires Confirmation
              </li>
              <li>Session Timeout Applied</li>
            </ul>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="col-span-2 space-y-6">
          {/* Role Info */}
          <div className="bg-white border p-4">
            <h3 className="font-semibold mb-4">Role Information</h3>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <label>Role Name:</label>
                <input
                  type="text"
                  value="Reception Staff"
                  readOnly
                  className="w-full border p-1 mt-1"
                />
              </div>

              <div>
                <label>Status</label>
                <div className="mt-2">
                  <span className="bg-green-500 w-10 h-5 inline-block rounded-full"></span>
                </div>
              </div>

              <div className="col-span-2">
                <label>Description:</label>
                <input
                  type="text"
                  value="Handle Patient registration and Appointments"
                  readOnly
                  className="w-full border p-1 mt-1"
                />
              </div>
            </div>
          </div>

          {/* Permission Matrix */}
          <div className="bg-white border p-4">
            <h3 className="font-semibold mb-4">
              Module-wise permission Matrix
            </h3>

            <div className="border">
              <div className="grid grid-cols-6 bg-gray-200 p-2 text-sm font-semibold">
                <div>Module</div>
                <div>View</div>
                <div>Create</div>
                <div>Edit</div>
                <div>Delete</div>
                <div>Special</div>
              </div>

              {permissionMatrix.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 p-2 text-sm border-t items-center"
                >
                  <div>{item.module}</div>
                  <div><input type="checkbox" defaultChecked /></div>
                  <div><input type="checkbox" defaultChecked /></div>
                  <div><input type="checkbox" defaultChecked /></div>
                  <div><input type="checkbox" /></div>
                  <div>{item.special}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Audit Log */}
          <div className="bg-white border p-4">
            <h3 className="font-semibold mb-4">Audit Log Preview</h3>

            <div className="border">
              <div className="grid grid-cols-6 bg-gray-200 p-2 text-sm font-semibold">
                <div>Date & Time</div>
                <div>Action Performed</div>
                <div>Role/User</div>
                <div>Assigned Date</div>
                <div>Status</div>
                <div>Action</div>
              </div>

              {auditLogs.map((log, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 p-2 text-sm border-t items-center"
                >
                  <div>{log.date}</div>
                  <div>{log.action}</div>
                  <div>{log.role}</div>
                  <div>{log.assignedDate}</div>
                  <div className="text-green-600 font-medium">
                    {log.status}
                  </div>
                  <div className="text-red-500 cursor-pointer">
                    Remove
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleAccessControl;