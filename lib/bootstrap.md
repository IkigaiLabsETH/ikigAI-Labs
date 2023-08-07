import { githubRepoUrl, isSafari, isServer } from './config'

const detail = `Live The AI Life: ${githubRepoUrl}`
const banner = `

_      _______      ________ 
| |    |_   _\ \    / /  ____|
| |      | |  \ \  / /| |__   
| |      | |   \ \/ / |  __|  
| |____ _| |_   \  /  | |____ 
|______|_____|   \/   |______|
                              
                              
 _______ _    _ ______ 
|__   __| |  | |  ____|
   | |  | |__| | |__   
   | |  |  __  |  __|  
   | |  | |  | | |____ 
   |_|  |_|  |_|______|
                       
                       
 _      _____ ______ ______ 
| |    |_   _|  ____|  ____|
| |      | | | |__  | |__   
| |      | | |  __| |  __|  
| |____ _| |_| |    | |____ 
|______|_____|_|    |______|
                                                                                               
   ${detail}
`

export async function bootstrap() {
  if (isServer) return

  if (isSafari) {
    console.log(detail)
  } else {
    console.log(banner)
  }
}
