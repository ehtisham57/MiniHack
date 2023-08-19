import Link from "next/link";
export default function Header () {


    return (
    

    <header>

<div className='w-full h-18 bg-amazon_blue py-4 items-center   text-lightText sticky top-0 flex flex-row z-50'>
      <div className='h-full w-full mx-auto inline-flex  align-middle justify-between gap-1 mdl:gap-3'>
        {/* Logooooooo */}
        <h1 className='px-2 border border-transparent cursor-pointer flex-item-center justify-center h-[70%]'>
          <Link href='/' className=' hover:text-amber-400 w-28 mt-1 object-cover font-bold text-white'> PERSONAL BLOGGING APP </Link>
        </h1>
        </div>

         {/* Profile .............. */}

         <div className='text-xs text-gray-100 flex flex-row justify-center px-2 border 
              border-transparent pr-4
             cursor-pointer hover:text-amber-400 h-[100%]'>
            <p>USERNAME</p>
            </div>
            <div class="text-xs text-gray-100 flex flex-row justify-center px-2 border 
              border-transparent pr-4
             cursor-pointer h-[100%]'">
                    <Link 
                    href="/profile" 
                    class="hover:text-amber-400 text-white font-bold flex items-center">PROFILE</Link>
                  
                    </div>
           
          
        </div>

       
                
         
    </header>);
}