import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config.js";
export const userMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.trim();
        if (!token) {
            return res.status(401).json({ message: "Token missing" });
        }
        const decoded = jwt.verify(token, JWT_PASSWORD);
        //@ts-ignore
        req.userId = decoded.id;
        next();
    }
    catch (error) {
        console.log("Received token:", JSON.stringify(req.headers.authorization));
        return res.status(401).json({ message: "Invalid token" });
    }
};
//# sourceMappingURL=middleware.js.map