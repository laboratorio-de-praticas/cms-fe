import Image from 'next/image'
import '../src/styles/header.css' 

const Footer=()=>{
    return(
      <div class="bg-dark d-flex justify-content-center">
        <Image src="/imgs/logo_cps_gov.png" alt="Logo CPS Gov" width={409} height={98} className="logo-fatec-foto" />
      </div>
    )
}
export default Footer