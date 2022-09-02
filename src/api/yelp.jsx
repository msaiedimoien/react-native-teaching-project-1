import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses/',
    headers: {
        Authorization: 'Bearer tp1KvN8VWzl4N6PWVml71r9_O2bElno8IvsjVqtUlPfY0VMrMhueEBxUDNEvRrsp3I85LoW5kVC6q643PlkdBErvbYg2zDMDpo-NpZdZT0nLb-lrkr4EjugwnJMRY3Yx'
    }
});