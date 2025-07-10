import axios from 'axios';
const axiosInstance=axios.create({
    baseURL:"http://localhost:3000",
    timeout:10000
})
axiosInstance.interceptors.response.use(
  (response) => {
    // On success, return response as is
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;
      const message = error.response.data?.message || "An error occurred";

      // 🔄 Switch-case by status code
      switch (status) {
        case 400:
          console.error("Bad Request:", message);
          alert("⚠️ Bad Request: " + message);
          break;
        case 401:
          console.error("Unauthorized:", message);
          alert("🔐 Unauthorized. Please log in.");
          break;
        case 403:
          console.error("Forbidden:", message);
          alert("🚫 Forbidden. You don't have access.");
          break;
        case 404:
          console.error("Not Found:", message);
          alert("🔍 Resource not found.");
          break;
        case 409:
          console.error("Conflict:", message);
          alert("⚠️ Conflict: " + message);
          break;
        case 500:
          console.error("Server Error:", message);
          alert("💥 Server Error. Try again later.");
          break;
        default:
          console.error("Unhandled error:", message);
          alert(`❗ Error ${status}: ${message}`);
          break;
      }
    } else if (error.request) {
      // Request sent but no response
      console.error("📡 No response from server", error.request);
      alert("📡 No response from server. Check your internet or server.");
    } else {
      // Setup or unexpected error
      console.error("❌ Axios error:", error.message);
      alert("Unexpected error: " + error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;