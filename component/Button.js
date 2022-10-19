import Image from "next/future/image"
import Link from "next/link"

function BtnIcon(props) {
  return (
    <div>
      <Link href={props.to}  target="_blank">
      <a  target="_blank" className="btn-icon row"><Image alt="icon" className="icon" src={props.src} width={20} height={20}/></a>
      </Link>
    </div>
    
  )
}

function BtnPrimary(props) {
  return (
    <div>
      <Link href={props.to} target="_blank" passHref>
      <a target="_blank"><div className="btn-primary"><p>{props.label}</p><Image alt="icon" className="icon" src={props.src} width={20} height={20}/></div></a>
      </Link>
    </div>
    
  )
}

export {BtnIcon, BtnPrimary};

