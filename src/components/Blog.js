import HomePage from "./homePage"

const BlogPost = () => {
//////////get date
   const greet = ()=>{
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
  
    if (currentHour >= 5 && currentHour < 12) {
      return "Good morning!";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good afternoon!";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good evening!";
    } else {
      return "Good night!";
    }
   }
 

   ///////////////get date 
   const options = {weekday: 'short'};
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    console.log(formattedDate);


    return (
        <div>
            <div className="grid mb-12 border md:mb-12 md:grid-cols-1">
                <div className="justify-between items-center flex mb-12 md:mb-12 md:grid-cols-1 px-4">
                    <h1 className='mb-2 text-4xl font-bold text-amber-500 dark:text-black py-4'>{greet()} Reader</h1>
                    <h6 className='mb-2 text-sm font-bold text-amber-500 dark:text-white py-2'>Today is {formattedDate}</h6>

                </div>
                <div className="grid mb-12 md:mb-12 md:grid-cols-1 px-4">
                    <h1 className='space-y-0.5 text-xl font-medium text-left'>ALL BLOG</h1>
                </div>
            </div>          
        
        <HomePage/>
</div>
    )
}

export default BlogPost