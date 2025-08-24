import db from "../utils/db.con.js";

export const GetUserData = async (req, res) => {
    try {
        const user = await db;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}