// import { useState } from "react";

// export const TweetCardFoot = () => {
//   const [tweetData, setTweetData] = useState({
//     comment: "",
//     likes: "",
//     retweet: "",
//   });

//   const handleTweet = (field, value) => {
//     setTweetData((prevData) => ({
//       ...prevData,
//       [field]: value,
//     }));
//   };

//   return (
//     <>
//       <span>
//         <label>comments:</label>
//         <input
//           type="number"
//           onChange={handleTweet("comment", tweetData.comment + 1)}
//         />
//       </span>
//       <span>
//         <label>Retweet</label>
//         <input
//           type="number"
//           onChange={handleTweet("comment", tweetData.retweet + 1)}
//         />
//       </span>
//       <span>
//         <label>Likes:</label>
//         <input
//           type="number"
//           onChange={handleTweet("comment", tweetData.likes + 1)}
//         />
//       </span>
//     </>
//   );
// };
