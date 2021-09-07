import axios from "axios";
export default {
  async post(url, data) {
    return await axios.post(url, data);
  },
  /// functions for input validation
  checkPassword: (password) => {
    if (password.length > 8) {
      return true;
    } else {
      return false;
    }
  },
  checkEmail: (email) => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (email.match(validRegex)) {
      return true;
    } else {
      alert("Please enter a valid email");
      return false;
    }
  },
};
