import { useEffect, useState } from "react";
import API from "../services/api";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [edit, setEdit] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: ""
  });

  const loadProfile = async () => {
    const res = await API.get("/profile/me");
    setUser(res.data);

    setForm({
      name: res.data.name || "",
      phone: res.data.phone || "",
      street: res.data.address?.street || "",
      city: res.data.address?.city || "",
      state: res.data.address?.state || "",
      pincode: res.data.address?.pincode || "",
    });
  };

  useEffect(() => {
    loadProfile();
  }, []);

  const updateProfile = async () => {
    await API.put("/profile/update", form);
    alert("Profile Updated");
    setEdit(false);
    loadProfile();
  };

  if (!user) return <h3 className="mt-5 text-center">Loading...</h3>;

  return (
    <div className="container mt-5">
      <h2 className="fw-bold">My Profile</h2>

      {!edit && (
        <div className="mt-4">
          <h5>Name: {user.name}</h5>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone || "Not Added"}</p>

          <h5 className="mt-3">Address:</h5>

          {user.address ? (
            <>
              <p>{user.address.street}</p>
              <p>{user.address.city}, {user.address.state}</p>
              <p>{user.address.pincode}</p>
            </>
          ) : (
            <p>No Address Added</p>
          )}

          <button
            className="btn btn-primary mt-3"
            onClick={() => setEdit(true)}
          >
            {user.address ? "Edit Profile" : "Add Address"}
          </button>
        </div>
      )}

      {edit && (
        <div className="mt-4 card p-3 shadow">
          <h4>Edit Profile</h4>

          <input
            className="form-control mb-2"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({...form, name:e.target.value})}
          />

          <input
            className="form-control mb-2"
            placeholder="Phone"
            value={form.phone}
            onChange={e => setForm({...form, phone:e.target.value})}
          />

          <input
            className="form-control mb-2"
            placeholder="Street"
            value={form.street}
            onChange={e => setForm({...form, street:e.target.value})}
          />

          <input
            className="form-control mb-2"
            placeholder="City"
            value={form.city}
            onChange={e => setForm({...form, city:e.target.value})}
          />

          <input
            className="form-control mb-2"
            placeholder="State"
            value={form.state}
            onChange={e => setForm({...form, state:e.target.value})}
          />

          <input
            className="form-control mb-2"
            placeholder="Pincode"
            value={form.pincode}
            onChange={e => setForm({...form, pincode:e.target.value})}
          />

          <button className="btn btn-success me-2" onClick={updateProfile}>
            Save
          </button>

          <button className="btn btn-secondary" onClick={() => setEdit(false)}>
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
