// import React from "react";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import {todoSchema} from "@/components/Validation/InputFormValidation.ts";
//
//
//
//
//
//
// const HookForm = () => {
//     const { register, handleSubmit, formState: { errors }, reset } = useForm({
//         resolver: yupResolver(todoSchema),
//     });
//
//     const onSubmitHandler = (data) => {
//         console.log({ data });
//         reset();
//     };
//
//     return (
//         <form onSubmit={handleSubmit(onSubmitHandler)}>
//             <h2>Lets sign you in.</h2>
//             <br/>
//
//             <input {...register("email")}
//                    placeholder="email"
//                    type="email"
//                    required/>
//             <p>{errors.email?.message}</p>
//             <br/>
//
//             <input
//                 {...register("password")}
//                 placeholder="password"
//                 type="password"
//                 required
//             />
//             <p>{errors.password?.message}</p>
//
//             <br/>
//
//             <button type="submit">Sign in</button>
//         </form>
//     );
// };
//
// export default HookForm;
