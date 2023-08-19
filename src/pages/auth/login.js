import Form from "@/components/auth/form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";



export default function SignIn () {

    const router = useRouter() ; 

    const onSubmit = async (email, password) => {
        const data = await signIn('credentials', {redirect: false, email, password});
        console.log(data);
        router.push('../profile');
    };
    return <Form signin={true} onFormSubmit={onSubmit} />
};
