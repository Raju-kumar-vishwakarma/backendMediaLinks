const { z } = require("zod")

const contactSchema = z.object({
    message: z
        .string({ required_error: "message is required" })
        .trim()
        .min(8, { message: "message must be at least of 8 characters." })
        .max(2254, { message: "message can't be greater than 2254 characters." }),
});

module.exports = contactSchema;
