import '../styles/global.scss'
import { motion } from "framer-motion"

function MyApp({ Component, pageProps , router}) {
  
  return  (
    <motion.div>
    <Component {...pageProps} />
    </motion.div>
      
  )

}

export default MyApp
