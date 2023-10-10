// import axios from "axios";
// import { useEffect, useState } from "react";
// import { FiCreditCard, FiDollarSign, FiFlag } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import MemberLeftMenuBar from "../../../Components/Dashboard/MemberLeftMenuBar";
// import TopNavigationBar from "../../../Components/Dashboard/TopNavigationBar";
// import UserLeftMenuBar from "../../../Components/UserLeftMenuBar";
// import { MdClose } from "react-icons/md";
// import StarRating from "../Member/StarRating"; // Import the StarRating component

// function MemberGround() {
//   const [data, setData] = useState([]);
//   const [modal, setModal] = useState(false);
//   const [embedCode, setEmbedCode] = useState("");
//   // const [feedbackRatings, setFeedbackRatings] = useState({});
//   // const [showRatingForm, setShowRatingForm] = useState({});

//   useEffect(() => {
//     // Fetch data using Axios GET request
//     const fetchData = async () => {
//       try {
//         // Set the JWT token in the headers
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Make the GET request
//         const response = await axios.get(
//           "http://localhost:5000/api/member/grounds",
//           config
//         );

//         // Store the response data in state
//         console.log(response);
//         setData(response.data.result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleImageError = (event) => {
//     event.target.src =
//       "https://www.espncricinfo.com/inline/content/image/335266.html?alt=2";
//   };

//   // const handleRatingSubmit = (groundId) => {
//   //   // Submit the rating for the given groundId
//   //   const rating = feedbackRatings[groundId];
//   //   // You can add the logic to send the rating to your server here
//   //   // For example, make a POST request to submit the rating

//   //   // After submitting, you may want to reset the state or provide feedback to the user
//   //   setShowRatingForm({ ...showRatingForm, [groundId]: false }); // Hide the rating form after submission (you can modify this behavior as needed)
//   // };

//   return (
//     <div>
//       <div className='flex w-full'>
//         <div className='hidden sm:block'>
//           <MemberLeftMenuBar />
//         </div>
//         <TopNavigationBar />
//         <div className='w-full p-12 bg-gray-50 h-screen content transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4'>
//           <h2 className='headingh4 text-2xl mt-8 ml-12'>
//             Available Grounds List
//           </h2>
//           <div className='flex flex-wrap gap-4 p-12'>
//             {data?.map((e, index) => {
//               return (
//                 <div
//                   key={index}
//                   className='bg-white hover:bg-gray-200 cursor-pointer hover:shadow-2xl w-96 h-auto overflow-hidden shadow-lg rounded-md'
//                   style={{ minHeight: "100px" }}
//                 >
//                   <img
//                     onError={handleImageError}
//                     className='w-full h-1/2'
//                     src={e.image}
//                     alt=''
//                   />
//                   <h3 className='headingh4 font-semibold relative left-5 mt-3'>
//                     {e.name}
//                   </h3>
//                   <div className='flex justify-around mt-2 gap-2 items-center p-4'>
//                     <div>
//                       <FiFlag className='inline text-xl' />
//                       Location:
//                       <span className='ml-2 para'>{e.location}</span>
//                     </div>
//                     <div>
//                       <FiCreditCard className='inline text-xl mr-1' />
//                       Fee:
//                       <span className='ml-2 para'>{e.price}</span>
//                     </div>
//                   </div>
//                   <div className='flex mb-2 justify-center'>
//                     <button
//                       className='btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2'
//                       onClick={() => {
//                         setEmbedCode(e.embedCode);
//                         setModal(true);
//                       }}
//                     >
//                       View Map
//                     </button>
//                     <Link to={`/member/ground/details/${e._id}`}>
//                       <button className='btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2'>
//                         View Details
//                       </button>
//                     </Link>
//                   </div>
//                   {/* Show the rating form when the button is clicked
//                   {showRatingForm[e._id] ? (
//                     <div className='text-center mt-4'>
//                       <StarRating
//                         onChange={(rating) =>
//                           setFeedbackRatings({
//                             ...feedbackRatings,
//                             [e._id]: rating,
//                           })
//                         }
//                       />
//                       <button
//                         className='btn bg-green-500 hover:bg-green-600 text-white mt-2'
//                         onClick={() => handleRatingSubmit(e._id)}
//                       >
//                         Submit Rating
//                       </button>
//                     </div>
//                   ) : (
//                     <div className='text-center mt-4'>
//                       <button
//                         className='btn bg-blue-500 hover:bg-blue-600 text-white mt-2'
//                         onClick={() =>
//                           setShowRatingForm({
//                             ...showRatingForm,
//                             [e._id]: true,
//                           })
//                         }
//                       >
//                         Rate Ground
//                       </button>
//                     </div>
//                   )} */}
//                 </div>
//               );
//             })}
//             {modal == true ? (
//               <div className='bg-white w-1/2 p-8 shadow-lg rounded-md border border-solids border-gray-300 absolute left-1/4 block m-auto'>
//                 <MdClose
//                   onClick={() => {
//                     setModal(!modal);
//                     setEmbedCode("");
//                   }}
//                   className='float-right text-2xl relative -top-5 left-5 cursor-pointer'
//                 />
//                 {embedCode ? (
//                   <div
//                     dangerouslySetInnerHTML={{
//                       __html: embedCode,
//                     }}
//                   ></div>
//                 ) : (
//                   <h3>No Address Added</h3>
//                 )}
//               </div>
//             ) : undefined}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberGround;
import axios from "axios";
import { useEffect, useState } from "react";
import { FiCreditCard, FiDollarSign, FiFlag } from "react-icons/fi";
import { Link } from "react-router-dom";
import MemberLeftMenuBar from "../../../Components/Dashboard/MemberLeftMenuBar";
import TopNavigationBar from "../../../Components/Dashboard/TopNavigationBar";
import UserLeftMenuBar from "../../../Components/UserLeftMenuBar";
import { MdClose } from "react-icons/md";
// import StarRating from "../Member/StarRating"; // Import the StarRating component

function MemberGround() {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [embedCode, setEmbedCode] = useState("");
  // const [feedbackRatings, setFeedbackRatings] = useState({});
  // const [showRatingForm, setShowRatingForm] = useState({});

  useEffect(() => {
    // Fetch data using Axios GET request
    const fetchData = async () => {
      try {
        // Set the JWT token in the headers
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        // Make the GET request
        const response = await axios.get(
          "http://localhost:5000/api/member/grounds",
          config
        );

        // Store the response data in state
        console.log(response);
        setData(response.data.result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleImageError = (event) => {
    event.target.src =
      "https://www.espncricinfo.com/inline/content/image/335266.html?alt=2";
  };

  // const handleRatingSubmit = (groundId) => {
  //   // Submit the rating for the given groundId
  //   const rating = feedbackRatings[groundId];
  //   // You can add the logic to send the rating to your server here
  //   // For example, make a POST request to submit the rating

  //   // After submitting, you may want to reset the state or provide feedback to the user
  //   setShowRatingForm({ ...showRatingForm, [groundId]: false }); // Hide the rating form after submission (you can modify this behavior as needed)
  // };

  return (
    <div>
      <div className='flex w-full'>
        <div className='hidden sm:block'>
          <MemberLeftMenuBar />
        </div>
        <TopNavigationBar />
        <div className='w-full p-12 bg-gray-50 h-screen content transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4'>
          <h2 className='headingh4 text-2xl mt-8 ml-12'>
            Available Grounds List
          </h2>
          <div className='flex flex-wrap gap-8 p-12'>
            {data?.map((e, index) => {
              return (
                <div
                  key={index}
                  className='bg-white hover:bg-gray-200 cursor-pointer hover:shadow-2xl w-80 h-auto overflow-hidden shadow-lg rounded-md'
                  style={{ minHeight: "100px" }}
                >
                  <img
                    onError={handleImageError}
                    className='w-full h-1/2'
                    src={e.image}
                    alt=''
                  />
                  <h3 className='headingh4 font-semibold relative left-5 mt-3'>
                    {e.name}
                  </h3>
                  <div className='flex justify-around mt-2 gap-2 items-center p-4'>
                    <div>
                      <FiFlag className='inline text-xl' />
                      Location:
                      <span className='ml-2 para'>{e.location}</span>
                    </div>
                    <div>
                      <FiCreditCard className='inline text-xl mr-1' />
                      Fee:
                      <span className='ml-2 para'>{e.price}</span>
                    </div>
                  </div>
                  <div className='flex mb-2 justify-center'>
                    <button
                      className='btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2'
                      onClick={() => {
                        setEmbedCode(e.embedCode);
                        setModal(true);
                      }}
                    >
                      View Map
                    </button>
                    <Link to={`/member/ground/details/${e._id}`}>
                      <button className='btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2 mr-4'>
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
            {modal == true ? (
              <div className='bg-white w-1/2 p-8 shadow-lg rounded-md border border-solids border-gray-300 absolute left-1/4 block m-auto'>
                <MdClose
                  onClick={() => {
                    setModal(!modal);
                    setEmbedCode("");
                  }}
                  className='float-right text-2xl relative -top-5 left-5 cursor-pointer'
                />
                {embedCode ? (
                  <div
                    dangerouslySetInnerHTML={{
                      __html: embedCode,
                    }}
                  ></div>
                ) : (
                  <h3>No Address Added</h3>
                )}
              </div>
            ) : undefined}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberGround;

// import axios from "axios";
// import { useEffect } from "react";
// import { useState } from "react";
// import StarRating from "./StarRating";
// import { FiCreditCard, FiDollarSign, FiFlag } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import MemberLeftMenuBar from "../../../Components/Dashboard/MemberLeftMenuBar";
// import TopNavigationBar from "../../../Components/Dashboard/TopNavigationBar";
// import UserLeftMenuBar from "../../../Components/UserLeftMenuBar";
// import { MdClose } from "react-icons/md";
// import Calendar from "react-calendar";

// //StarRating
// const [feedbackRatings, setFeedbackRatings] = useState({});

// // Initialize feedbackRatings with initial ratings (if available)
// useEffect(() => {
//   const initialFeedbackRatings = {};
//   data?.forEach((ground) => {
//     initialFeedbackRatings[ground._id] = 0; // Initial rating is 0 (no feedback yet)
//   });
//   setFeedbackRatings(initialFeedbackRatings);
// }, [data]);

// function MemberGround() {
//   const [data, setData] = useState();
//   const [modal, setModal] = useState(false);
//   const [embedCode, setEmbedCode] = useState("");

//   useEffect(() => {
//     // Fetch data using Axios GET request
//     const fetchData = async () => {
//       try {
//         // Set the JWT token in the headers
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         };

//         // Make the GET request
//         const response = await axios.get(
//           "http://localhost:5000/api/member/grounds",
//           config
//         );

//         // Store the response data in state
//         console.log(response);
//         setData(response.data.result);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleImageError = (event) => {
//     event.target.src =
//       "https://www.espncricinfo.com/inline/content/image/335266.html?alt=2";
//   };
//   return (
//     <div>
//       <div className=' flex w-full'>
//         <div className=' hidden sm:block'>
//           <MemberLeftMenuBar />
//         </div>
//         <TopNavigationBar />
//         {/* *************************************** */}
//         {/* CONTENT */}
//         {/* *************************************** */}
//         <div className='w-full p-12 h-auto  bg-gray-50 h-screen content transform ease-in-out duration-500 pt-20 px-2 md:px-5 pb-4 '>
//           <h2 className='headingh4 text-2xl mt-8 ml-12'>
//             Available Grounds List
//           </h2>
//           <div className='flex flex-wrap gap-8 p-12 '>
//             {data?.map((e, index) => {
//               return (
//                 <>
//                   {/*<Link to={`/member/ground/details/${e._id}`} key={index}>*/}
//                   <div className='bg-white hover:bg-gray-200 cursor-pointer hover:shadow-2xl  w-72 h-100 overflow-hidden shadow-lg rounded-md'>
//                     <img
//                       onError={handleImageError}
//                       className='w-full h-1/2'
//                       src={e.image}
//                       alt=''
//                     />

//                     <h3 className='headingh4 font-semibold relative left-5 mt-3'>
//                       {e.name}
//                     </h3>
//                     <div className='flex justify-around  mt-2  gap-2 items-center p-4 '>
//                       <div>
//                         <FiFlag className='inline text-xl' />
//                         Location:
//                         <span className=' ml-2 para '>{e.location}</span>
//                       </div>
//                       <div>
//                         <FiCreditCard className='inline text-xl mr-1' />
//                         Fee:
//                         <span className=' ml-2 para'>{e.price}</span>
//                       </div>
//                     </div>
//                     <div className={"flex mb-2 justify-center"}>
//                       <button
//                         className={
//                           "btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2"
//                         }
//                         onClick={() => {
//                           setEmbedCode(e.embedCode);
//                           setModal(true);
//                         }}
//                       >
//                         View Map
//                       </button>

//                       <Link to={`/member/ground/details/${e._id}`} key={index}>
//                         <button
//                           className={
//                             "btn bg-green-500 hover:bg-green-600 text-white block m-auto mt-2"
//                           }
//                         >
//                           View Details
//                         </button>
//                       </Link>
//                     </div>
//                   </div>
//                   {/*</Link>*/}
//                 </>
//               );
//             })}

//             {modal == true ? (
//               <>
//                 <div className='bg-white w-1/2   p-8 shadow-lg rounded-md  border border-solids border-gray-300  absolute left-1/4 block m-auto'>
//                   <MdClose
//                     onClick={() => {
//                       setModal(!modal);
//                       setEmbedCode("");
//                     }}
//                     className='float-right text-2xl relative -top-5 left-5 cursor-pointer'
//                   />

//                   {embedCode ? (
//                     <div
//                       dangerouslySetInnerHTML={{
//                         __html: embedCode,
//                       }}
//                     ></div>
//                   ) : (
//                     <h3>No Address Added</h3>
//                   )}
//                 </div>
//               </>
//             ) : undefined}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MemberGround;
