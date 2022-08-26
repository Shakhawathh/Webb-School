// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import io from 'socket.io-client';
// import { nanoid } from 'nanoid';



// // const socket = io.connect("https://rocky-escarpment-87440.herokuapp.com");
// const socket = io.connect("http://rocky-escarpment-87440.herokuapp.com/");
// const userName = nanoid(1);

// const Chat = () => {
//     const [user, loading, error] = useAuthState(auth);

//     const [message, setMessage] = useState("");
//     const [chat, setChat] = useState([]);


//     const sentChat = (e) => {
//         e.preventDefault();
//         socket.emit("chat", { message, userName });
//         setMessage("");
//     };

//     useEffect(() => {
//         socket.on('chat', (payload) => {
//             setChat([...chat, payload]);
//         });
//     });

//     return (
//         <div>


//             <h1 className='my-5 text-center font-bold text-4xl'> COMMINUCATIONS YOUR FRINDS</h1>


//             <div className='text-center relative'>
//                 <div className="mockup-phone">
//                     <div className="camera"></div>
//                     <div className="display">
//                         <div className="artboard artboard-demo phone-1 ">
//                             <div className="avatar online absolute top-10 ml-40">
//                                 <div className="w-8 h-8 rounded-full top-10 ">
//                                     <img src={user?.photoURL} />
//                                 </div>
//                             </div>

//                             {chat.map((payload, index) => {
//                                 return <p className='text-2xl scroll-auto' key={index}>{payload.message} <span className='font-bold bg-base-300 p-2 rounded'>user: {payload.userName}</span></p>;

//                             })}

//                             <form onSubmit={sentChat} className='text-center bottom-0 fixed bottom-0 absolute mb-5 mt-2'>

//                                 <input
//                                     type="text"
//                                     placeholder="Type here"
//                                     name="chat"
//                                     value={message}
//                                     className="input input-bordered  "
//                                     onChange={(e) => {
//                                         setMessage(e.target.value);
//                                     }}
//                                 />
//                                 <button type='submit' className="btn btn-outline btn-accent ">sent</button>

//                             </form>


//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>

//     );
// };

// export default Chat;