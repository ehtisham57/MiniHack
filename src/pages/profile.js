import { getSession, signOut } from "next-auth/react"
import { useRef, useState, useEffect } from "react";

export default function SignUp({ onFormSubmit }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const [listdata, setlistdata] = useState([])
  const [newitem, setnewitem] = useState(0)


  useEffect(() => {
    showDetails()
  }, [newitem])

  const showDetails = async () => {
    try {
      const response = await fetch("/api/blogs/");
      if (response.ok) {
        const data = await response.json();
        setlistdata(data);
        console.log("Fetched data:", data);
      } else {
        console.error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }




  const onSubmitHandler = (e) => {

    ///////////////get date 
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', options);
    console.log(formattedDate);




    e.preventDefault();
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (!title, !description) {
      alert("Pease add Some Blog")
    }
    else if (title.length && description.length <= 50) {
      alert("Pease Enter Atlease 50 Characters")
    }
    else {
      onSubmit(title, description, formattedDate)
      titleRef.current.value = ''
      descriptionRef.current.value = ''

    }

  }

  const onSubmit = async (title, description, formattedDate) => {
    debugger
    try {
      const response = await fetch("/api/blogs/", {
        method: "POST",
        body: JSON.stringify({ title, description, formattedDate }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.ok) {
        debugger
        let i = newitem + 1
        setnewitem(i)
      }
    } catch (err) {
      console.error(err);
    }

  };

  const Delete = () => {
    alert("Functionality Coming Soon")
  }

  return (


    <div className="max-w-screen-2xl px-24  py-5 mx-auto">
      <div className="flex min-h-full flex-1 flex-col justify-center px-24  py-5 lg:px-8">

        <div className="grid mb-12 md:mb-12 md:grid-cols-1 px-1">
          <div className=" flex px-1 flex-row justify-between">
            <h1 className='mb-2 text-2xl font-bold text-gray-900 dark:text-white py-2'>Dashboard</h1>
            <button onClick={signOut}
              className="items-right hover:text-amber-400 text-white bg-amazon_blue dark:text-white focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5  lg:py-2 focus:outline-none">
              Log out</button>
          </div>


        </div>

        <form onSubmit={onSubmitHandler}>
          <div className="mb-6">
            <label for="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Write Your Title</label>
            <textarea
              placeholder="Type Your Best Title For Blog"
              type="text"
              id="default-input"
              ref={titleRef}
              className="h-20 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
             block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
      dark:text-white"/>
          </div>
          <div className="mb-6">
            <label for="large-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type Your Detail Description For Blog</label>
            <textarea
              placeholder="Type Your Detail Description For Blog"
              ref={descriptionRef}
              type="text" id="large-input" className="h-20 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md dark:text-white" />
          </div>
          <button onClick={onSubmitHandler} className="text-white hover:text-amber-400 my-2 bg-amazon_blue dark:text-white focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-gray-800">ADD Blog</button>
        </form>
        <div>
          {listdata?.map((row, index) => (

            <div key={index} className=" shadow-lg shadow-amber-600/50 mx-10 my-3 flex flex-col items-left justify-left p-8 text-left border-amazon_light rounded-b-lg ">
              <div className="flex items-left justify-left space-x-3">
                <img className="rounded-full w-9 h-9" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png" alt="profile picture" />
                <div className="space-y-0.5 font-medium dark:text-white text-left">
                  <div>{row.title}</div>
                  <div className="text-sm text-amber-600 dark:text-gray-400">{row.formattedDate}</div>
                </div>
              </div>
              <div className="flex flex-col items-left justify-left space-x-3 py-2 my-3">
                <p className="text-sm font-normal text-amazon_blue dark:text-white my-2">{row.description}</p>
              </div>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
};

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false
      }
    }
  }

  return {
    props: {
      session
    }
  }
}


