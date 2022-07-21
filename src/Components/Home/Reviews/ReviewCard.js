import React from "react";

const ReviewCard = ({ course }) => {
  const { name, img, description, address } = course;
  return (
    <div>
      <div class="card w-96 bg-base-100 border">
        <div class="card-body p-7">
          <div className="flex mb-4">
            <div class="avatar">
              <div class="w-12 rounded-full">
                <img src={img} />
              </div>
            </div>
            <div className="ml-4">
            <h2 class="card-title">{name}</h2>
            <p className="text-gray-500 text-md">{address}</p>
            </div>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-end">
          <i class="text-5xl text-blue-500 fa-solid fa-quote-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;