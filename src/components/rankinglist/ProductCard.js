import React from "react";
import IcStar from "../../assets/images/star_on.png";
import TagComponent from './TagComponent'
import ProductLikeButton from "../ProductLikeButton";
import { useNavigate } from "react-router-dom";



function ProductCard({ productLink, imgSrc, productName, reviewCount,
                         filters, category, isGreen,
                     onProductClick, averageRating, user, productId})
{


    //필터태그
    //필터 어떻게 가지고 오나요? 일단 배열로 가지고 온다고 칩시다.
    // const filterTags = filters.map(filter => ({ text: filter, index:0 }));
    //카테고리 태그
    const categoryTag = [{ text: category, index: 1 }];
    //그린태그
    const greenTag = isGreen ? [{ index :2 }] : [];

    // const allTags = [ ...filterTags, ...categoryTag, ...greenTag]

    const allTags = [...categoryTag, ...greenTag]


    return(

        <div key={productId} className="product-item" onClick={onProductClick}>

            <div className="img-wrapper">
                <img src={imgSrc} className="product-img" alt={productName} />
            </div>

            <div className="con-wrapper">
                <div className="item-title">
                    <p className="company">(주) 끼니</p>
                    <h4>{productName}</h4>

            <p className="rating-display">
                <img src={IcStar} alt="별점" />
                {averageRating ? averageRating.toFixed(1) : "0.0"}
                <u>리뷰 {reviewCount}개</u>
            </p>

            {user && (
                <ProductLikeButton
                    userId={user.userId}
                    productId={productId}
                />
            )}
            
            <div className="tag-container">
                {/*최대 5개만 보여준다고 칩시다.
                필터, 카테고리, 그린 각각 하나씩만 보여져야 하나?
                필터 여러개 해당될 수 있잖아요*/}
                {allTags.slice(0, 5).map((tag, idx)=>
                    <TagComponent key={idx} texts={[tag.text]} index={tag.index} />
                )}

                    </div>
                </div>

                <div className="item-info">
                    <ul className="nutrients">
                        <li>탄수화물 : 10g</li>
                        <li>단백질 : 3g</li>
                        <li>지방 : 1.5g</li>
                    </ul>
                    <ul className="rating-wrap">
                        <li>
                            <span className="rating-name">맛</span>
                            <div className="star-wrap">
                                <div className="review-rating">
                                    <img src={IcStar} alt="별점" />
                                    <img src={IcStar} alt="별점" />
                                    <img src={IcStar} alt="별점" />
                                    <img src={IcStar} alt="별점" />
                                </div>
                                <span className="num-rating">5.0</span>
                            </div>
                        </li>
                        <li>
                            <span className="rating-name">가성비</span>
                            <div className="star-wrap">
                                <div className="review-rating">
                                    <img src={IcStar} alt="별점" />
                                    <img src={IcStar} alt="별점" />
                                </div>
                                <span className="num-rating">5.0</span>
                            </div>
                        </li>
                        <li>
                            <span className="rating-name">친환경 포장</span>
                            <div className="star-wrap">
                                <div className="review-rating">
                                    <img src={IcStar} alt="별점" />
                                </div>
                                <span className="num-rating">1.2</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    );
}

export default ProductCard;