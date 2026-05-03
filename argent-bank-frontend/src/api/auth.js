export const loginUser = async (email, password) => {
  const res = await fetch("http://localhost:3001/api/v1/user/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  if (!res.ok) throw new Error("Identifiants incorrects");
  const data = await res.json();
  return data.body.token;
};

export const fetchUserProfile = async (token) => {
  const res = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "GET",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` 
    },
  });
  if (!res.ok) throw new Error("Erreur profil");
  const data = await res.json();
  return data.body;
};

export const updateUserProfile = async (token, firstName, lastName) => {
  const res = await fetch("http://localhost:3001/api/v1/user/profile", {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}` 
    },
    body: JSON.stringify({ firstName, lastName }),
  });
  if (!res.ok) throw new Error("Erreur mise à jour profil");
  const data = await res.json();
  return data.body;
};
