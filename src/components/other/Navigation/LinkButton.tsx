import Link from "next/link";

interface LinkButtonProps {
  linkTo: string;
  text: string;
}

const LinkButton = ({ linkTo, text }: LinkButtonProps) => {
  return (
    <Link className="w-full h-full flex items-center justify-center" href={linkTo}>{text}</Link>
  )
}

export default LinkButton