const login = async (email, password) => {
  try {
    // Make API request to the login endpoint
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Login successful
      const data = await response.json();
      // You can store the authentication token or user session here
      // Return the necessary data if needed
      return data;
    } else {
      // Login failed
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    throw new Error("Login failed");
  }
};

const register = async (email, password) => {
  try {
    // Make API request to the register endpoint
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Registration successful
      const data = await response.json();
      // You can handle any necessary actions on successful registration
      return data;
    } else {
      // Registration failed
      throw new Error("Registration failed");
    }
  } catch (error) {
    throw new Error("Registration failed");
  }
};

const logout = async () => {
  try {
    // Make API request to the logout endpoint
    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      // Logout successful
      // You can handle any necessary actions on successful logout
    } else {
      // Logout failed
      throw new Error("Logout failed");
    }
  } catch (error) {
    throw new Error("Logout failed");
  }
};

export default {
  login,
  register,
  logout,
};
