import React from 'react';
import { useForm } from 'react-hook-form';

const SkillBookss = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log("hello", data);
        const url = `https://rocky-escarpment-87440.herokuapp.com/SkillBooks`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='pb-12'>
            <div>
                <h1 className='text-3xl font-bold text-blue-600 text-center my-10'>Add your Academic Books</h1>
            </div>
            <div className='p-2 w-9/12 m-auto bg-slate-100 shadow-2xl pb-2'>
                <form className='' onSubmit={handleSubmit(onSubmit)}>
                  <div className='grid grid-cols-2 justify-around'>
                    <div>
                 <label className="label">
                    <span className="label-text ml-4  text-black font-bold">Books img</span>
                  </label>
                 <input
                        placeholder='Books Img URL' 
                        className='input  bg-gray-200 w-full max-w-xs m-4'
                        type="text" {...register("img")}
                    />
                 </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4 text-black font-bold">Book Name</span>
                  </label>
                    <input
                        type="text"
                        placeholder="Books Name"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("name", {
                            required: {
                                value: true,
                                message: "name Is Required"
                            }
                        })} />
                    </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4 text-black font-bold">Proprietor</span>
                  </label>
                   <input
                        type="text"
                        placeholder="name of Proprietor"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("description", {
                            required: {
                                value: true,
                                message: "Proprietor Is Required"
                            }
                        })} />
                   </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4  text-black font-bold">Book price</span>
                  </label>
                   <input
                        type="text"
                        placeholder="price"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("price", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                   </div>
                    
               <div>
               <label className="label">
                    <span className="label-text ml-4  text-black font-bold">total pages</span>
                  </label>
               <input
                        type="text"
                        placeholder="pages"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("pages", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
               </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4  text-black font-bold"> Format Name</span>
                  </label>
                   <input
                        type="text"
                        placeholder="format"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("format", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                   </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">File Name</span>
                  </label>
                    <input
                        type="text"
                        placeholder="file"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("file", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    </div>
                  <div>
                  <label className="label">
                    <span className="label-text ml-4  text-black font-bold">interactive</span>
                  </label>
                  <input
                        type="text"
                        placeholder="interactive"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("interactive", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                  </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">1.Book Writer Name</span>
                  </label>
                    <input
                        type="text"
                        placeholder="Writer name"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("Writer1", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">1.Book Writer img</span>
                  </label>
                    <input
                        placeholder='writer Img URL'
                        className='input  bg-gray-200 w-full max-w-xs m-4'
                        type="text" {...register("img1")}
                    />
                    </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">2.Book Writer Name</span>
                  </label>
                    <input
                        type="text"
                        placeholder="Writer name"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("Writer2", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4  text-black font-bold">2.Book Writer img</span>
                  </label>
                   <input
                        placeholder='writer Img URL'
                        className='input  bg-gray-200 w-full max-w-xs m-4'
                        type="text" {...register("img2")}

                    />
                   </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4  text-black font-bold">3.Book Writer Name</span>
                  </label>
                   <input
                        type="text"
                        placeholder="Writer name"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("Writer3", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                   </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">3.Book Writer img</span>
                  </label>
                    <input
                        placeholder='writer Img URL'
                        className='input  bg-gray-200 w-full max-w-xs m-4'
                        type="text" {...register("img3")}
                    />
                    </div>
                    <div>
                    <label className="label">
                    <span className="label-text ml-4  text-black font-bold">4.Book Writer name</span>
                  </label>
                    <input
                        type="text"
                        placeholder="Writer name"
                        class="input    bg-gray-200 w-full max-w-xs m-4"
                        {...register("Writer4", {
                            required: {
                                value: true,
                                message: "price Is Required"
                            }
                        })} />
                    </div>
                   <div>
                   <label className="label">
                    <span className="label-text ml-4  text-black font-bold">4.Book Writer img</span>
                  </label>
                   <input
                        placeholder='writer Img URL'
                        className='input  bg-gray-200 w-full max-w-xs m-4'
                        type="text" {...register("img4")}

                    />
                   </div>
                   </div>
                 <br></br>
                    <input type="submit" className='btn w-11/12 ml-4 text-white bg-[#0544f2] text-left hover:bg-blue-600' />
                </form>
            </div>

        </div>
    );
};

export default SkillBookss;