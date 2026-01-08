import Image from "next/image";
import logo from '@/branding/logo-white.png'

export default function Logo() {

  return (
    <Image src={logo} alt={"mosque-screen-logo"} height={100} width={200} />
  )
}