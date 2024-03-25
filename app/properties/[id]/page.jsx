'use client'

const PropertyPage = () => {
    return (
    <div>
      PropertyPage
    </div> 
    )
  }
export default PropertyPage;


// Example of page navigation back to home page using router via a button
/* 
    return (
    <div>
      <button
        onClick = {() => router.push('/')}
        className = 'bg-blue-500 p-2'>Go Home
      </button>
    </div> 
    )
) */

/* More examples
'use client'
import {useRouter, useParams, useSearchParams, usePathname } from 'next/navigation'

const PropertyPage = () => {
    const router = useRouter()
    const params = useParams 
    OR //if you use this again remember to use one or the other
    const {id} = useParams() //destructure 'id' from params and it is required in all urls in this scenario
    const searchParams = useSearchParams()
    const name = searchParams.get('name')
    const pathname = usePathname()


    return (
    <div>
      <button
        onClick = {() => router.push('/')}
        className = 'bg-blue-500 p-2'>Go Home {pathname}
      </button>
    </div> 
    )
  }
export default PropertyPage;
*/