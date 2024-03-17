import { useSession } from "next-auth/react"
import { useRouter, useSearchParams } from 'next/navigation';
import routes from "@/helpers/routes"


function IsAuthenticated() {
    const router = useRouter();

    const { data: session, status } = useSession();
    return status === "authenticated";
}

export default IsAuthenticated