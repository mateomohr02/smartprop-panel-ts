import LoginForm from "@/modules/auth/components/LoginForm"
import { NextPage } from "next"

const page : NextPage = () => {
  return (
    <div
    className="w-full h-full p-4"
    >
        <LoginForm/>
    </div>
  )
}

export default page