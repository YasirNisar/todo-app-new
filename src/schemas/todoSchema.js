import {z} from "zod";
const todoSchema=z.object({

    id:z.string()
        .default(()=>Date.now()),
    title:z.string()
        .min(3,"Title must be atleast 3 charecters long"),
    detail:z.string()
            .optional()
            .or(z.literal('')),
    completed:z.boolean()
                .default(false)
});

export default todoSchema