import Image from "next/future/image"
import Link from "next/link"

export default function BtnIcon(props) {
  return (
    <div>
      <Link href={props.to}>
      <div className="btn-icon row"><Image className="icon" src={props.src} width={24} height={24}/></div>
      </Link>
    </div>
  )
}
