import prisma from "../../prisma";
import colors from "colors";
// import colors from "./colors";

export const connectDB =async () => {

    try {
        await prisma.$connect();
        // console.log("Connected to MongoDB Database");
        console.log(colors.brightGreen("✅ MongoDB Connected!").underline.bold);


    } catch (err) {

        console.log("Error ", err)
        throw new Error(e.message);
    }finally {
        prisma.$disconnect();
        console.log(" MongoDB Connection closed");
    }

}