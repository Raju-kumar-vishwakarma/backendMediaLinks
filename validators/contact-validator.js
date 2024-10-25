const { z } = require("zod")

const contactSchema = z.object({
    username: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters." })
        .max(255, { message: "Name must not be more than 255 characters." }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(10, { message: "Email must be at least of 12 characters." }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 digits." })
        .max(10, { message: "Phone must not be more than 10 digits." }),
    message: z
        .string({ required_error: "message is required" })
        .trim()
        .min(8, { message: "message must be at least of 8 characters." })
        .max(2254, { message: "message can't be greater than 2254 characters." }),
});

module.exports = contactSchema;