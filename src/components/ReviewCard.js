import React from 'react';
import profile from "../assets/images/profile.png";
import IcStar from "../assets/images/star_on.png";
import IcStarOff from "../assets/images/star_off.png";

const ReviewCard = ({ review }) => {

    const rating = parseInt(review.rating);
  
    const starImages = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        starImages.push(<img key={i} src={IcStar} alt={`star-on-${i}`} />);
      } else {
        starImages.push(<img key={i} src={IcStarOff} alt={`star-off-${i}`} />);
      }
    }
  
    return (
        <div className="review-card">
        <div className="review-header">
            <div className="user-profile">
            <div className="user-img">
                <img src={profile} alt="프로필 이미지" />
            </div>
            <div>
                <span className="user-name">{review.user.nickname}</span>
                <div className="review-rating">
                {starImages.map((star, index) => (
                    <span key={index}>{star}</span>
                ))}
                </div>
            </div>
            </div>
        </div>
        <div className="review-content">{review.content}</div>
        {/* 이미지가 있다면 띄워주기 */}
        {review.images && (
            <div className="review-images">
            {review.images.map((image, index) => (
                <img key={index} src={image} alt={`review-image-${index}`} />
            ))}
            </div>
        )}
        </div>
    );
};

export default ReviewCard;
